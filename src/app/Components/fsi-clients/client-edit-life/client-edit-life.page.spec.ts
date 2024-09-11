import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditLifePage } from './client-edit-life.page';

describe('ClientEditLifePage', () => {
  let component: ClientEditLifePage;
  let fixture: ComponentFixture<ClientEditLifePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
