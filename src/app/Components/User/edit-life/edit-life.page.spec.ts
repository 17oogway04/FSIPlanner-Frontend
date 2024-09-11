import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLifePage } from './edit-life.page';

describe('EditLifePage', () => {
  let component: EditLifePage;
  let fixture: ComponentFixture<EditLifePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
