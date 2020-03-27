import { Controller, Post,Body, Get,Param, Delete, Put, Query}from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('tasks')
export class tasksController {
    constructor(private readonly taskService :TaskService ){}



    @Post()
    async addTask( @Body('task') Task : string){
        const generatedId = await this.taskService.addTask(Task);
        return {id:generatedId}
    }
    @Get()
    async getAllTasks(){
        return await this.taskService.getTasks();
    }
    @Get(':id')
    async gettask(@Param('id') taskId : string,){
        return await this.taskService.getSingleTask(taskId)
    }

    @Put(':id')
    async favTasks(@Param('id') taskId:string ){
        const fav =  await this.taskService.getSingleTask(taskId)
        let bln 
        if (fav.isFav === true){
            bln = false 
        }
        else {
            bln = true
        }
        const obj = {isFav:bln}
        return await this.taskService.favTask(taskId,obj);
    }

    @Delete(':id')
    async deleteTask(@Param('id') taskId : string,){
       let result = await this.taskService.deleteTask(taskId);
       return result;
    }

}