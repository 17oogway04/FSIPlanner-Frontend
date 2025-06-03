import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disability } from 'src/app/Models/disability';
import { DisabilityInsService } from 'src/app/Services/disability-ins.service';

@Component({
  selector: 'app-edit-disability',
  templateUrl: './edit-disability.page.html',
  styleUrls: ['./edit-disability.page.scss'],
})
export class EditDisabilityPage implements OnInit {
  id: string = "0";
  currentDisability: Disability = {
    userId: '0',
    disabilityInsId: 0,
    policyName: '',
    policyType: '',
    owner: '',
    insured: '',
    premium: 0,
    cashValue: 0,
    monthlyDeathBenefitOne: 0,
    monthlyDeathBenefitTwo: 0,
    riders: '',
    ridersBenefit: 0,
    eliminationPeriod: 0,
    benefitPeriod: 0,
    username: localStorage.getItem('ClientName')!
  }
  constructor(private actRouter: ActivatedRoute, private myDisabilityService: DisabilityInsService, private router: Router) { }

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ??''
    this.id = routeId;
    this.myDisabilityService.getDisabilityById(parseInt(this.id)).subscribe((foundDisability) => {
      this.currentDisability = foundDisability;
      console.log(this.currentDisability)
    })
  }

  onSubmit(){
    this.myDisabilityService.updateDisability(parseInt(this.id), this.currentDisability).subscribe(() => {
      window.alert("Disability policy updated")
      this.router.navigate(['home/disabilityins/'])

    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
