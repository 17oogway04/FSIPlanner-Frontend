import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientLiabilityPage } from './client-liability.page';

describe('ClientLiabilityPage', () => {
  let component: ClientLiabilityPage;
  let fixture: ComponentFixture<ClientLiabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLiabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
