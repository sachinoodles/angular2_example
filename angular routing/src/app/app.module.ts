import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { studentComponent } from './student/student.component';
import { AppComponent }  from './app.component';
import { teacherComponent } from './teacher/teacher.component';
import { HttpModule } from '@angular/http';
import { StudentService } from './app.service';
import { routing } from './app.routes';
import { PageNotFoundComponent } from './wildcard/wildcard.component';
import { childoneComponent } from './childone/childone.component';
import { childtwoComponent } from './childtwo/childtwo.component';
import { AuthGuard } from './auth-guard.service'

@NgModule({
  imports:      [ BrowserModule,HttpModule,routing ],
  declarations: [ AppComponent,studentComponent,teacherComponent,PageNotFoundComponent,childoneComponent,childtwoComponent ],
  providers: [AuthGuard],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
