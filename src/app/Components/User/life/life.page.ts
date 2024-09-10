import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Life } from 'src/app/Models/life';
import { LifeService } from 'src/app/Services/life.service';

@Component({
  selector: 'app-life',
  templateUrl: './life.page.html',
  styleUrls: ['./life.page.scss'],
})
export class LifePage implements OnInit {

  userLife: Life[] = [];
  username: string = '';
  newLife: Life = {
    lifeId: 0,
    policyName: '',
    policyType: '',
    owner: '',
    insured: '',
    premium: '',
    cashValue: '',
    deathBenefitOne: '',
    deathBenefitTwo: '',
    riders: '',
    ridersBenefit: '',
    percentageToSavings: '',
    username: this.actRouter.snapshot.paramMap.get("username") ?? ''
  };
  isFormVisible = false;

  constructor(private myLifeService: LifeService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name != null){
      this.username = name
    }
    this.loadUserLife()
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