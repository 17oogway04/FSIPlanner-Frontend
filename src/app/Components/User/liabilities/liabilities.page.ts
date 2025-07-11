import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Liabilities } from 'src/app/Models/liabilities';
import { LiabilitiesService } from 'src/app/Services/liabilities.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.page.html',
  styleUrls: ['./liabilities.page.scss'],
})
export class LiabilitiesPage implements OnInit {

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
  user: any;
  username: string = '';
  tooltipDescriptions = {
    type: 'Please catorgize this account from the options on the right. Number expected.',
    balance: 'How much is left to pay off?',
    value: 'What is the value of the liability?',
    term: 'When is the end date of the loan?',

  };
  isFormVisible = false;
  userLiabilities: Liabilities[] = [];
  newLiability: Liabilities = new Liabilities("", 0, "", "", 0, 0, 0, "", 0, localStorage.getItem('ClientName')!);
  constructor(private myLiabilityService: LiabilitiesService, private actRouter: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.loadUserLiabilities();
    this.getTypeValue()
  }

  loadUserLiabilities() {
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response;
      this.username = this.user.result.userName;
      this.myLiabilityService.getLiabilitiesByUsername(this.username).subscribe((response) => {
        this.userLiabilities = response.sort((a, b) => parseInt(a.type!) - parseInt(b.type!));
      })
    })

  }

  getTypeValue() {
    if (this.newLiability.type && this.catergories[this.newLiability.type]) {
      this.selectedType = this.catergories[this.newLiability.type];
    } else {
      this.selectedType = 'Invalid key';
    }
  }

  createLiability() {
    this.myLiabilityService.createLiability(this.newLiability).subscribe((response) => {
      if (response != null) {
        window.alert("Liability added");
        window.location.reload();
      }
    })
  }
  printLiabilities() {
    window.print()
  }
  openForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  deleteLiability(id: number) {
    this.myLiabilityService.deleteLiability(id).subscribe(() => {
      window.alert("Liability has been deleted");
      this.loadUserLiabilities()
    })
  }

}
