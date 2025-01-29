import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts() {
    return this.postService.getPosts();
  }

  @Post()
  async createPost(
    @Body() body: { title: string; content?: string; authorId: string },
  ) {
    return this.postService.createPost(body);
  }
}
