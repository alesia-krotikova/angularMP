import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Course} from '../course'
import {CourseService} from '../course.service'
import {FilterPipe} from '../filter.pipe';

@Component({
    selector: 'courses-page',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
    subscription: Subscription;
    courses: Course[];

    constructor(private courseService: CourseService, private filter: FilterPipe) {}

    getCourses(): void {
        this.subscription = this.courseService.getList()
            .subscribe(courses => {
                this.courses = courses
            });
    }

    isEmptyCoursesList(): boolean {
        return !this.courses.length;
    }

    ngOnInit() {
        this.getCourses();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    find(str: string): void {
        this.getCourses();
        this.courses = this.filter.transform(this.courses, str);
    }

    add(bool: boolean): void {
        this.courseService.createCourse();
    }

    remove(course: Course): void {
        if (confirm('Do you really want to delete the course?')) {
            this.courses = this.courses.filter((item: Course) => item !== course);
            this.courseService.removeItem(course.id);
        }

    }
}
