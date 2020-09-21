import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
// import { MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material'; no longer can be imported from @angular/material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from "./register/RegisterComponent";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
