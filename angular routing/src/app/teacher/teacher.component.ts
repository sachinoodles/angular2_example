import { OnInit,Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({

selector:'my-teacher',
templateUrl:'app/teacher/teacher.component.html',
styleUrls:['app/student/student.component.css']

})

export class teacherComponent{

constructor(private activatedRoute: ActivatedRoute) {
 let params: any = this.activatedRoute.snapshot.params;
    console.log(params.id);

}
teacherData:any = [

{name:"sachin",address:"delhi",email:"dcsk@nxs.com"}

]




}