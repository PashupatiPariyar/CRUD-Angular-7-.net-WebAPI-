import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData: Student;
  list : Student[];
  rootURL = "http://localhost:56821/api"

  constructor( private http: HttpClient ) { }

  postSts(formData: Student){
    return this.http.post(this.rootURL+'/Student',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Student')
    .toPromise().then(res => this.list = res as Student[]);
  }

  putStudent(formData : Student){
    return this.http.put(this.rootURL+'/Student/'+formData.stsId,formData);
  }

   deleteStudent(id : number){
    return this.http.delete(this.rootURL+'/Student/'+id);
   }
}
