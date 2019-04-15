import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sts: Student) {
    this.service.formData = Object.assign({}, sts);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteStudent(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Student Register');
      });
    }
  }

}
