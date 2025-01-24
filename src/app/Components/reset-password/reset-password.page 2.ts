import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  password: string = '';  
  token: string = '';
  email: string = '';
  message: string = '';
  error: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
  }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.resetPassword(this.email, this.token, this.password).subscribe({
      next: (res) => (this.message = res),
      error: (err) => (this.error = err)
    })
  }
}
