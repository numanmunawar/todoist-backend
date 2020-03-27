import { Injectable, NotFoundException } from "@nestjs/common";
import { tasks } from "./task.model";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import * as moment from 'moment';

@Injectable()
export class TaskService{
    private tasks: tasks;
    constructor(@InjectModel('task') readonly TaskModel: Model<tasks>){}

    async addTask( task : string) {
        const dateTime = moment().format("YYYY-MM-DD"); 
        const newTask = this.TaskModel ({task, dateTime,isFav:false});
        const result = await newTask.save();
        return result.id as string;
    }

    async getTasks(){ 
    return  await this.TaskModel.find();    
    }

    async getSingleTask(id:string ){
        const singeTask =  await this.TaskModel.findById(id);
        if(!singeTask){
            throw new NotFoundException;
        }
        return singeTask;
    }

    async deleteTask(taskId : string){
        return await this.TaskModel.deleteOne({_id:taskId}).exec();
     }
    async favTask(taskId :string , obj:object){   
        const update = {$set: obj}
        return await this.TaskModel.update({_id:taskId},update)
     }

}