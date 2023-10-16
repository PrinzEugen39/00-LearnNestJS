import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [NinjasModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
