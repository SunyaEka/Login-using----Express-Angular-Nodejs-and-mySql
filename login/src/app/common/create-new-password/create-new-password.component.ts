import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router';
import{ AuthenticationService } from '../../_services/authentication/authentication.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent implements OnInit {

  public token: any;
  public newPassword: string;
  public confirmPassword: string;
  public confirmTrue:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
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
    let data = {
      newPassword: this.newPassword,
      token: this.token
    }
    console.log(data);
    this.authService.createNewPassword(data).subscribe((result:any )=> {
      if(result.response === "SUCCESS") {
        swal.fire(result.message, '', 'success');
        this.authService.deleteToken();
        this.router.navigateByUrl('/login');
      }
      if(result.response === "ERROR") {
        swal.fire(result.message, '','error');
      }
      setTimeout(() => {
        if(swal.isVisible()) {
          swal.close();
        }
      },2000);
      console.log(result);
    })
  }
}
