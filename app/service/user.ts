import { Service } from 'egg';
/**
 * User Service
 */
const TOKEN: string = 'test_token_canary';
const USERNAME: string = 'chenhao'
const PASSWORD: string = '666'
export default class User extends Service {
  public async exist(token: string): Promise<boolean> {
    if (token === TOKEN) {
      return true;
    } else {
      return false;
    }
  }
  public async login(username: string, password: string): Promise<string> {
    if (username == USERNAME && password === PASSWORD) {
      return TOKEN;
    }
    return ''
  }
}
