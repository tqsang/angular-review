import { TeacherComponent } from './teacher/teacher.component';
import { StudentStartComponent } from './student/student-start/student-start.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentComponent } from './student/student.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: '', component: StudentStartComponent },
      { path: 'new', component: StudentEditComponent },
      { path: ':id', component: StudentDetailComponent },
      { path: ':id/edit', component: StudentEditComponent },
    ],
  },
  { path: 'teacher', component: TeacherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
