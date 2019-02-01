import { AuthService } from '../services/auth.service';
import { Component} from '@angular/core';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent {
  
  public isCollapsed = true;
  appUser: AppUser;
  
  constructor(public authService: AuthService) { 
    authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.authService.logout();
  }

}
