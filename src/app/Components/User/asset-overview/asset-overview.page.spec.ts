import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetOverviewPage } from './asset-overview.page';

describe('AssetOverviewPage', () => {
  let component: AssetOverviewPage;
  let fixture: ComponentFixture<AssetOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
