import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientDemographicsPage } from './client-demographics.page';

describe('ClientDemographicsPage', () => {
  let component: ClientDemographicsPage;
  let fixture: ComponentFixture<ClientDemographicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDemographicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
