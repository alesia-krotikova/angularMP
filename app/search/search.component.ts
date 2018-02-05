import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
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