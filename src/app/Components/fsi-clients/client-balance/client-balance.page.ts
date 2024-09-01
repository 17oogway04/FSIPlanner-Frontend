import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { Balance } from 'src/app/Models/balance';
import { AssetService } from 'src/app/Services/asset.service';
import { BalanceService } from 'src/app/Services/balance.service';

@Component({
  selector: 'app-client-balance',
  templateUrl: './client-balance.page.html',
  styleUrls: ['./client-balance.page.scss'],
})
export class ClientBalancePage implements OnInit {

  userBalance: Balance[] = [];
  userAsset: Asset[] = [];
  username: string ='';

  constructor(private myBalanceService: BalanceService, private actRouter: ActivatedRoute, private myAssetService: AssetService) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(name != null)
    {
      this.username = name;
    }
    this.loadUserAssets()     
  }

  loadUserAssets(){
    this.myAssetService.getAssetsByUsername(this.username).subscribe((response) => {
      this.userAsset = response;
      this.myBalanceService.updateBalances(this.username).subscribe((balance) => {
        this.userBalance = [balance]
      })
    })

  }

  printAssets(){
    window.print()
  }

}
