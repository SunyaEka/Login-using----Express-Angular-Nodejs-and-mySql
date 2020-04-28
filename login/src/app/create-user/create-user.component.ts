import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {

  public firstName;
  public email;
  public mobileNumber;
  public password;
  public reEnterPassword;
  public confirmTrue: boolean = false;

  constructor(private authService: AuthenticationService,
              private router: Router
             ) { }

  ngOnInit() {
  }

  public dataInput() {
    console.log("FINAL DATA:", this.firstName, this.email, this.mobileNumber, this.password, this.reEnterPassword);
  }

  public checkPassword() {
    if(this.password && this.reEnterPassword) {
      if(this.password === this.reEnterPassword) {
        if(this.password.length>4 && this.reEnterPassword.length>4) {
          this.confirmTrue = true;
        }
        console.log(this.confirmTrue);
      }else {
        this.confirmTrue = false;
      }
    }
  }

  public checkEmail() {
    let emailExpression = '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$';
    console.log(this.email.match(emailExpression));
  }
  public Create() {
    let data= {
      "firstname": this.firstName,
      "email": this.email,
      "mobilenumber": this.mobileNumber,
      "password": this.password,
      "verificationtoken": ""
    };
    this.authService.createUser(data).subscribe((result:any)=> {
      console.log("INSIDE TS:", result);
      if(result.response === "SUCCESS") {
          // swal({
          //   type: 'success',
          //   title: 'Created Successfully',
          //   showConfirmButton: false,
          //   timer: 1500
          // });
          swal.fire("User Successfully Created", '', 'success');
          this.router.navigateByUrl("/login");
      }else {
        swal.fire(result.message, '', 'error');
      }
      setTimeout(() => {
        if(swal.isVisible()) {
          swal.close();
        }
      },2000);
    })
  }

}
