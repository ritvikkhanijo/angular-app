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
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      RegisterComponent,
      NavbarComponent,
      ManageReservationsComponent,
      CreateCarComponent,
      MainPageComponent,
      DatePickerComponent,
      AdminUsersComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: LoginComponent
      },
      {
        path: 'register', // here we don't use slash ('/') before the path
        component: RegisterComponent
      },
      {
        path: 'main', 
        component: MainPageComponent
      },
      {
        path: 'create-car', 
        component: CreateCarComponent
      },
      {
        path: 'manage', 
        component: ManageReservationsComponent
      },
      {
        path: 'date',
        component: DatePickerComponent
      },
      {
        path: 'users',
        component: AdminUsersComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
