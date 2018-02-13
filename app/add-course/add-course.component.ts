import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthorizationService} from '../authorization.service'
import {CourseService} from '../course.service'
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import {Course} from "../course";

@Component({
    selector: 'add-course-page',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent {
    addForm: FormGroup;
    authorsList: any;
    currentId: string;
    subscription: Subscription;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private courseService: CourseService) {}

    ngOnInit() {
        let urlId: string = this.router.url.split('/')[2];

        this.getAuthors();
        this.currentId = (urlId === "new") ? "" : urlId;

        this.addForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            date: [Date.now()],
            duration: 0,
            authors: []
        });

        this.currentId && this.getEditForm(+this.currentId);
    }

    ngOnDestory() {
        this.subscription.unsubscribe();
    }

    getEditForm(id: number): void {
        this.courseService.getItemById(id)
            .subscribe(course => this.addForm.setValue(course));
    }

    getAuthors() {
        this.subscription = this.courseService.getAuthorsList()
            .subscribe(authors => {
                this.authorsList = authors;
            });
    }

    save(): void {
        let newCourse = this.mapToServerCourse(this.addForm.value);

        if (this.currentId) {
            this.courseService.updateItem(newCourse)
                .subscribe(res => {
                    res && alert("Course was updated");
                    this.router.navigate(['/courses']);
                });

            return;
        }

        this.courseService.addItem(newCourse)
            .subscribe(res => {
                res && alert("Course was added");
                this.router.navigate(['/courses']);
            });
    }

    mapToServerCourse(data): any {
        return {
            id: this.currentId,
            name: data.title,
            date: data.date,
            length: data.duration,
            description: data.description,
            authors: data.authors
        }
    }

    cancel(): void {
        this.router.navigate(['/courses']);
    }
}
