import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    constructor() {}

    transform(courses: any[], findStr: string): any {
        return courses.filter((el: any) => {
            return el.title.includes(findStr);
        });
    }
}