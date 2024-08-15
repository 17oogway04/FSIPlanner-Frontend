import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PC } from 'src/app/Models/pc';
import { PCService } from 'src/app/Services/pc.service';

@Component({
  selector: 'app-client-pc',
  templateUrl: './client-pc.page.html',
  styleUrls: ['./client-pc.page.scss'],
})
export class ClientPcPage implements OnInit {
  newPC: PC = new PC(0, "","","","","","", this.actRouter.snapshot.paramMap.get("username") ?? '')
  username: string = '';
  isFormVisible = false;
  userPC: PC[] = [];

  constructor(private myPCService: PCService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name !== ''){
      this.username = name;
    }

    this.loadUserPC()
  }

  loadUserPC(){
    this.myPCService.getPCByUsername(this.username).subscribe((repsonse) => {
      this.userPC = repsonse;
    })
  }

  createPC(): void{
    this.myPCService.createPC(this.newPC).subscribe(() => {
      window.alert("Insurance added")
    }, error => {
      console.log("Error: ", error)
    })
    window.location.reload()
  }

  openForm(){
    this.isFormVisible = true;
  }

  closeForm(){
    this.isFormVisible = false;
  }

  deletePC(id: number){
    this.myPCService.deletePC(id).subscribe(() => {
      window.alert("PC has been deleted");
      this.loadUserPC()
    })
  }

}
