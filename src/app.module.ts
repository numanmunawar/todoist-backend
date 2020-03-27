import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { taskModule } from './tasks/task.module';

@Module({
  imports: [taskModule , MongooseModule.forRoot('mongodb+srv://todoist:nBnPZ1TOsyFsJp7d@cluster0-rxdrr.mongodb.net/todoist?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
