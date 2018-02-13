import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    @Output() find = new EventEmitter<string> ();
    searchBlock: FormControl;

    constructor() {
        this.searchBlock = new FormControl('', []);
    }

    findCourse() {
        this.find.emit(this.searchBlock.value);
    }

    ngOnInit() {
        this.searchBlock.valueChanges
            .map((query: string) => query.trim())
            .filter((query: string) => query && query.length > 4)
            .debounce(() => Observable.timer(250))
            .map((query: string) => this.find.emit(query))
            .subscribe();
    }
}