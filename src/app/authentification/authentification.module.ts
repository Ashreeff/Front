import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component'; // Assurez-vous d'importer RegisterComponent ici
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  exports: [
    LoginComponent,
    // other exports...
  ]
})
export class AuthentificationModule { }
