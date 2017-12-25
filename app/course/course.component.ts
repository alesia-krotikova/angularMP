import {Component, EventEmitter, ChangeDetectionStrategy, OnInit, Input, Output} from '@angular/core';
import {Course} from '../course';

@Component({
    selector: 'app-course',
    templateUrl: '/app/course/course.component.html',
    styleUrls: ['/app/course/course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseComponent implements OnInit {
    @Input() course: Course;
    @Output() remove = new EventEmitter<number> ();

    constructor() {}

    deleteCourse(id: number) {
        this.remove.emit(id);
    }

    ngOnInit() {}
}