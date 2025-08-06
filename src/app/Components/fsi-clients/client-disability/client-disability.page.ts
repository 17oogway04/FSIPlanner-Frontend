import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disability } from 'src/app/Models/disability';
import { DisabilityInsService } from 'src/app/Services/disability-ins.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-client-disability',
  templateUrl: './client-disability.page.html',
  styleUrls: ['./client-disability.page.scss'],
})
export class ClientDisabilityPage implements OnInit {

  username: string = '';
  userDisability: Disability[] = [];
  Disabilities: any;
  user: any;
  isFormVisible = false;

  newDisabilityIns: Disability = {
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
   tooltipDescriptions = {
    EliminationPeriod: 'What year does the policy expire?',
    BenefitPeriod: 'How many months is the policy in effect for?'
  }
  constructor(private userService: UserService, private myDisabilityService: DisabilityInsService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.saveUsername();
    this.loadUserDisability();
  }

  printDisability(){
    window.print();
  }

  saveUsername(){
    let user = localStorage.getItem("FSIName")
    if(user !== null){
      this.username = user;
    }
  }

  loadUserDisability(){
      this.myDisabilityService.getDisabilityByUsername(this.username).subscribe((response) => {
        this.userDisability = response;
        console.log(response);
      })
  }

  createDisabilityIns(){
    this.myDisabilityService.createDisabilityIns(this.newDisabilityIns).subscribe((response) => {
      if(response != null){
        window.alert("Disability Insurance Policy added successfully")
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

  deleteDisability(id: number){
    this.myDisabilityService.deleteDisability(id).subscribe(() => {
      window.alert("Disability policy deleted")
      window.location.reload();
    })
  }

}
