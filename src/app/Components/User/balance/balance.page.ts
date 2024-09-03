import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { Balance } from 'src/app/Models/balance';
import { Liabilities } from 'src/app/Models/liabilities';
import { AssetService } from 'src/app/Services/asset.service';
import { BalanceService } from 'src/app/Services/balance.service';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  userBalance: Balance[] = [];
  liabilityBalance: Balance[] = [];
  userAsset: Asset[] = [];
  userLiabilities: Liabilities[] = [];
  username: string ='';

  combinedBalance: any[] = [];

  checkingValue: string = '';
  constructor(private myBalanceService: BalanceService, private actRouter: ActivatedRoute, private myAssetService: AssetService, private myLiabilityService: LiabilitiesService) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name != null)
    {
      this.username = name;
    }

    this.loadUserBalances()

  }

  loadUserBalances(){
    this.myAssetService.getAssetsByUsername(this.username).subscribe((response) => {
      this.userAsset = response;
      this.myLiabilityService.getLiabilitiesByUsername(this.username).subscribe((response) => {
        this.userLiabilities = response;
        this.combinedBalance = this.combineBalances();
      })
    })
  }
  
  combineBalances(){
    const combined: any[] = [];

       const assetSumByType: { [key: string]: number } = {};
       const liabilitySumByType: { [key: string]: number } = {};
   
       this.userAsset.forEach(a => {
         const type = a.type!;
         if (!assetSumByType[type]) {
           assetSumByType[type] = 0;
         }
         assetSumByType[type] += a.balance!;
       });
   
       this.userLiabilities.forEach(l => {
         const type = l.type!;
         if (!liabilitySumByType[type]) {
           liabilitySumByType[type] = 0;
         }
         liabilitySumByType[type] += l.balance!;
       });
   
       for (let i = 1; i <= 22; i++) {
         const type = i.toString();
         const assetBalance = assetSumByType[type] || 0;
         const liabilityBalance = liabilitySumByType[type] || 0;
   
         combined.push({
           type,
           assetBalance,
           liabilityBalance,
           netWorth: assetBalance + liabilityBalance
         });
       }
   
    
    return combined;
  }
  printAssets(){
    window.print()
  }

}
