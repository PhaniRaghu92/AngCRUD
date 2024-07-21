import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent implements OnInit {
  public stdResult: Student[] = [];
  public errMessage: string = '';

  public editId: string = '';

  constructor(private stdService: StudentService) {}
  ngOnInit(): void {
    this.getAllStudents();
  }

  //getallStudents
  private getAllStudents(): void {
    this.stdService.getAllStudents().subscribe(
      (res: Student[]) => {
        this.stdResult = res;
      },
      (err) => {
        this.errMessage = err.message;
      }
    );
  }
  //delete
  handleDelete(stdno: string): void {
    const uRes = window.confirm('Are you sure to delete?');
    if (uRes) {
      this.stdService.deleteStudent(stdno).subscribe(
        (d) => {
          this.getAllStudents();
        },
        (e) => {
          this.errMessage = e.message;
        }
      );
    }
  }

  //handleEdit

  handleEdit(id: string): void {
    this.editId = id;
  }

  handleUpdate(updatedStd: Student, id: string): void {
    this.stdService.updateStudent(updatedStd, id).subscribe(
      (d) => {
        window.location.href = '/';
      },
      (err) => {
        alert('something went wrong during update');
      }
    );
  }
}
