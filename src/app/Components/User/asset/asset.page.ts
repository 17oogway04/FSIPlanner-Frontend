import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AcctMovement } from 'src/app/Models/acct-movement';
import { Asset } from 'src/app/Models/asset';
import { AcctMovementService } from 'src/app/Services/acct-movement.service';
import { AssetService } from 'src/app/Services/asset.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {

  username: string = '';
  username2: string = '';
  newAsset: Asset = new Asset("", 0, "", "", "", "", "", "", 0, "", "", localStorage.getItem('ClientName')!, "")
  newAcctMovement: AcctMovement = new AcctMovement(0, "", "", "", 0, "", localStorage.getItem('ClientName')!, "");
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
  userAcctMovement: AcctMovement[] = [];
  assetUser: any;
  acctMovementuser: any;
  user: any;
  tooltipDescriptions = {
    type: 'Please catorgize this account from the options on the right labeled "Types". Number expected.',
    bucket: 'Please catorgize this account from the options on the right labeled "Buckets". Number expected.',
  };

  constructor(private myAssetservice: AssetService, private actRouter: ActivatedRoute, private userService: UserService, private menu: MenuController, private acctMovementService: AcctMovementService) { }

  ngOnInit() {
    this.saveUsername()
    this.loadUserAsset()
    this.getTypeValue()
    this.menu.enable(false, 'acctMovement');

  }

  printAssets() {
    window.print()
  }
  saveUsername() {
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response;
      localStorage.setItem('ClientName', this.user.result.userName)
    })
  }

  openMenu() {
    this.menu.enable(true, 'acctMovement'); // enable this menu
    this.menu.open('acctMovement');
  }

  async closeMenu() {
    await this.menu.close('acctMovement');
    await this.menu.enable(false, 'acctMovement'); // disables it after closing
  }
  // handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
  //   const { from, to } = event.detail;
  //   const item = this.userAsset[from];
  //   this.userAsset.splice(from, 1);
  //   this.userAsset.splice(to, 0, item);
  //   // this.saveItems()
  //   event.detail.complete();
  // }

  // saveItems() {
  //   localStorage.setItem("items", JSON.stringify(this.userAsset));
  // }
  getTypeValue() {
    if (this.newAsset.type && this.types[this.newAsset.type]) {
      this.selectedType = this.types[this.newAsset.type];
    } else {
      this.selectedType = 'Invalid key';
    }
  }

  loadUserAcctNotes(){
    this.userService.getCurrentUser().subscribe((response) => {
      this.acctMovementuser = response;
      this.username2 = this.acctMovementuser.result.userName;
      this.newAcctMovement.userId = this.acctMovementuser.result.id;
      this.acctMovementService.getAcctMovementByUsername(this.username2).subscribe((response) => {
        this.userAcctMovement = response;
        console.log(this.userAcctMovement)
      })
    })
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
      this.assetUser = response;
      this.username = this.assetUser.result.userName;
      this.newAsset.userId = this.assetUser.result.id;
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
