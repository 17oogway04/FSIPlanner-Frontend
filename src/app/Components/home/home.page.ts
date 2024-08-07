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

  presentUser: User ={
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    profilePicture: ''
  }
  loggedInUser?: User;
  userName: string = '';
  file: string = '';
  constructor(private myUserservice: UserService, private actRouter: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.myUserservice.getCurrentUser().subscribe(response => {
      this.loggedInUser = this.presentUser = response;
      this.userName = this.presentUser.userName ?? '';

      const name = this.actRouter.snapshot.paramMap.get("username") ?? ''
      if(name !== ''){
        this.userName = name;
        this.myUserservice.getUserByUsername(name).subscribe(response => {
          this.presentUser = response;
        })
      }

    })
  }

//   onFileChange(event: any) {
//     const files = event.target.files as FileList;

//     if (files.length > 0) {
//       const file = files[0]
//       const formData = new FormData();
//       formData.append('file', file);

//       this.http.post(`${this.baseUrl}/register`, formData).subscribe((response: any) => {
//         this.file = response.fileUrl;
//         localStorage.setItem('profilePicture', this.file);
//       });

//       this.resetInput()
//     }
  
//  }

//  resetInput(){
//   const input = document.getElementById('avatar-input-file') as HTMLInputElement;
//   if(input){
//     input.value = "";
//   }
// }

  
}



