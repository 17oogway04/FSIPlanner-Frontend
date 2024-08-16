import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.page.html',
  styleUrls: ['./edit-asset.page.scss'],
})
export class EditAssetPage implements OnInit {

  id: string = "0";

  currentAsset: Asset = {
    custodian: '',
    accountNumber: '',
    rateOfReturn: '',
    taxStructure: '',
    valuationDate: '',
    maturityDate: '',
    balance: '',
    type: '',
    bucket: '',
    name: '',
    username: this.actRouter.snapshot.paramMap.get("username") ??''
  }
  constructor(private actRouter: ActivatedRoute, private myAssetService: AssetService, private router: Router) { }

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ??''
    this.id = routeId;
    this.myAssetService.getAssetsById(parseInt(this.id)).subscribe((foundAsset) => {
      this.currentAsset = foundAsset;
    })
  }

  onSubmit(){
    this.myAssetService.updateAsset(parseInt(this.id), this.currentAsset).subscribe(() => {
      window.alert("Account updated successfully")
      this.router.navigate(['home/asset/', this.currentAsset.username])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}