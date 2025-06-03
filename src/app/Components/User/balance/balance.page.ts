import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { Balance } from 'src/app/Models/balance';
import { Liabilities } from 'src/app/Models/liabilities';
import { Life } from 'src/app/Models/life';
import { AssetService } from 'src/app/Services/asset.service';
import { BalanceService } from 'src/app/Services/balance.service';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';
import { LifeService } from 'src/app/Services/life.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  catergories: { [key: string]: string } = {
    "1": "Checking",
    "2": "Currency",
    "3": "Savings",
    "4": "CDs",
    "5": "Health and Medical Savings",
    "6": "Life Insurance",
    "7": "Annuities",
    "8": "Investments",
    "9": "IRAs",
    "10": "Roth IRA",
    "11": "Employer Retirement Plans",
    "12": "Bullion",
    "13": "Primary Residence",
    "14": "Secondary Residence",
    "15": "Real Estate",
    "16": "Business",
    "17": "Trust",
    "18": "Vehicles",
    "19": "Personal Property",
    "20": "Credit Cards",
    "21": "Student Loans",
    "22": "Other"
  }
  selectedType: string = '';

  userBalance: Balance[] = [];
  liabilityBalance: Balance[] = [];
  userAsset: Asset[] = [];
  userLiabilities: Liabilities[] = [];
  username: string = '';
  userLife: Life[] = [{
    policyName: '',
    policyType: '',
    owner: '',
    insured: '',
    premium: 0,
    cashValue: 0,
    deathBenefitOne: 0,
    deathBenefitTwo: 0,
    riders: '',
    ridersBenefit: 0,
    percentageToSavings: 0
  }];
  combinedBalance: any[] = [];
  user: any;
  checkingValue: string = '';
  constructor(private myBalanceService: BalanceService, private actRouter: ActivatedRoute, private myAssetService: AssetService, private myLiabilityService: LiabilitiesService, private myLifeService: LifeService, private userService: UserService) { }

  ngOnInit() {
    this.loadUserBalances()

  }
  loadUserBalances() {
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response;
      this.username = this.user.result.userName;
      this.myAssetService.getAssetsByUsername(this.username).subscribe((response) => {
        this.userAsset = response;
        this.myLiabilityService.getLiabilitiesByUsername(this.username).subscribe((response) => {
          this.userLiabilities = response;
        })
        this.myLifeService.getLifeByUsername(this.username).subscribe((response) => {
          this.userLife = response
          this.combinedBalance = this.combineBalances();

        })
      })
    })

  }

  combineBalances() {
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

    // const liabilityValue = this.userLiabilities.reduce((total, value) => {
    //   return total + (value.value || 0);
    // }, 0);

    // if (!assetSumByType['13']) {
    //   assetSumByType['13'] = 0;
    // }

    // assetSumByType['13'] += liabilityValue;

    const typesToInclude = ['13', '14'];

    typesToInclude.forEach(type => {
      const totalValue = this.userLiabilities
        .filter(item => item.type === type)
        .reduce((sum, item) => sum + (item.value || 0), 0);

      if (!assetSumByType[type]) {
        assetSumByType[type] = 0;
      }

      assetSumByType[type] += totalValue;
    });


    const lifeInsuranceCashValueTotal = this.userLife.reduce((total, life) => {
      return total + (life.cashValue || 0);
    }, 0);

    if (!assetSumByType['6']) {
      assetSumByType['6'] = 0;
    }
    assetSumByType['6'] += lifeInsuranceCashValueTotal;

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
        netWorth: assetBalance - liabilityBalance
      });
    }


    return combined;
  }
  printAssets() {
    window.print()
  }

}
