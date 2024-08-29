import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, } from 'chart.js/auto';
import { Asset } from 'src/app/Models/asset';

import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-client-asset-overview',
  templateUrl: './client-asset-overview.page.html',
  styleUrls: ['./client-asset-overview.page.scss'],
})
export class ClientAssetOverviewPage implements OnInit {
  username: string = '';
  userAsset: Asset[] = [];
  chart: Chart | undefined;

  constructor(private myAssetService: AssetService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const name = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if (name !== '') {
      this.username = name;
    }
    this.getUserAssets()
  }

  getUserAssets() {
    this.myAssetService.getAssetsByUsername(this.username).subscribe((response) => {
      this.userAsset = response;
      this.showChart()
    })
  }

  showChart() {
    const spendTotal = this.userAsset
      .filter(asset => asset.type === "1" || asset.type === "2")
      .reduce((sum, asset) => sum + asset.balance!, "0");

    const saveTotal = this.userAsset
      .filter(asset => asset.type === "3" || asset.type === "4" || asset.type === "5" || asset.type === "6")
      .reduce((sum, asset) => sum + asset.balance, "0")

    const investTotal = this.userAsset
      .filter(asset => asset.type === "7" || asset.type === "8" || asset.type === "9"|| asset.type === "10"|| asset.type === "11"|| asset.type === "12" )
      .reduce((sum, asset) => sum + asset.balance, "0")

    if(this.chart){
      this.chart.destroy()
    }

    var ctx = (<any>document.getElementById('pie-chart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Spend", "Save", "Invest"],
        datasets: [{
          label: 'Total',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          data: [spendTotal, saveTotal, investTotal],
          borderWidth: 1
        }]
      }
    })
  }
}
