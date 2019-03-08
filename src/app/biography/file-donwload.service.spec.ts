import { TestBed } from '@angular/core/testing';

import { FileDonwloadService } from './file-donwload.service';

describe('FileDonwloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileDonwloadService = TestBed.get(FileDonwloadService);
    expect(service).toBeTruthy();
  });
});
