import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should return all users', async () => {
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'test@example.com',
        password: 'PASSWORD',
        name: 'Test user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(prismaService.user, 'findMany').mockResolvedValue(mockUsers);

    const users = await userService.getUsers();
    expect(users).toEqual(mockUsers);
  });

  it('should create a new user', async () => {
    const newUser = {
      id: '2',
      email: 'test2@example.com',
      password: 'PASSWORD2',
      name: 'Test user2',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prismaService.user, 'create').mockResolvedValue(newUser);

    const user = await userService.createUser(newUser);

    expect(user).toEqual(newUser);
  });


});
