import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liabilities } from 'src/app/Models/liabilities';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';

@Component({
  selector: 'app-client-liability',
  templateUrl: './client-liability.page.html',
  styleUrls: ['./client-liability.page.scss'],
})
export class ClientLiabilityPage implements OnInit {
  username: string = '';
  userLiabilities: Liabilities[] = [];
  isFormVisible = false;

  newLiability: Liabilities = new Liabilities(0,"","",0, "", "", "", "", this.actRouter.snapshot.paramMap.get("username") ?? '');


  constructor(private myLiabilityService: LiabilitiesService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name != null){
      this.username = name;
    }
    this.loadUserLiabilities()
  }

  loadUserLiabilities(){
    this.myLiabilityService.getLiabilitiesByUsername(this.username).subscribe((response) => {
      this.userLiabilities = response.sort((a,b) => parseInt(a.type!) - parseInt(b.type!));
    })
  }

  deleteLiability(id: number){
    this.myLiabilityService.deleteLiability(id).subscribe(() => {
      window.alert("Liability has been deleted");
      this.loadUserLiabilities()
    })
  }

  createLiability(){
    this.myLiabilityService.createLiability(this.newLiability).subscribe((response) => {
      if(response != null){
        window.alert("Liability added");
        window.location.reload();
      }
    })
  }
  printLiabilities(){
    window.print()
  }
  openForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }


}
