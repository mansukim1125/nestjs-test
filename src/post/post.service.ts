import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPosts() {
    return this.prismaService.post.findMany();
  }

  async createPost(param: {
    title: string;
    content?: string;
    authorId: string;
  }) {
    return this.prismaService.post.create({
      data: param,
    });
  }
}
