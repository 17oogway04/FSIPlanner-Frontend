import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BucketsPage } from './buckets.page';

describe('BucketsPage', () => {
  let component: BucketsPage;
  let fixture: ComponentFixture<BucketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
