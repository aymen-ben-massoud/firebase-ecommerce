import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsproductsComponent } from './settingsproducts.component';

describe('SettingsproductsComponent', () => {
  let component: SettingsproductsComponent;
  let fixture: ComponentFixture<SettingsproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
