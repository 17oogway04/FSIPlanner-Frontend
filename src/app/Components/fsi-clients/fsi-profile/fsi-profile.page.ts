import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-fsi-profile',
  templateUrl: './fsi-profile.page.html',
  styleUrls: ['./fsi-profile.page.scss'],
})
export class FSIProfilePage implements OnInit {

  id: number = 0;
  presentUser: User = {
    id: "0",
    username: '',
    firstName: '',
    lastName: '',
    profilePicture: ''
  }
  userName: string = "";
  file: any;
  profilePic: string = '';
  basicUrl: string = "http://localhost:5247"
  user: any;
  constructor(private myUserService: UserService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") || localStorage.getItem('FSIName') || '';
    if (name) {
      localStorage.setItem('FSIName', name);
      this.myUserService.getUserByUsername(name).subscribe(
        response => {
          this.user = response;
          this.presentUser.firstName = this.user.firstName
          this.presentUser.lastName = this.user.lastName
          this.presentUser.username = this.user.userName;
          this.presentUser.profilePicture = this.user.profilePicture;    
          this.profilePic = this.presentUser.profilePicture ? `${this.basicUrl}${this.presentUser.profilePicture}` : '';
        },
        error => {
          console.error('Error fetching user:', error);
        }
      );
    } else {
      console.warn("No username found in route.");
    }

  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const file = files[0];
      this.myUserService.uploadProfilePicture(file).subscribe((response: any) => {
        this.file = URL.createObjectURL(file); // Temporarily display the image
        this.presentUser!.profilePicture = response.ProfilePictureUrl; // Update the user profile
      });
    }
  }

}
