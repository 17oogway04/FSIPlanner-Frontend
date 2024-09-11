import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientLifePage } from './client-life.page';

describe('ClientLifePage', () => {
  let component: ClientLifePage;
  let fixture: ComponentFixture<ClientLifePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
