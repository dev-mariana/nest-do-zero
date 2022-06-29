import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from 'src/courses/entities/course.entity';
import { Tag } from 'src/courses/entities/tag.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Course, Tag])
    ],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule { }
