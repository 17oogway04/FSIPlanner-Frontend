import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-client-edit-user',
  templateUrl: './client-edit-user.page.html',
  styleUrls: ['./client-edit-user.page.scss'],
})
export class ClientEditUserPage implements OnInit {

  name: string = '';
  presentUser: User = {
    id: "0",
    firstName: '',
    lastName: '',
    username: localStorage.getItem('FSIName')!,
    profilePicture: ''
  }
  user: any;
  constructor(private http: HttpClient, private userService: UserService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const username = this.actRouter.snapshot.paramMap.get('username') ?? '';
    if (username) {
      this.name = username;
      this.getUserInfo();
    } else {
      console.error("Username is missing in the route.");
      this.router.navigate(['/fsi-profile']); // Redirect to a safe page
    }
  }

  getUserInfo() {
    this.userService.getUserByUsername(this.name).subscribe((response) => {
      this.user = response;
      this.presentUser.firstName = this.user.firstName;
      this.presentUser.lastName = this.user.lastName;
    })
  }

  onSubmit() {
    this.userService.updateUser(this.presentUser).subscribe(() => {
      window.alert("User profile update successfully");
      this.router.navigate(['home']);
    }, error => {
      console.log("Error: ", error)
      if (error.status == 403) {
        window.alert("Contact FSI for any changes that need to be made to your profile")
      }
    })
  }


}
