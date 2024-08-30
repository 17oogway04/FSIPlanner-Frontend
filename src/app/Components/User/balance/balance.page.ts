import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { Balance } from 'src/app/Models/balance';
import { AssetService } from 'src/app/Services/asset.service';
import { BalanceService } from 'src/app/Services/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  userBalance: Balance[] = [];
  userAsset: Asset[] = [];
  username: string ='';

  checkingValue: string = '';
  constructor(private myBalanceService: BalanceService, private actRouter: ActivatedRoute, private myAssetService: AssetService) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name != null)
    {
      this.username = name;
    }
    this.loadUserAssets()     
    // this.loadUserBalances()

  }

  loadUserBalances(){
    this.myBalanceService.getBalancesByUsername(this.username).subscribe((response) => {
      this.userBalance = response;    
    })   

  }

  totals(){
    let checkingTotal = this.userAsset
      .filter(asset => asset.type === "1")
      .reduce((sum, asset) => {
       return sum + asset.balance!
      }, '');
    this.checkingValue = checkingTotal;
  }
  
  loadUserAssets(){
    this.myAssetService.getAssetsByUsername(this.username).subscribe((response) => {
      this.userAsset = response;
      this.myBalanceService.updateBalances(this.username).subscribe((balance) => {
        this.userBalance = [balance]
      })
    })

  }

}
