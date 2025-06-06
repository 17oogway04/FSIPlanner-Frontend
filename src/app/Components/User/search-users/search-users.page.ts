import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { FilterPipe } from '../filter.pipe';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements OnInit {
  searchStr!: string;
  basicUrl: string = "http://localhost:5247"
  id: string = "0";
  profilepic = '';
  allUsers: User[] = [{
    id: "0",
    firstName: '',
    lastName: '',
    username: '',
    profilePicture: ''
  }]
  users: any;
  user: User[] = [];
  constructor(private myUserService: UserService, private actRouter: ActivatedRoute) { }

  ngOnInit() {  
    this.getUsers()
  }

  searchUser(){
    this.searchUserByName(this.searchStr)
  }

  async searchUserByName(username: string){
    this.myUserService.getUserByName(username).subscribe(response => {
      this.users = response;
    })
  }

  getUsers(){
    this.myUserService.getUsers().subscribe((response) => {
      this.users = response;
      // this.allUsers = response;
      // console.log(response)
    })
  }

  deleteUser(username: string){
    this.myUserService.deleteUser(username).subscribe(() => {
      window.alert("User deleted")
      window.location.reload();
    })
  }

}
