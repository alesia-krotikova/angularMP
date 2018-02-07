import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthorizationService} from '../authorization.service'
import {CourseService} from '../course.service'
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'add-course-page',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent {
    addForm: FormGroup;
    authorsList: any;
    subscription: Subscription;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private courseService: CourseService) {}

    ngOnInit() {
        this.getAuthors();

        this.addForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            date: [Date.now()],
            duration: 0,
            authors: []
        });
    }

    ngOnDestory() {
        this.subscription.unsubscribe();
    }

    getAuthors() {
        this.subscription = this.courseService.getAuthorsList()
            .subscribe(authors => {
                this.authorsList = authors;
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
