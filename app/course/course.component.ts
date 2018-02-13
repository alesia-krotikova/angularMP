import {Component, EventEmitter, ChangeDetectionStrategy, OnInit, Input, Output} from '@angular/core';
import {Course} from '../course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseComponent implements OnInit {
    @Input() course: Course;
    @Output() remove = new EventEmitter<Course> ();
    @Output() edit = new EventEmitter<number> ();

    constructor() {}

    deleteCourse(course: Course) {
        this.remove.emit(course);
    }

    editCourse(id: number) {
        this.edit.emit(id);
    }

    ngOnInit() {}
}