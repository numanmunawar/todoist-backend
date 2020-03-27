import { Injectable, NotFoundException } from "@nestjs/common";

import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { tasks } from "/home/numan/Desktop/project/src/tasks/task.model";
// import { tasks } from "./tasks/task.model";


@Injectable()
export class favTaskService {
    constructor(@InjectModel('task') readonly TaskModel: Model<tasks>){}
     async getFavTask(){
        const favTask =  await this.TaskModel.find({isFav:true});
        if(!favTask){
            throw new NotFoundException;
        }
        return favTask;
    }
    
}