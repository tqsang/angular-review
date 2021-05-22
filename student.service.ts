import { Students } from './../models/student.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentsSelected = new EventEmitter<Students>();
  private students: Students[] = [
    new Students('17DH146234', 'Tran Van A', '10/10/2010'),
    new Students('17DH122789', 'Tran Van B', '10/10/2010'),
  ];
  constructor() {}

  getStudent() {
    return this.students;
  }
  getStudentIndex(index: number) {
    return this.students[index];
  }
  addStudent(student: Students) {
    this.students.push(student);
  }
  updateStudent(index: number, newStudent: Students) {
    this.students[index] = newStudent;
  }
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
