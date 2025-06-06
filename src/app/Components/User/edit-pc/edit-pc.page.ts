import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PC } from 'src/app/Models/pc';
import { PCService } from 'src/app/Services/pc.service';

@Component({
  selector: 'app-edit-pc',
  templateUrl: './edit-pc.page.html',
  styleUrls: ['./edit-pc.page.scss'],
})
export class EditPcPage implements OnInit {

  id: string = "0";

  currentPC: PC = {
    companyName: '',
    policyType: '',
    premium: '',
    expirationDate: '',
    deductible: '',
    username: this.actRouter.snapshot.paramMap.get("username") ??''
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
      this.router.navigate(['home/pc/'])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
