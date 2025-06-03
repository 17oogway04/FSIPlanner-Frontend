import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Life } from 'src/app/Models/life';
import { LifeService } from 'src/app/Services/life.service';
import { UserService } from 'src/app/Services/user.service';

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
  isFormVisible = false;
  user:any;
  constructor(private myLifeService: LifeService, private actRouter: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loadUserLife()
  }
  printLife(){
    window.print()
  }
  loadUserLife(){
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response;
      this.username = this.user.result.userName;
      this.myLifeService.getLifeByUsername(this.username).subscribe((response) => {
      this.userLife = response;
    })
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
