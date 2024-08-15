import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPcPage } from './edit-pc.page';

describe('EditPcPage', () => {
  let component: EditPcPage;
  let fixture: ComponentFixture<EditPcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
