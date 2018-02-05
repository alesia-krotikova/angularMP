import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service'
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'add-course-page',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent {
    addForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router) {}

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            date: [Date.now()],
            duration: 0,
            authors: []
        });
    }

    setFormMode(p) {
        //this.formGroup.setValue(deepCopy(p));
    }

    save(): void {
        console.log(this.addForm.value);
    }

    cancel(): void {
        this.router.navigate(['/courses']);
    }
}
