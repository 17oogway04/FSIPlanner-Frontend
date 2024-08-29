import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/Models/asset';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-client-asset',
  templateUrl: './client-asset.page.html',
  styleUrls: ['./client-asset.page.scss'],
})
export class ClientAssetPage implements OnInit {

  username: string = '';
  types: { [key: string]: string } = {
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
  printAssets(){
    window.print()
  }


  deleteAsset(id: number) {
    this.myAssetservice.deleteAsset(id).subscribe(() => {
      window.alert("Account has been deleted");
      this.loadUserAsset()
    })
  }
}
