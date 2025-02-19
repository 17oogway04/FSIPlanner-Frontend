import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestUpdatePage } from './request-update.page';

describe('RequestUpdatePage', () => {
  let component: RequestUpdatePage;
  let fixture: ComponentFixture<RequestUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
