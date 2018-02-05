import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CoursesComponent}       from './courses/courses.component';
import {AddCourseComponent}     from './add-course/add-course.component';
import {LoginComponent}         from './login/login.component';
import {AuthGuard}              from './guards/auth-guard';
import {NotFoundComponent}      from './not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
    {path: 'courses/:id', component: AddCourseComponent, canActivate: [AuthGuard]},
    {path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},

    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {}
