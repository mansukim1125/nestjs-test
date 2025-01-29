import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  private cache: Map<string, string> = new Map<string, string>();

  constructor() {}

  public async set<T>(key: string, value: T): Promise<T> {
    const stringified = JSON.stringify(value);
    this.cache.set(key, stringified);
    return value;
  }

  public async get<T>(key: string): Promise<T | null> {
    const stringifiedData = this.cache.get(key);
    try {
      if (stringifiedData) {
        return JSON.parse(stringifiedData) as T;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
}
