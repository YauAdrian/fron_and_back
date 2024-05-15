import { Body,Controller, Get, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Usuario } from './usuario.entity';
import { get } from 'http';


@Controller()
export class appController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  root() {
    return;
  }

  @Get('consulta')
  @Render('consulta')
  consulta() {
    return;
  }
  @Post('agregar')
  async newUsuario(@Body() Body:any): Promise<string>{
    return await this.appService.newUsuario(Body);
  }
  @Get('consultar')
  async getUsuarios(@Query('correo') correo: string): Promise<Partial<Usuario>[]> {
    return await this.appService.findByCorreo(correo);
  }
}
