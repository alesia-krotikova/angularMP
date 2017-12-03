import {Component, OnInit} from '@angular/core';
import {CARDS} from 'mock';

@Component({
    selector: 'courses-page',
    templateUrl: '/app/app.component.html',
    styleUrls: ['/app/app.component.css']
})
export class AppComponent {
    cards = CARDS;

    onChanged(id: string) {
        console.log(`course id should be deleted: ${id}`);
    }

    constructor() {}

    ngOnInit() {}
}
