import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  userDemographics: Demographics[] = [];
  none = false;
  input = false;
  constructor(private demoService: DemographicsService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if (name !== '') {
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
  showElement(): void {
    this.isVisible = !this.isVisible;
  }


}
