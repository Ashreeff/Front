import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './authentification/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="!shouldHideHeaderAndFooter"></app-header>
    <router-outlet></router-outlet>
    <app-footer *ngIf="!shouldHideHeaderAndFooter"></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';
  shouldHideHeaderAndFooter: boolean = false; // Track whether to hide the header and footer

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit() {
    // Detect if the current route should hide the header and footer
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hideRoutes = ['/admin', '/products/index', '/products/create'];
        this.shouldHideHeaderAndFooter = hideRoutes.includes(event.url);
      }
    });
  }
}
