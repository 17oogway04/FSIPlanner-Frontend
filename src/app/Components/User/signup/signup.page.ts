import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  newUser: User = {
    firstName: '',
    lastName: '',
    username: '',
    password:'',
    profilePicture: '',
    role: ''

  }
  constructor(private myUserService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.myUserService.register(this.newUser!).subscribe(() => {
      window.alert("User Registered Successfully");
      this.router.navigate(['/login']);
    }, error => {
      window.alert("User Registration Error");
      console.log("Error: ", error)
    });
  }
}
