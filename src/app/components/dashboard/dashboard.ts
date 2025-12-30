import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {

  private courseService = inject(CourseService);

  courses: Course[] = [];
  filteredCourses: Course[] = [];
  areas: string[] = [];

  searchText = '';
  selectedArea = '';

  expandedCourseId: string | null = null;

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
        this.filteredCourses = res;
        this.areas = [...new Set(res.map(c => c.area))];
      },
      error: (err) => {
        console.error('Error cargando cursos', err);
      }
    });
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      (!this.selectedArea || course.area === this.selectedArea) &&
      course.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  toggleCourse(courseId: string): void {
    this.expandedCourseId =
      this.expandedCourseId === courseId ? null : courseId;
  }
}
