import { Controller, Post,Body, Get,Param, Delete, Put,}from "@nestjs/common";
import { favTaskService } from "./favTask.service";

@Controller('favTasks')
export class favTasksController {
    constructor(private readonly favTaskService :favTaskService ){ }

    @Get()
    async getFavTask(){
        return await this.favTaskService.getFavTask()
    }
}