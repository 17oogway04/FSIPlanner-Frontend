import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLiabilityPage } from './edit-liability.page';

describe('EditLiabilityPage', () => {
  let component: EditLiabilityPage;
  let fixture: ComponentFixture<EditLiabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLiabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
