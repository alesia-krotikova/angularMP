import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service'

@Component({
    selector: 'add-course-page',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent {
    fields: any = {
        title: "",
        description: "",
        date: "",
        duration: ""
    };

    constructor(private authorizationService: AuthorizationService) {}

    ngOnInit() {}

    save(): void {
        console.log(this.fields);
    }

    cancel(): void {
        console.log('cancel');
    }
}
