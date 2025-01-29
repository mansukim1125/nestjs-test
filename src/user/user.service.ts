import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers() {
    await axios.get('/prisma/users');
    return this.prismaService.user.findMany();
  }

  async createUser(param: { email: string; password: string; name?: string }) {
    return this.prismaService.user.create({
      data: param,
    });
  }
}
