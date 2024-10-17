import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientRequestUpdatePage } from './client-request-update.page';

describe('ClientRequestUpdatePage', () => {
  let component: ClientRequestUpdatePage;
  let fixture: ComponentFixture<ClientRequestUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRequestUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
