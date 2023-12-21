import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public authService: AuthService, private router: Router) {}
  logout() {
    this.authService.doLogout();
  }
}
