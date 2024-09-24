import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  id: string = "0"
  presentUser: User ={
    userId: 0,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    profilePicture: ''
  }
  constructor(private http: HttpClient, private userService: UserService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const userId = this.actRouter.snapshot.paramMap.get('id') ?? '';
    if(userId != null){
      this.id = userId;
    }
    this.getUserInfo()
  }

  getUserInfo(){
    this.userService.getUserByUserId(parseInt(this.id)).subscribe((response) => {
      this.presentUser = response;
    })
  }

  onSubmit(){
    this.userService.updateUser(this.presentUser).subscribe(() => {
      window.alert("User profile update successfully");
      this.router.navigate(['home']);
    }, error => {
      console.log("Error: ", error)
      if(error.status == 403){
        window.alert("Contact FSI for any changes that need to be made to your profile")
      }
    })
  }

}
