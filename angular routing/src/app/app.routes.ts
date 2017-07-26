import { Routes ,RouterModule } from '@angular/router';
import { studentComponent } from './student/student.component';
import { teacherComponent } from './teacher/teacher.component';
import { childoneComponent } from './childone/childone.component';
import { PageNotFoundComponent } from './wildcard/wildcard.component';
import { childtwoComponent } from './childtwo/childtwo.component';
import { AuthGuard } from './auth-guard.service'
export const approutes: Routes = [

{
    path:'studentdata',
    component:studentComponent,

},
{
    path:'teacherdata',
    component:teacherComponent,
     data: {
          name: 'student'
        },
    canActivate: [AuthGuard],


 children: [
      {
        path: 'childone/:id',
        component: childoneComponent
      },
      {
        path:'childtwo/:id',
        component: childtwoComponent

      }
 ]
},
{ path: '**', component: PageNotFoundComponent },

];

export const routing = RouterModule.forRoot(approutes);