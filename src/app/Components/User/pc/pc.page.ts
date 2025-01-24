import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PC } from 'src/app/Models/pc';
import { PCService } from 'src/app/Services/pc.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.page.html',
  styleUrls: ['./pc.page.scss'],
})
export class PcPage implements OnInit {
  username: string = '';
  isFormVisible = false;
  user: any;
  userPC: PC[] = [];
  newPC: PC = new PC("",0, "", "", "", "", "", "", localStorage.getItem('ClientName')!)
  constructor(private myPCService: PCService, private actRouter: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.loadUserPC()
  }

  loadUserPC() {
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response;
      this.username = this.user.result.userName;
      this.myPCService.getPCByUsername(this.username).subscribe((response) => {
        this.userPC = response;
      })
    })

  }

  createPC(): void {
    this.myPCService.createPC(this.newPC).subscribe((response) => {
      if (response != null) {
        window.alert("Insurance added")
        window.location.reload()
      }else{
        window.alert("Error with information inputted")
      }
    })
  }
  printAssets() {
    window.print()
  }

  openForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  deletePC(id: number) {
    this.myPCService.deletePC(id).subscribe(() => {
      window.alert("Insurance policy deleted");
      this.loadUserPC()
    })
  }

}
