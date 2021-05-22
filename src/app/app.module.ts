import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentStartComponent } from './student/student-start/student-start.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    HeaderComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentStartComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
