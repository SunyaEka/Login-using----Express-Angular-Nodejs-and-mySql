import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../_services/authentication/authentication.service';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  public userName: string;
  public password: any;
  public returnUrl: string;

  ngOnInit() {
    console.log(this.route.snapshot.queryParams['returnUrl']);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }
  public login() {
    console.log("DETAILS:", this.userName, this.password);
    let data = {
      "username": this.userName,
      "password": this.password
    }
    this.authenticationService.checkCredentials(data).subscribe((result:any) => {
      console.log("Login Result",result);
      if(result.response === "SUCCESS") {
        this.authenticationService.setToken(result.token);
        console.log(this.returnUrl);
        this.router.navigate([this.returnUrl]);
        swal.fire('Successfully Login','','success');
      }else {
        swal.fire(result.message,'','error');
      }

      setTimeout(() => {
        if(swal.isVisible()) {
          swal.close();
        }
      },2000);

    //   if(swal.isVisible()) {
    //     swal.close();
    //  }
    });

  }

}
