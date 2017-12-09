import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CourseComponent} from 'course/course.component';
import {SearchComponent} from "./search/search.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
    imports:        [BrowserModule, CommonModule, FormsModule],
    declarations:   [AppComponent, HeaderComponent, CourseComponent, SearchComponent, FooterComponent],
    bootstrap:      [AppComponent]
})

export class AppModule {}
