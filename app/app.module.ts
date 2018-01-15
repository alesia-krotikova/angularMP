import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseComponent} from './course/course.component';
import {SearchComponent} from "./search/search.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CourseService} from './course.service'
import {AuthorizationService} from "./authorization.service";
import {LoginModule} from "./login/login.module";
import {PaintBorderDirective} from './paint-border.directive';
import {DurationInMinPipe} from './duration.pipe';
import {OrderByPipe} from './order-by.pipe';
import {FilterPipe} from './filter.pipe';
import {AddCourseModule} from "./add-course/add-course.module";
import {ShareModule} from "./share.module";

@NgModule({
    imports:        [BrowserModule, CommonModule, FormsModule, LoginModule, AddCourseModule, ShareModule],
    declarations:   [AppComponent, HeaderComponent, CoursesComponent, CourseComponent,
        SearchComponent, FooterComponent, PaintBorderDirective, OrderByPipe, FilterPipe],
    providers:      [CourseService, AuthorizationService],
    bootstrap:      [AppComponent]
})

export class AppModule {}
