import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditLiabilityPage } from './client-edit-liability.page';

describe('ClientEditLiabilityPage', () => {
  let component: ClientEditLiabilityPage;
  let fixture: ComponentFixture<ClientEditLiabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditLiabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
