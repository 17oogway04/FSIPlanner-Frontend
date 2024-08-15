import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPcPage } from './client-pc.page';

describe('ClientPcPage', () => {
  let component: ClientPcPage;
  let fixture: ComponentFixture<ClientPcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
