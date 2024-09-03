import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Liabilities } from 'src/app/Models/liabilities';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.page.html',
  styleUrls: ['./liabilities.page.scss'],
})
export class LiabilitiesPage implements OnInit {

  username: string = '';
  isFormVisible = false;
  userLiabilities: Liabilities[] = [];
  newLiability: Liabilities = new Liabilities(0,"","",0, "", "", "", "", this.actRouter.snapshot.paramMap.get("username") ?? '');
  constructor(private myLiabilityService: LiabilitiesService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name != null){
      this.username = name
    }
    this.loadUserLiabilities();
  }

  loadUserLiabilities(){
    this.myLiabilityService.getLiabilitiesByUsername(this.username).subscribe((response) => {
      this.userLiabilities = response;
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
  openForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  deleteLiability(id: number){
    this.myLiabilityService.deleteLiability(id).subscribe(() => {
      window.alert("Liability has been deleted");
      this.loadUserLiabilities()
    })
  }

}
