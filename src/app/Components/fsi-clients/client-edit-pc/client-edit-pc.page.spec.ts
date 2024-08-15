import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditPcPage } from './client-edit-pc.page';

describe('ClientEditPcPage', () => {
  let component: ClientEditPcPage;
  let fixture: ComponentFixture<ClientEditPcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
