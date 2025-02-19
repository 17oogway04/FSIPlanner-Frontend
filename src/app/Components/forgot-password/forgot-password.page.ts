import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: string = '';
  message: string = '';
  error: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  onSubmit(){
    this.userService.forgotPassword(this.email).subscribe({
      next: (res) => (this.message = res),
      error: (err) => (this.error = err.error)
    })
  }
}
