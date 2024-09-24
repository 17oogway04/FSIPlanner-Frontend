import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

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
    userId: 0,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    profilePicture: ''
  }
  loggedInUser?: User;
  file:any;

  constructor(private myUserservice: UserService, private actRouter: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {      
    this.myUserservice.getCurrentUser().subscribe(response => {
      this.loggedInUser = this.presentUser = response;
      this.profilePic = this.presentUser.profilePicture ? `${this.basicUrl}${this.presentUser.profilePicture}` : '';
      this.userName = this.presentUser.userName ?? '';
      this.myUserservice.isLoggedInSubj.next(!response.userId)
      const name = this.actRouter.snapshot.paramMap.get("username") ?? ''    
      if(name !== ''){
        this.userName = name;        
        this.myUserservice.getUserByUsername(name).subscribe(response => {
          this.presentUser = response;
        })       
      }})
      
      this.myUserservice.isLoggedInSubj.subscribe(isLoggedIn => {
        this.isAuthenticated = isLoggedIn;
        this.isAuthenticated = isLoggedIn;
        
      })
    }
    logout(){
      this.myUserservice.logout()
    }

    checkUsername(){
      if(this.presentUser.userName == "isaacm@mutualmail.com" || "jenniferh@mutualmail.com"){
        this.isAllowed = true;
      }else{
        this.isAllowed = false;
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
  
}
  



