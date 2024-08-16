import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAssetPage } from './edit-asset.page';

describe('EditAssetPage', () => {
  let component: EditAssetPage;
  let fixture: ComponentFixture<EditAssetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
