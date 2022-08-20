import { TestBed } from '@angular/core/testing';

import { JourferieeService } from './jourferiee.service';

describe('JourferieeService', () => {
  let service: JourferieeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourferieeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
