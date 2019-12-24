import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRootingComponent } from './app-rooting.component';

describe('AppRootingComponent', () => {
  let component: AppRootingComponent;
  let fixture: ComponentFixture<AppRootingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRootingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
