import { TestBed, inject } from '@angular/core/testing';

import { MusicGraphService } from './music-graph.service';

describe('MusicGraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicGraphService]
    });
  });

  it('should be created', inject([MusicGraphService], (service: MusicGraphService) => {
    expect(service).toBeTruthy();
  }));
});
