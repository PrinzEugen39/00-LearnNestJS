import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

// GET /ninjas --> []
// GET /ninjas/:id --> {...}
// POST /ninjas
// PUT /ninjas/:id --> {...}
// DELETE /ninjas/:id

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createNinja() {
    return {};
  }

  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
