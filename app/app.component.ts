import {Component, OnInit} from '@angular/core';
import {COURSES} from 'mock';

@Component({
    selector: 'courses-page',
    templateUrl: '/app/app.component.html',
    styleUrls: ['/app/app.component.css']
})
export class AppComponent {
    courses = COURSES;

    change(id: string) {
        console.log(`course id should be deleted: ${id}`);
    }

    constructor() {}

    ngOnInit() {}
}
