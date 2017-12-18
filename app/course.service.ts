import {Injectable} from '@angular/core';
import {Course} from './course';
import {COURSES} from './mock';

@Injectable()

export class CourseService {
    constructor() {}

    getList(): Course[] {
        return COURSES;
    }

    createCourse(): void {}

    getItemById(id: number): void {}

    updateItem(id: number): void {}

    removeItem(id: number): void {
        COURSES.find((course, index) => {
            if (course.id === id) {
                COURSES.splice(index, 1);

                return true;
            }
        });
    }
}