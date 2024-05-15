import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}
  async newUsuario(user: any): Promise<string> {
    try {
      
      const existingUser = await this.usuarioRepository.findOne({ where: { correo: user.correo } });

      if (existingUser) {
        throw new ConflictException('El correo electrónico ya está en uso');
      }
      const nuevoUsuario = this.usuarioRepository.create(user);
      await this.usuarioRepository.save(nuevoUsuario);

      return 'Usuario agregado a la base de datos';
    } catch (error) {
      throw new Error('Error al agregar usuario a la base de datos: ${error.message}');
}
}
async findByCorreo(correo: string): Promise<Partial<Usuario>[]> {
  return this.usuarioRepository.find({
    select: ['id', 'nombre'],
    where: { correo },
  });
}
}
  
  
  /*async newUsuario(user: any): Promise<string>{
  try{
    const nuevoUSuario = this.usuarioRepository.create(user);
    await this.usuarioRepository.save(nuevoUSuario);
    return 'Usuario agregado ala base de datos';
  }catch(error){
    throw new Error('Error ${error.message}');
  }
  }*/


