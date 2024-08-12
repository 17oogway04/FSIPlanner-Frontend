import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditDemoPage } from './client-edit-demo.page';

describe('ClientEditDemoPage', () => {
  let component: ClientEditDemoPage;
  let fixture: ComponentFixture<ClientEditDemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
