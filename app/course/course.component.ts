import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Course} from '../course';
import {CourseService} from "../course.service";

@Component({
    selector: 'app-course',
    templateUrl: '/app/course/course.component.html',
    styleUrls: ['/app/course/course.component.css']
})

export class CourseComponent implements OnInit {
    @Input() course: Course;
    @Output() remove = new EventEmitter<number> ();

    courses: Course[];

    constructor(private courseService: CourseService) {}

    deleteCourse(id: number) {
        this.remove.emit(id);
    }

    ngOnInit() {}
}