import { Component } from '@angular/core';

@Component({

selector: 'my-student',
templateUrl:'app/student/student.component.html',
styleUrls:['app/student/student.component.css']

})

export class studentComponent{

studentData:any = [

{name:"sachin",address:"delhi",email:"dcsk@nxs.com"}

]
}