/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UolComponent } from './uol.component';

describe('UolComponent', () => {
  let component: UolComponent;
  let fixture: ComponentFixture<UolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
