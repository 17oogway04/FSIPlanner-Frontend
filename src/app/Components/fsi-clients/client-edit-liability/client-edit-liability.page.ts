import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liabilities } from 'src/app/Models/liabilities';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';

@Component({
  selector: 'app-client-edit-liability',
  templateUrl: './client-edit-liability.page.html',
  styleUrls: ['./client-edit-liability.page.scss'],
})
export class ClientEditLiabilityPage implements OnInit {
  id: string = "0";
  currentLiability: Liabilities = {
    liabilitiesId: 0,
    type: '',
    description: '',
    balance: 0,
    rate: '',
    payment: '',
    term: '',
    value: 0,
    username: this.actRouter.snapshot.paramMap.get("username") ?? ''
  }
  constructor(private actRouter: ActivatedRoute, private myLiabilityService: LiabilitiesService, private router: Router) {}

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ??''
    this.id = routeId;
    this.myLiabilityService.getLiabilityById(parseInt(this.id)).subscribe((foundLiability) => {
      this.currentLiability = foundLiability;
    })
  }

  onSubmit(){
    this.myLiabilityService.updateLiability(parseInt(this.id), this.currentLiability).subscribe(() => {
      window.alert("Liability updated successfully")
      this.router.navigate(['home/liabilities/', this.currentLiability.username])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
