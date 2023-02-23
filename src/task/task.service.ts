// import { Injectable } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';

// @Injectable()
// export class TaskService {
//   create(createTaskDto: CreateTaskDto) {
//     return 'This action adds a new task';
//   }

//   findAll() {
//     return `This action returns all task`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} task`;
//   }

//   update(id: number, updateTaskDto: UpdateTaskDto) {
//     return `This action updates a #${id} task`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} task`;
//   }
// }



import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { JobService } from "../jobs/jobs.service";
import axios from "axios";
import { CreateJobDto } from 'src/jobs/dto/create-job.dto';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  @Inject(JobService)
  private readonly jobService: JobService;

  @Cron('0 1 * * * *')
  async handleCron() {

    axios.get("https://api.apify.com/v2/actor-tasks/peerless_protractor~google-jobs-scraper-task-2/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6")
      .then(async(res) => {
        let data = res.data;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];

          for (let index = 0; index < element.googleJobs.length; index++) {
            const job = element.googleJobs[index];
            let resp = [];
            let qualify = [];
            try {
              for (let index = 0; index < job.jobHighlights.length; index++) {
                const jobElement = job.jobHighlights[index];
                if (jobElement.title === "Qualifications") {
                  qualify = [...jobElement.items];
                } else if (jobElement.title === "Responsibilities") {
                  resp = [...jobElement.items];
                }
              }
            } catch (error) {

            }

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
              responsibilities: [...resp]
            }
            try {
              let sav = await this.jobService.createFromCronJob(obj);
            } catch (error) {
            }

          }

        }


      })
      .catch((err) => {
        console.log("hwew", err);
      });
    this.logger.debug('Called when the second is 45', new Date().toISOString());

  }


}

