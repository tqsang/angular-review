import { Students } from './../models/student.model';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService],
})
export class StudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  studentsSelected: Students;

  ngOnInit(): void {
    this.studentService.studentsSelected.subscribe((student: Students) => {
      this.studentsSelected = student;
    });
  }
}
