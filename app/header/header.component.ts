import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: '/app/header/header.component.html',
    styleUrls: ['/app/header/header.component.css']
})
export class HeaderComponent implements OnInit {
    logoPath: string;
    logoText: string;
    currentUserName: string;

    constructor () {
        this.logoPath = '/images/logo.png';
        this.logoText = 'Angular Courses';
        this.currentUserName = 'Alesia Krotikova';
    }

    ngOnInit () {}
}