import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditUserPage } from './client-edit-user.page';

describe('ClientEditUserPage', () => {
  let component: ClientEditUserPage;
  let fixture: ComponentFixture<ClientEditUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
