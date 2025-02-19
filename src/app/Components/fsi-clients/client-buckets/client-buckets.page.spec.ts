import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBucketsPage } from './client-buckets.page';

describe('ClientBucketsPage', () => {
  let component: ClientBucketsPage;
  let fixture: ComponentFixture<ClientBucketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBucketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
