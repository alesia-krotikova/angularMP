import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Course} from '../course';

@Component({
    selector: 'app-course',
    templateUrl: '/app/course/course.component.html',
    styleUrls: ['/app/course/course.component.css']
})

export class CourseComponent implements OnInit {
    @Input() course: Course;
    @Output() change = new EventEmitter<string> ();

    delete (id: string) {
        this.change.emit(id);
    }

    constructor() {}

    ngOnInit() {}
}