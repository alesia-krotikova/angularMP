import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course'

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    constructor() {}

    transform(courses: Course[], findStr: string): any {
        return courses.filter((el: Course) => {
            return el.title.includes(findStr);
        });
    }
}