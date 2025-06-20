import { Test, TestingModule } from '@nestjs/testing';
import { AvisoService } from './aviso.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Aviso } from '../../shared/entities/aviso.entity';

import { Repository } from 'typeorm';

describe('AvisoService', () => {
  let service: AvisoService;
  let repo: Repository<Aviso>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AvisoService,
        {
          provide: getRepositoryToken(Aviso),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AvisoService>(AvisoService);
    repo = module.get<Repository<Aviso>>(getRepositoryToken(Aviso));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
