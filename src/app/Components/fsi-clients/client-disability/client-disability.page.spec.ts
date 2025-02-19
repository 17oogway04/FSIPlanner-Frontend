import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientDisabilityPage } from './client-disability.page';

describe('ClientDisabilityPage', () => {
  let component: ClientDisabilityPage;
  let fixture: ComponentFixture<ClientDisabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDisabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
