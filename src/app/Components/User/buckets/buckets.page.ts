import { Component, OnInit } from '@angular/core';
import { Bucket } from 'src/app/Models/asset';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.page.html',
  styleUrls: ['./buckets.page.scss'],
})
export class BucketsPage implements OnInit {

  buckets: Bucket = {
    bucketId: 0,
    type: '',
    bucket: '',
    balance: 0, 
    username: ''
  }
  bucket: Bucket[] = []
  totalCapitalAmount: number = 0;
  constructor(private myBucketService: AssetService) { }

  ngOnInit() {
    this.getBuckets()
    this.totalCapital()
  }

  getBuckets(){
    this.myBucketService.getBuckets().subscribe((response) => {
      this.bucket = response;
      this.totalCapital()
    })
  }

  totalCapital(){
    this.totalCapitalAmount = this.bucket.reduce((accumulator, currentBucket) => accumulator + currentBucket.balance!, 0)
  }

}
