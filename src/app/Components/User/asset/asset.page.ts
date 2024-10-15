import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Asset } from 'src/app/Models/asset';
import { AssetService } from 'src/app/Services/asset.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {

  username: string = '';  
  newAsset: Asset = new Asset(0, "", "", "", "", "", "", 0, "", "", localStorage.getItem('ClientName')!, "")

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
  userAssetName: string = '';
  userAsset: Asset[] = [];

  constructor(private myAssetservice: AssetService, private actRouter: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.saveUsername()
    this.loadUserAsset()   
    this.getTypeValue()
  }

  printAssets(){
    window.print()
  }
  saveUsername(){
    this.userService.getCurrentUser().subscribe((response) => {
      localStorage.setItem('ClientName', response.userName!)
    })
  }
  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const { from, to } = event.detail;
    const item = this.userAsset[from];
    this.userAsset.splice(from, 1);
    this.userAsset.splice(to, 0, item);
    // this.saveItems()
    event.detail.complete();
  }

  saveItems() {
    localStorage.setItem("items", JSON.stringify(this.userAsset));
  }
  getTypeValue() {
    if (this.newAsset.type && this.types[this.newAsset.type]) {
      this.selectedType = this.types[this.newAsset.type];
    } else {
      this.selectedType = 'Invalid key';
    }
  }

  loadUserAsset() {
    // const storedOrder = localStorage.getItem("items");
    // if (storedOrder == "") {
    //   this.userAsset = JSON.parse(storedOrder);
    // } else {
      // this.myAssetservice.getAssetsByUsername(this.username).subscribe((response) => {
      //   this.userAsset = response
      // })
      this.userService.getCurrentUser().subscribe((response) => {
        this.username = response.userName!;
        this.myAssetservice.getAssetsByUsername(this.username).subscribe((response) => {
          this.userAsset = response;
        })
      })
  }

  createAsset(): void {
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
