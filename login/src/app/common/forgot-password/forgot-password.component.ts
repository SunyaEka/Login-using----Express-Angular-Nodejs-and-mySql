import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public email: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public submit() {
    let data = {
      email: this.email
    }
    console.log("INSIDE SUBMIT", data);
    this.authService.forgotPassword(data).subscribe((result:any) => {
      if(result.response === "SUCCESS") {
        swal.fire(result.message, '', 'success');
        this.router.navigateByUrl('/login');
      }
      if(result.response === "ERROR") {
        swal.fire(result.message, '', 'error');
      }
      setTimeout(() => {
        if(swal.isVisible()) {
          swal.close();
        }
      },2000);
      console.log(result);
    });
  }

}
