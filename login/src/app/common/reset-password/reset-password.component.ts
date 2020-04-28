import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  public oldPassword: string;
  public newPassword: string;
  public confirmPassword: string;
  public userId: string;
  public confirmTrue: boolean = false;

  ngOnInit() {
    this.userId = this.authService.uniqueId;
    if(!this.userId) {
      this.router.navigate(['/unauthorized']);
    }
  }

  public checkPassword() {
    if(this.newPassword && this.confirmPassword) {
      if(this.newPassword === this.confirmPassword) {
        if(this.newPassword.length>4 && this.confirmPassword.length>4) {
          this.confirmTrue = true;
        }
        console.log(this.confirmTrue);
      }else {
        this.confirmTrue = false;
      }
    }
  }

  public submit() {
    // let payload = this.authService.decodeToken();
    console.log(this.oldPassword, this.newPassword, this.confirmPassword, this.userId);
    let data = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
      username: this.userId
    }
    console.log(data);
    this.authService.resetPassword(data).subscribe((result:any)=>{
      console.log(result);
      if(result.response ==="SUCCESS") {
        swal.fire(result.message, '', 'success');
        this.authService.deleteToken();
        this.router.navigateByUrl('/login');
      }
      if(result.response ==="ERROR") {
        swal.fire(result.message, '', 'error');
      }
      setTimeout(() => {
        if(swal.isVisible()) {
          swal.close();
        }
      },2000);
    });

  }

}
