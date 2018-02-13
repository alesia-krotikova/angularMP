import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Http, Headers, Response, Request, RequestOptions, URLSearchParams, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import {Course} from './course';

@Injectable()

export class CourseService {
    baseURL: string;

    constructor(private http: Http) {
        this.baseURL = 'http://localhost:3004';
    }

    getList(start: number, count: number, query: string): Observable<any> {
        let params: string = `?start=${start}&count=${count}&query=${query}`;

        return this.http.get(`${this.baseURL}/courses${params}`)
            .map((res: Response) => res.json())
            .map(list => {
                list.courses = list.courses.map(course => this.mapToCourse(course, true));

                return list;
            });
    }

    getAuthorsList(): Observable<any[]> {
        return this.http.get(`${this.baseURL}/authors`)
            .map((res: Response) => res.json());
    }

    addItem(course: any): Observable<Response> {
        return this.http.post(`${this.baseURL}/courses`, course)
            .map((res: Response) => {
                return res;
            });
    }

    getItemById(id: number): Observable<Course> {
        return this.http.get(`${this.baseURL}/courses/${id}`)
            .map((res: Response) => res.json())
            .map(course => this.mapToCourse(course, false));
    }

    updateItem(course: any): Observable<Response> {
        return this.http.put(`${this.baseURL}/courses/${course.id}`, course)
            .map((res: Response) => {
                return res;
            });
    }

    removeItem(id: number): Observable<boolean> {
        return this.http.delete(`${this.baseURL}/courses/${id}`)
            .map((res: Response) => {
                return true;
            });
    }

    mapToCourse(data: any, isList: boolean): any {
        let course: any = {
            title: data.name,
            date: data.date,
            duration: data.length,
            description: data.description,
            authors: data.authors
        };

        if (isList) {
            course.topRated = data.isTopRated;
            course.id = data.id;
        }

        return course;
    }
}