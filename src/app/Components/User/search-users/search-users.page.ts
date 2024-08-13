import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements OnInit {
  searchStr!: string;
  users: User = {
    userId: "0",
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    profilePicture: ''
  }

  user: User[] = [];
  constructor(private myUserService: UserService) { }

  ngOnInit() {
 
  }

  searchUser(){
    this.searchUserByName(this.searchStr)
  }

  async searchUserByName(username: string){
    this.myUserService.getUserByName(username).subscribe(response => {
      // this.users.firstName = response.firstName;
      // this.users.lastName = response.lastName;
      // this.users.userName = response.userName;
      this.user = response;
    })
  }

}
