import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Course} from './course';

@Injectable()

export class CourseService {
    baseURL: string;
    isAddCoursePage: boolean;

    constructor(private http: Http) {
        this.baseURL = 'http://localhost:3004';
    }

    getList(start: number, count: number, query: string): Observable<Course[]> {
        let params: string = query ? `?q=${query}` : `?start=${start}&count=${count}`;

        return this.http.get(`${this.baseURL}/courses${params}`)
            .map((res: Response) => res.json())
            //.map(courses => courses.filter(course => Date.parse(course.date) >= 1483228800000))
            .map(courses => courses.map(course => {
                let item = new Course;

                item.id = course.id;
                item.title = course.name;
                item.topRated = course.isTopRated;
                item.date = course.date;
                item.duration = course.length;
                item.description = course.description;

                return item;
            }));
    }

    createCourse(): void {
        this.isAddCoursePage = true;
    }

    getItemById(id: number): void {}

    updateItem(id: number): void {}

    isCreatingCourse(): boolean {
        return this.isAddCoursePage;
    }

    removeItem(id: number): Observable<boolean> {
        return this.http.delete(`${this.baseURL}/courses/${id}`)
            .map((res: Response) => {
                return true;
            });
    }
}