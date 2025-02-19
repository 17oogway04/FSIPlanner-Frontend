import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PC } from 'src/app/Models/pc';
import { PCService } from 'src/app/Services/pc.service';

@Component({
  selector: 'app-client-edit-pc',
  templateUrl: './client-edit-pc.page.html',
  styleUrls: ['./client-edit-pc.page.scss'],
})
export class ClientEditPcPage implements OnInit {
  id: string = "0";

  currentPC: PC = {
    companyName: '',
    policyType: '',
    premium: '',
    expirationDate: '',
    deductible: '',
    username: localStorage.getItem('ClientName')!
  }
  constructor(private myPCService: PCService, private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ?? '';
    this.id = routeId;
    this.myPCService.getPCById(parseInt(this.id)).subscribe((foundPC) => {
      this.currentPC = foundPC;
    })
  }

  onSubmit(){
    this.myPCService.updatePC(parseInt(this.id), this.currentPC).subscribe(() => {
      window.alert("Insurance policy updated successfully")
      this.router.navigate(['client-pc/'])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
