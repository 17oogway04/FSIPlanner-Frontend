import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {

  username: string = '';
  types: {[key: string]: string} = {
    "1": "Residence",
    "2": "Checking",
    "3": "Savings",
    "4": "CDs",
    "5": "Investments",
    "6": "Annuities",
    "7": "Life Insurance",
    "8": "IRAs",
    "9": "401(k)s",
    "10": "Real Estate",
    "11": "Vehicles",
    "12": "Other Property",
    "13": "Credit Cards",
    "14": "Student Loans",
    "15": "Other Unsecured",
    "16": "Roth IRA",
    "17": "H.S.A"
  }

  selectedType: string = '';
  isFormVisible = false;
  userAsset: Asset[] = [];
  newAsset: Asset = new Asset(0, "", "", "", "", "","", "", "", "", this.actRouter.snapshot.paramMap.get("username") ?? '', "")

  constructor(private myAssetservice: AssetService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if (name !== '') {
      this.username = name;
    }

    this.loadUserAsset()
    this.getTypeValue()
  }

  getTypeValue() {
    if (this.newAsset.type && this.types[this.newAsset.type]) {
      this.selectedType = this.types[this.newAsset.type];
    } else {
      this.selectedType = 'Invalid key';
    }  
  }

  loadUserAsset() {
    this.myAssetservice.getAssetsByUsername(this.username).subscribe((response) => {
      this.userAsset = response
    })
  }

  createAsset(): void{
    this.getTypeValue()
    this.myAssetservice.createAsset(this.newAsset).subscribe((response) => {
      if (response !== null) {
        window.alert("Account added");
        window.location.reload()

      } else {
        window.alert("Please fill out required fields")
      }
    }
    )
  }

  openForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  deleteAsset(id: number) {
    this.myAssetservice.deleteAsset(id).subscribe(() => {
      window.alert("Account has been deleted");
      this.loadUserAsset()
    })
  }
}
