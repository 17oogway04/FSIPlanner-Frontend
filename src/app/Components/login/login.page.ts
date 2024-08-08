import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private myUserService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.myUserService.login(this.username, this.password).subscribe((response) => {
      window.alert("Successfully logged in");
      this.myUserService.isLoggedInSubj.next(!response.userId)
      this.router.navigate(['/home']);
    }, error => {
      console.log('Error: ', error);
      window.alert('Unsuccessful Login')
    });
  }

}
