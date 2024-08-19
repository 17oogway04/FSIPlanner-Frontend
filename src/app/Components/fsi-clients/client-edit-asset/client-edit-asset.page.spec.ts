import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditAssetPage } from './client-edit-asset.page';

describe('ClientEditAssetPage', () => {
  let component: ClientEditAssetPage;
  let fixture: ComponentFixture<ClientEditAssetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
