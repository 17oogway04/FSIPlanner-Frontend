import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientAssetOverviewPage } from './client-asset-overview.page';

describe('ClientAssetOverviewPage', () => {
  let component: ClientAssetOverviewPage;
  let fixture: ComponentFixture<ClientAssetOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssetOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
