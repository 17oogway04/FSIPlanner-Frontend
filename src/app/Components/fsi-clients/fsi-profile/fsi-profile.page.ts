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
  presentUser: User = new User(0, "","", this.actRouter.snapshot.paramMap.get("username") ??'', "", "");
  userName: string = "";
  file:any;
  profilePic: string = '';
  basicUrl: string = "http://localhost:5247"

  constructor(private myUserService: UserService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    // const routeId = this.actRouter.snapshot.paramMap.get("id") ?? '';
    // this.id = parseInt(routeId);
    // if(this.id !== null){
    //   this.myUserService.getUserByUserId(this.id).subscribe(response => {
    //     this.presentUser = response;
    //   }, error => {
    //     console.log("Error: ", error);
    //   })
    // }
    if (name !== '') {
      this.myUserService.getUserByUsername(name).subscribe(response => {
        console.log('User fetched:', response);
        this.presentUser = response;
        this.profilePic = this.presentUser.profilePicture ? `${this.basicUrl}${this.presentUser.profilePicture}` : '';

      }, error => {
        console.error('Error fetching user:', error);
      });
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
