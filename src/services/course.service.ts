import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getCourses() {
    return this.http.get(`${this.apiUrl}/courses`);
  }
}
