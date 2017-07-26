import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentService {

       studentData:any = [
       {name:"sachin",address:"ggn",email:"sachin@gmail.com"},
       {name:"aman",address:"delhi",email:"aman@gmail.com"},
       {name:"pankaj",address:"delhi",email:"pankaj@gmail.com"}
       
       ]

         constructor(private http:Http) {}
         
         
         
         getdata(){
         return this.studentData;
         }




}
