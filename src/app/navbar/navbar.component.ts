import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role: string;
  show: boolean;

  constructor(private authService: AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.role = this.authService.role;
    console.log(this.role);
    if (this.role == "Librarian") {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
