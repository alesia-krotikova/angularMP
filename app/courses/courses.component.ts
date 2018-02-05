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
    courses: Course[] = [];
    isRemoved: boolean;

    constructor(private courseService: CourseService, private filter: FilterPipe) {}

    getCourses(): void {
        const portionCourses: number = 4;
        let coursesCount: number = this.courses.length,
            start = this.isRemoved ? 0 : coursesCount,
            count = this.isRemoved ? coursesCount : portionCourses;

        this.subscription = this.courseService.getList(start, count, "")
            .subscribe(courses => {
                console.log(courses);
                this.courses = this.isRemoved ? courses : this.courses.concat(courses);
                this.isRemoved = false;
            });
    }

    loadMore(): void {
        this.getCourses();
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
        this.courseService.getList(0, 0, str)
            .subscribe(courses => {
                this.courses = courses;
            });
    }

    remove(course: Course): void {
        if (confirm('Do you really want to delete the course?')) {
            this.courseService.removeItem(course.id)
                .subscribe(res => {
                    this.isRemoved = true;
                    this.getCourses();
                });
        }
    }
}
