import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorTagsComponent } from './anchor-tags.component';

describe('AnchorTagsComponent', () => {
  let component: AnchorTagsComponent;
  let fixture: ComponentFixture<AnchorTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
