import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { ChangeDetectorRef } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  baseUrl: string = "http://localhost:5247/api/user"
  basicUrl: string = "http://localhost:5247"
  profilePic: string = '';
  isAuthenticated: boolean = false;
  userName: string = '';
  isAllowed: boolean = false;
  presentUser: User ={
    id: "0",
    username: '',
    firstName: '',
    lastName: '',
    profilePicture: ''
  }
  
  loggedInUser?: User;
  file:any;
  user: any;
  userEmail: string = '';

  constructor(public myAuthService: AuthServiceService, private myUserservice: UserService, private actRouter: ActivatedRoute, private http: HttpClient,   private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {      
    this.myUserservice.getCurrentUser().subscribe(response => {
      this.user = response;      
      this.myUserservice.isLoggedInSubj.next(!this.user.result.id);
      this.presentUser.firstName = this.user.result.firstName;
      this.presentUser.lastName = this.user.result.lastName;
      this.presentUser.username = this.user.result.userName; 
      localStorage.setItem('ClientName', this.user.result.userName);
      this.userEmail = this.user.result.email;
      this.presentUser.profilePicture = this.user.result.profilePicture;    
      this.profilePic = this.presentUser.profilePicture ? `${this.basicUrl}${this.presentUser.profilePicture}`: '';
            this.cdr.detectChanges()
    });
      this.myUserservice.isLoggedInSubj.subscribe(isLoggedIN => {
        this.isAuthenticated = isLoggedIN;
      })

      const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
      if(name !== ''){
        this.myUserservice.getUserByUsername(name).subscribe(response => {
          this.presentUser = response;
        })
      }
    }
    logout(){
      this.myUserservice.logout()
    }

    checkUsername() {
      if (this.presentUser.username) {
        if (this.presentUser.username === "isaacm@mutualmail.com" || this.presentUser.username === "jenniferh@mutualmail.com") {
          this.isAllowed = true;
        } else {
          this.isAllowed = false;
        }
      }
    }

    onFileChange(event: any) {
      const files = event.target.files as FileList;
  
      if (files.length > 0) {
        const file = files[0];
        this.myUserservice.uploadProfilePicture(file).subscribe((response: any) => {
          this.file = URL.createObjectURL(file); // Temporarily display the image
          this.presentUser!.profilePicture = response.ProfilePictureUrl; // Update the user profile
        });
      }
   }

   getRole(){
    this.myAuthService.getRole();
   }

   isAdmin(){
    this.myAuthService.isAdmin();
   }

   isGeneralAdmin(){
    this.myAuthService.isGeneralAdmin();
   }
  
}
  



