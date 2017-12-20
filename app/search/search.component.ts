import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: '/app/search/search.component.html',
    styleUrls: ['/app/search/search.component.css']
})

export class SearchComponent implements OnInit {
    @Output() find = new EventEmitter<string> ();
    courseName: string;

    constructor() {
        this.courseName = '';
    }

    findCourse(str: string) {
        this.find.emit(str);
    }

    ngOnInit() {}
}