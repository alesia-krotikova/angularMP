import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'

import {AddCourseComponent} from './add-course.component';
import {ShareModule} from "../share.module";
import {DateComponent} from "./date/date.component";
import {DurationComponent} from "./duration/duration.component";

@NgModule({
    imports:        [CommonModule, FormsModule, ShareModule],
    declarations:   [AddCourseComponent, DateComponent, DurationComponent],
    exports:        [AddCourseComponent]
})

export class AddCourseModule {}