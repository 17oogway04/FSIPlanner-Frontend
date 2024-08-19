import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientAssetPage } from './client-asset.page';

describe('ClientAssetPage', () => {
  let component: ClientAssetPage;
  let fixture: ComponentFixture<ClientAssetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
