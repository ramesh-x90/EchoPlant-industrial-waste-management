import { Test, TestingModule } from '@nestjs/testing';
import { RawMaterialsController } from './raw-materials.controller';
import { RawMaterialsService } from './raw-materials.service';

describe('RawMaterialsController', () => {
  let controller: RawMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RawMaterialsController],
      providers: [RawMaterialsService],
    }).compile();

    controller = module.get<RawMaterialsController>(RawMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
