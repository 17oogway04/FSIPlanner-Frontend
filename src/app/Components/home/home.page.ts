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
  presentUser?: User;
  loggedInUser?: User;
  userName: string = '';
  constructor(private myUserservice: UserService, private actRouter: ActivatedRoute) { }

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
}



