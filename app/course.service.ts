import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {of} from 'rxjs/observable/of';
import {Course} from './course';
import {COURSES} from './mock';

@Injectable()

export class CourseService {
    subject: Subject<Course[]> = new Subject();
    courses: Course[];
    isAddCoursePage: boolean;

    constructor() {
        let periodOfFreshCourse = Date.now() - 24*60*60*1000*14;

        this.courses = COURSES.filter((course) => +course.date >= periodOfFreshCourse);
    }

    getList(): Observable<Course[]> {
        return of(this.courses);
    }

    createCourse(): void {
        this.isAddCoursePage = true;
    }

    getItemById(id: number): void {}

    updateItem(id: number): void {}

    isCreatingCourse(): boolean {
        return this.isAddCoursePage;
    }

    removeItem(id: number): void {
        this.courses.find((course, index) => {
            if (course.id === id) {
                this.courses.splice(index, 1);
                return true;
            }
        });

        this.subject.next(this.courses);
    }
}