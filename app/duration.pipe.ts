import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'durationInMin'})

export class DurationInMinPipe implements PipeTransform {
    transform(value: number): string {
        const HOUR = 60;
        let hours = Math.floor(value / HOUR),
            min = `${value % HOUR}min`;

        return hours ? `${hours}h ${min}` : min;
    }
}