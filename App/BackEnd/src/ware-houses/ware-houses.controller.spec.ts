import { Test, TestingModule } from '@nestjs/testing';
import { WareHousesController } from './ware-houses.controller';
import { WareHousesService } from './ware-houses.service';

describe('WareHousesController', () => {
  let controller: WareHousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WareHousesController],
      providers: [WareHousesService],
    }).compile();

    controller = module.get<WareHousesController>(WareHousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
