import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from './Services/user.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  user?: User;
  isAuthenticated: boolean = false;
  constructor(private menu: MenuController, private myUserService: UserService) {}

  ngOnInit(): void{
    this.myUserService.getCurrentUser().subscribe(response => {
      if(response !== null){
        this.user = response;
        this.myUserService.isLoggedInSubj.next(!response.userId)
      } else{
        return;
      }
    })

    this.myUserService.isLoggedInSubj.subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
    })

  }

  logout(){
    this.myUserService.logout()
  }

  async openMenu() {
    await this.menu.open('start');
  }

  async closeMenu() {
    await this.menu.close('start');
  }
}
