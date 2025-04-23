import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditDisabilityPage } from './client-edit-disability.page';

describe('ClientEditDisabilityPage', () => {
  let component: ClientEditDisabilityPage;
  let fixture: ComponentFixture<ClientEditDisabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditDisabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
