import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Demographics } from 'src/app/Models/demographics';
import { User } from 'src/app/Models/user';
import { DemographicsService } from 'src/app/Services/demographics.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.page.html',
  styleUrls: ['./demographics.page.scss'],
})
export class DemographicsPage implements OnInit {

  isVisible: boolean = false;
  id:number = 0;
  isFormVisible = false;
  none = false;
  input = false;
  isEditVisible = false;
  userName: string = "";
  presentUser: User = {
    firstName: '',
    lastName: '',
    username: '',
    profilePicture: ''
  }

  loggedInUser: User = {
    firstName: '',
    lastName: '',
    username: '',
    profilePicture: ''
  }

  demographic: Demographics = {
    demographicsId: 0,
    userId: '',
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
    username: this.actRouter.snapshot.paramMap.get("username") ??''
  }
  user: any;
  userDemographics: Demographics[] = [];
  

  constructor(private myUserService: UserService, private myDemoSerivce: DemographicsService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.myUserService.getCurrentUser().subscribe(response => {
    //   this.loggedInUser = this.presentUser = response;
    //   this.userName = this.presentUser.username ?? '';
    //   console.log(this.userName)

      // const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
      // if(name!== ''){
      //   this.userName = name;
      //   this.myUserService.getUserByUsername(name).subscribe(response => {
      //     this.presentUser = response;
      //   })
      // }

      this.loadUserDemographics();

    
  
  }

  showElement(): void {
    this.isVisible = !this.isVisible;
  }

  loadUserDemographics(){
    this.myUserService.getCurrentUser().subscribe((response) => {
      this.user = response;
      this.userName = this.user.result.userName;
      this.myDemoSerivce.GetDemographicsByUsername(this.userName).subscribe(response => {
      this.userDemographics = response;
      if(response !==null){
        this.input = true
        this.none = true;
      }
    })
    })
    
  }

  createDemographic(){
    this.myDemoSerivce.CreateDemographic(this.demographic).subscribe((response) => {
      if(response != null){
        window.alert("Demographics added successfully")
      }
      window.location.reload()
    }, error => {
      console.log('Error: ', error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

  // updateDemographicOnSubmit(){
  //   this.myDemoSerivce.UpdateDemographic(this.userName,this.demographic).subscribe(() => {
  //     window.alert("Updated demographics successfully")
  //     this.loadUserDemographics();
  //   }, error => {
  //     console.log("Error: ", error)
  //     if(error.status == 401){
  //       this.router.navigate(['/login'])
  //     }
  //   })
  // }

  openForm(){
    this.isFormVisible = true;
  }

  closeForm(){
    this.isFormVisible = false;
  }

}



