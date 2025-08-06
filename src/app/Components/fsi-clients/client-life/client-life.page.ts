import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Life } from 'src/app/Models/life';
import { LifeService } from 'src/app/Services/life.service';

@Component({
  selector: 'app-client-life',
  templateUrl: './client-life.page.html',
  styleUrls: ['./client-life.page.scss'],
})
export class ClientLifePage implements OnInit {
  userLife: Life[] = [];
  username: string = '';
  newLife: Life = {
    lifeId: 0,
    userId: '0',
    policyName: '',
    policyType: '',
    owner: '',
    insured: '',
    premium: 0,
    cashValue: 0,
    deathBenefitOne: 0,
    deathBenefitTwo: 0,
    riders: '',
    ridersBenefit: 0,
    percentageToSavings: 0,
    username: localStorage.getItem('ClientName')!
  };
  tooltipDescriptions = {
    EliminationPeriod: 'What year does the policy expire?',
    RiderPeriod: 'How many months is the policy in effect for?'
  }
  isFormVisible = false;
  constructor(private myLifeService: LifeService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const name = localStorage.getItem('FSIName');
    if(name != null){
      this.username = name
    }
    this.loadUserLife()
  }
  printLife(){
    window.print()
  }
  loadUserLife(){
    this.myLifeService.getLifeByUsername(this.username).subscribe((response) => {
      this.userLife = response;
    })
  }
  createLife(){
    this.myLifeService.createLife(this.newLife).subscribe((response) => {
      if(response != null){
        window.alert("New life policy added");
        window.location.reload()
      }
    })
  }

  openForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  deleteLife(id: number){
    this.myLifeService.deleteLife(id).subscribe(() => {
      window.alert("Life policy deleted")
     this.loadUserLife()
    })
  }
}
