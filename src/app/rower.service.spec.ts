/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RowerService } from './rower.service';

describe('RowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RowerService]
    });
  });

  it('should ...', inject([RowerService], (service: RowerService) => {
    expect(service).toBeTruthy();
  }));
});
