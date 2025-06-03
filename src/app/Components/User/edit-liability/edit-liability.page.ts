import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liabilities } from 'src/app/Models/liabilities';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';

@Component({
  selector: 'app-edit-liability',
  templateUrl: './edit-liability.page.html',
  styleUrls: ['./edit-liability.page.scss'],
})
export class EditLiabilityPage implements OnInit {
  id: string = "0";
  currentLiability: Liabilities = {
    liabilitiesId: 0,
    type: '',
    description: '',
    balance: 0,
    rate: 0,
    payment: 0,
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
      this.router.navigate(['home/liabilities/'])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
