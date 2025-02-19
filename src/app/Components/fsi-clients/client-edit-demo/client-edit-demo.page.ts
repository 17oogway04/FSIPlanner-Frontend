import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demographics } from 'src/app/Models/demographics';
import { DemographicsService } from 'src/app/Services/demographics.service';

@Component({
  selector: 'app-client-edit-demo',
  templateUrl: './client-edit-demo.page.html',
  styleUrls: ['./client-edit-demo.page.scss'],
})
export class ClientEditDemoPage implements OnInit {
  id: string = "0";

  currentDemographics: Demographics = {
    demographicsId: 0,
    spouse: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    socialSecurity: '',
    driversLicense: '',
    issueDate: '',
    expirationDate: '',
    gender: '',
    maritalStatus: '',
    employer: '',
    occupation: '',
    workPhone: '',
    address: '',
    phoneNumber: '',
    email: '',
    birthday: '',
    username: this.actRouter.snapshot.paramMap.get("username") ?? ''
  }
  userDemo: any;

  constructor(private actRouter: ActivatedRoute, private myDemoService: DemographicsService, private router: Router) { }

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ?? "";
    this.id = routeId;
    this.myDemoService.GetDemographicsById(parseInt(routeId)).subscribe(foundDemo => {
  
      this.currentDemographics = foundDemo;

      console.log(foundDemo)
    })
  }

  onSubmit(){
    this.myDemoService.UpdateDemographic(parseInt(this.id), this.currentDemographics).subscribe(() => {
      window.alert("Demographics updated successfully")
      this.router.navigate(['/client-demographics'])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
