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

  onSubmit() {
    this.myUserService.login(this.username, this.password).subscribe({
      next: (response) => {
        window.alert("Successfully logged in");
        localStorage.setItem('myFSIToken', response.token);
        localStorage.setItem('userRole', response.role);
        this.myUserService.isLoggedInSubj.next(true);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error:', error);
        window.alert('Unsuccessful Login');
      }
    });
  }
}
