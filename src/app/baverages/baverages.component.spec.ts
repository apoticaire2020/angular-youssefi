import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaveragesComponent } from './baverages.component';

describe('BaveragesComponent', () => {
  let component: BaveragesComponent;
  let fixture: ComponentFixture<BaveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaveragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
