import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  updateProgress(courseId: string, percent: number) {
    return this.http.post(`${this.apiUrl}/progress`, {
      course: courseId,
      percent
    });
  }
}
