import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBalancePage } from './client-balance.page';

describe('ClientBalancePage', () => {
  let component: ClientBalancePage;
  let fixture: ComponentFixture<ClientBalancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
