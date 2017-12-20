import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course'
import * as _ from 'lodash/lodash';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    constructor() {}

    transform(courses: Course[], field: string): Course[]  {
        return _.sortBy(courses, course => course[field]);
    }
}