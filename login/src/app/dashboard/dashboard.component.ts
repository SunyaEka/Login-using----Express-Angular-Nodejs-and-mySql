import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public logOut() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/login');
    swal.fire('Log Out!','','success');
    setTimeout(() => {
      if(swal.isVisible()) {
        swal.close();
      }
    },2000);
  }
}
