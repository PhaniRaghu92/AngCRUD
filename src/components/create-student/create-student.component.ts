import { Component } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  public stdCreate: Student = new Student();
  public errMessage: string = '';

  constructor(private stdService: StudentService) {}

  handleSaveClick(): void {
    if (this.stdCreate.stdName === '') {
      this.errMessage = `the field stdname is required`;
      return;
    }

    this.stdService.createStudent(this.stdCreate).subscribe(          
      (res) => {
        if (res) {
          window.location.href = '/';
        }
      },
      (error) => {
        alert('Error');
      }
    );
  }
}
