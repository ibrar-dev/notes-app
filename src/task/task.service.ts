import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { JobService } from "../jobs/jobs.service";
import axios from "axios";
import { CreateJobDto } from 'src/jobs/dto/create-job.dto';
import * as moment from 'moment';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  @Inject(JobService)
  private readonly jobService: JobService;

  // @Cron('* * * * * *')
  @Cron('0 40 * * * *')
  async handleCron() {
    // "Machine Learning"
    //'artificial intelligence'
    // 'Software Engineer'
    // 'Data Scientist'
    // 'Blockchain'
    let urlsList = [
      "https://api.apify.com/v2/actor-tasks/peerless_protractor~cryptotask/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
      "https://api.apify.com/v2/actor-tasks/peerless_protractor~mltask/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
      "https://api.apify.com/v2/actor-tasks/peerless_protractor~aitask/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
      "https://api.apify.com/v2/actor-tasks/peerless_protractor~datasciencetask/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
      "https://api.apify.com/v2/actor-tasks/peerless_protractor~blockchaintask/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6"
    ]

    for (let index = 0; index < urlsList.length; index++) {
      const element = urlsList[index];
      axios.get(element)
        .then(async (res) => {
          let data = res.data;
          if (data && data.length) {
            for (let index = 0; index < data.length; index++) {
              const element = data[index];


              if (element && element.googleJobs) {
                for (let index = 0; index < element.googleJobs.length; index++) {
                  let category: any = null;
                  if (element && element.searchQuery && element.searchQuery.term) {
                    category = element.searchQuery.term;
                    if (category) {
                      category = category.replace("%20", " ").replace("%", " ").toLowerCase();
                    }
                  }

                  const job = element.googleJobs[index];

                  let resp = [];
                  let qualify = [];
                  try {
                    if (job && job.jobHighlights && job.jobHighlights.length) {
                      for (let index = 0; index < job.jobHighlights.length; index++) {
                        const jobElement = job.jobHighlights[index];
                        if (jobElement.title === "Qualifications") {
                          qualify = [...jobElement.items];
                        } else if (jobElement.title === "Responsibilities") {
                          resp = [...jobElement.items];
                        }
                      }
                    }
                  } catch (error) {
                  }
                  // if (category ==="artificial intelligence") {
                  const today = moment();

                  let day = job.metadata.postedAt ? job.metadata.postedAt : '0';
                  let ddd = day.replaceAll('s', '').replaceAll('day ago', '').replaceAll('month ago', '').replaceAll('hour ago').replaceAll(' ', '')
                  const futureDate = today.subtract(parseInt(ddd), day.includes('hour') ? 'hours' : day.includes('month') ? 'months' : 'days').toISOString();
                  console.log("futureDate", futureDate)
                  let obj: CreateJobDto = {
                    title: job.title,
                    companyName: job.companyName,
                    location: job.location,
                    via: job.via,
                    description: job.description,
                    thumbnail: job.thumbnail,
                    applyLink: job.applyLink.link ? job.applyLink.link : '',
                    applyLinkTitle: job.applyLink.title ? job.applyLink.title : '',
                    postedAt: job.metadata.postedAt ? job.metadata.postedAt : '',
                    scheduleType: job.metadata.scheduleType ? job.metadata.scheduleType : '',
                    workFromHome: job.metadata.workFromHome ? job.metadata.workFromHome : false,
                    salary: job.metadata.salary ? job.metadata.salary : '',
                    qualifications: [...qualify],
                    responsibilities: [...resp], category: category,
                    postedDate: futureDate
                  }
                  if (job.companyName !== 'Upwork') {
                    try {
                      let sav = await this.jobService.createFromCronJob(obj);
                    } catch (error) {
                    }
                  }
                }

                // }
              }

            }
          }


        })
        .catch((err) => {
          console.log("hwew", err.message,
            element);
        });
    }

    this.logger.debug('Called when the second is 45', new Date().toISOString());

  }


}


