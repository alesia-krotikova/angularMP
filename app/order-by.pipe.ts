import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course'

@Pipe({
    name: 'orderByDate'
})

export class OrderByDatePipe implements PipeTransform {
    constructor() {}

    transform(courses: Course[]): Course[]  {
        courses.sort((a: any, b: any) => {
            return (a.creatingDate - b.creatingDate);
        });

        return courses;
    }
}