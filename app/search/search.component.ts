import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: '/app/search/search.component.html',
    styleUrls: ['/app/search/search.component.css']
})

export class SearchComponent implements OnInit {
    courseName: string;

    constructor () {
        this.courseName = '';
    }

    ngOnInit () {}

    findCourse (): void {
        this.courseName && console.log(`course name: ${this.courseName}`);
    }
}