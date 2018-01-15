import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Course} from './course';
import {COURSES} from './mock';

@Injectable()

export class CourseService {
    isAddCoursePage: boolean;
    constructor() {}

    getList(): Observable<Course[]> {
        return of(COURSES);
    }

    createCourse(): void {
        this.isAddCoursePage = true;
    }

    getItemById(id: number): void {}

    updateItem(id: number): void {}

    isCreatingCourse(): boolean {
        return this.isAddCoursePage;
    }

    removeItem(id: number): Observable<Course[]> {
        COURSES.find((course, index) => {
            if (course.id === id) {
                COURSES.splice(index, 1);

                return true;
            }
        });

        return of(COURSES);
    }
}