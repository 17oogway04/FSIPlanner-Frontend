import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Life } from 'src/app/Models/life';
import { LifeService } from 'src/app/Services/life.service';

@Component({
  selector: 'app-client-edit-life',
  templateUrl: './client-edit-life.page.html',
  styleUrls: ['./client-edit-life.page.scss'],
})
export class ClientEditLifePage implements OnInit {
  id: string = '';

  currentLife: Life = {
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
    username: this.actRouter.snapshot.paramMap.get("username") ??''

  }
  constructor(private myLifeService: LifeService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ?? '';
    this.id = routeId;
    this.myLifeService.getLifeById(parseInt(this.id)).subscribe((foundLife) => {
      this.currentLife = foundLife;
    })
  }

  onSubmit(){
    this.myLifeService.updateLife(parseInt(this.id), this.currentLife).subscribe(() => {
      window.alert("Life policy updated");
      this.router.navigate(['client-life/', this.currentLife.username])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
