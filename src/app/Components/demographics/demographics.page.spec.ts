import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemographicsPage } from './demographics.page';

describe('DemographicsPage', () => {
  let component: DemographicsPage;
  let fixture: ComponentFixture<DemographicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
