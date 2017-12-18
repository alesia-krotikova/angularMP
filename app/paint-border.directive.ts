import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[paintBorder]'
})

export class PaintBorderDirective {
    @Input('paintBorder') createdDate: number;
    currentDate: number;
    periodOfFreshCourse: number;
    color: string;

    constructor(private el: ElementRef) {
        this.currentDate = Date.now();
        this.periodOfFreshCourse = 24*60*60*1000*14;
    }

    ngOnInit() {
        if (this.createdDate < this.currentDate &&
            this.createdDate >= this.currentDate - this.periodOfFreshCourse) {
            this.color = '#3bef3b';
        } else if (this.createdDate > this.currentDate) {
            this.color = '#25c4d8';
        }

        this.color && (this.el.nativeElement.style.borderColor = this.color);
    }
}