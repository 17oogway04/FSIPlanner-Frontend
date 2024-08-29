import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bucket } from 'src/app/Models/asset';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-client-buckets',
  templateUrl: './client-buckets.page.html',
  styleUrls: ['./client-buckets.page.scss'],
  providers: [DecimalPipe]

})
export class ClientBucketsPage implements OnInit {

  buckets: Bucket = {
    bucketId: 0,
    type: '',
    bucket: '',
    balance: 0, 
    username: ''
  }
  username: string = '';
  bucket: Bucket[] = []
  totalCapitalAmount: number = 0;
  constructor(private myBucketService: AssetService, private decimalPipe: DecimalPipe, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    let user = this.actRouter.snapshot.paramMap.get("username") ?? '';
    if(user !== null){
      this.username = user;
    }
    this.getBuckets()
    this.totalCapital()
  }

  getBuckets(){
    this.myBucketService.getBuckets(this.username).subscribe((response) => {
      this.bucket = response;
      this.totalCapital()
    })
  }
  printAssets(){
    window.print()
  }

  totalCapital(){
    this.totalCapitalAmount = this.bucket.reduce((accumulator, currentBucket) => accumulator + (currentBucket.balance || 0), 0)
  }
}
