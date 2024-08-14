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
      }, error => {
        console.error('Error fetching user:', error);
      });
    }

  }

}
