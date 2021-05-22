import { Students } from './../../models/student.model';
import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],
})
export class StudentItemComponent implements OnInit {
  @Input() student: Students;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}
}
