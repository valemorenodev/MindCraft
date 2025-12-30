export interface Lesson {
  _id: string;
  title: string;
  content: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  area:
    | 'Front End'
    | 'Back End'
    | 'Cloud'
    | 'UX/UI'
    | 'Arquitectura de Software'
    | 'Metodologías Ágiles';

  initialLevel: Lesson[];
  meddleLevel: Lesson[];
  advancedLevel: Lesson[];

  createdAt?: string;
  updatedAt?: string;
}
