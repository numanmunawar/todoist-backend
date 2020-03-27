import { Injectable, NotFoundException } from "@nestjs/common";
import { tasks } from "../tasks/task.model";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import * as moment from 'moment';

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
