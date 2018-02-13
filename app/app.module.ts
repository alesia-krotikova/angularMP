import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
import {NotFoundComponent} from "./not-found.component";

import {RoutingModule}     from './routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {StoreModule} from '@ngrx/store'
//import {loginReducer} from './reducers/login.reducer'
import {AuthGuard} from "./guards/auth-guard";

@NgModule({
    imports:        [BrowserModule, CommonModule, FormsModule, LoginModule, AddCourseModule,
        HttpModule, ShareModule, ReactiveFormsModule, RoutingModule],
        //StoreModule.provideStore({login: loginReducer}), StoreDevtoolsModule.instrument()],
    declarations:   [AppComponent, HeaderComponent, CoursesComponent, CourseComponent,
        SearchComponent, FooterComponent, PaintBorderDirective, OrderByPipe, FilterPipe, NotFoundComponent,],
    providers:      [CourseService, AuthorizationService, AuthGuard],
    bootstrap:      [AppComponent]
})

export class AppModule {}
