import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDisabilityPage } from './edit-disability.page';

describe('EditDisabilityPage', () => {
  let component: EditDisabilityPage;
  let fixture: ComponentFixture<EditDisabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
