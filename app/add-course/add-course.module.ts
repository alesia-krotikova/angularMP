import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {AddCourseComponent} from './add-course.component';
import {ShareModule} from "../share.module";
import {DateComponent} from "./date/date.component";
import {DurationComponent} from "./duration/duration.component";
import {AuthorsComponent} from "./authors/authors.component";

@NgModule({
    imports:        [CommonModule, FormsModule, ShareModule, ReactiveFormsModule],
    declarations:   [AddCourseComponent, DateComponent, DurationComponent, AuthorsComponent],
    exports:        [AddCourseComponent]
})

export class AddCourseModule {}
