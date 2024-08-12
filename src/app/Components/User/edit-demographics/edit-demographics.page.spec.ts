import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDemographicsPage } from './edit-demographics.page';

describe('EditDemographicsPage', () => {
  let component: EditDemographicsPage;
  let fixture: ComponentFixture<EditDemographicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDemographicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
