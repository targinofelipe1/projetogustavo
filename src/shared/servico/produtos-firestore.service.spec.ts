import { TestBed } from '@angular/core/testing';

import { ProdutosFirestoreService } from './produtos-firestore.service';

describe('ProdutosFirestoreService', () => {
  let service: ProdutosFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
