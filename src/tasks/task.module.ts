import { Module } from "@nestjs/common";
import { tasksController } from "./task.controller";
import { TaskService } from "./task.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskSchema } from "./task.model";
import { favTasksController } from "src/favTasks/favTask.controller";
import { favTaskService } from "src/favTasks/favTask.service";

@Module({
    imports:[MongooseModule.forFeature([{name : 'task', schema: TaskSchema}])],
    controllers : [tasksController,favTasksController],
    providers : [TaskService,favTaskService],
})
export class taskModule{}