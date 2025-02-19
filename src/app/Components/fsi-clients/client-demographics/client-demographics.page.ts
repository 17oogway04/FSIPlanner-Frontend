import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demographics } from 'src/app/Models/demographics';
import { DemographicsService } from 'src/app/Services/demographics.service';

@Component({
  selector: 'app-client-demographics',
  templateUrl: './client-demographics.page.html',
  styleUrls: ['./client-demographics.page.scss'],
})
export class ClientDemographicsPage implements OnInit {
  userName: string = '';
  isVisible: boolean = false;
  isFormVisible = false;
  id: string = "0"
  userDemographics: Demographics[] = [];
  demographic: Demographics = {
    demographicsId: 0,
    spouse: '',
    spouseEmail: '',
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
  none = false;
  input = false;
  constructor(private demoService: DemographicsService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const name = localStorage.getItem('FSIName');
    if(name !== null)
    {
      this.userName = name;
    }
    this.loadUserDemographics()
  }



  loadUserDemographics(){
    this.demoService.GetDemographicsByUsername(this.userName).subscribe(response => {
      this.userDemographics = response;
      if(response !==null){
        this.input = true
        this.none = true;
      }
    })
  }
  createDemographic(){
    this.demoService.CreateDemographic(this.demographic).subscribe((response) => {
      if(response != null){
        window.alert("Demographics added successfully")
      }
    }, error => {
      console.log('Error: ', error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }
  showElement(): void {
    this.isVisible = !this.isVisible;
  }
  openForm(){
    this.isFormVisible = true;
  }

  closeForm(){
    this.isFormVisible = false;
  }


}
