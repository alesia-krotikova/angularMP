import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
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
    queryCourse: string = '';
    fullList: number;

    constructor(private courseService: CourseService,
                private filter: FilterPipe,
                private router: Router) {}

    getCourses(): void {
        const portionCourses: number = 4;
        let coursesCount: number = this.courses.length,
            start = this.isRemoved ? 0 : coursesCount,
            count = this.isRemoved ? coursesCount || portionCourses : portionCourses;

        this.subscription = this.courseService.getList(start, count, this.queryCourse)
            .subscribe(list => {
                this.courses = this.isRemoved ? list.courses : this.courses.concat(list.courses);
                this.isRemoved = false;
                this.fullList = list.size;
            });
    }

    loadMore(): void {
        this.getCourses();
    }

    isShowLoadMore(): boolean {
        return (this.fullList === this.courses.length);
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
        this.queryCourse = str;
        this.isRemoved = true;
        this.getCourses();
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

    edit(id: number): void {
        this.router.navigate([`/courses/${id}`]);
    }
}
