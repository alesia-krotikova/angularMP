import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Card} from '../card';

@Component({
    selector: 'app-card',
    templateUrl: '/app/card/card.component.html',
    styleUrls: ['/app/card/card.component.css']
})

export class CardComponent implements OnInit {
    @Input() card: Card;
    @Output() onChanged = new EventEmitter<string> ();

    delete (id: string) {
        this.onChanged.emit(id);
    }

    constructor() {}

    ngOnInit() {}
}