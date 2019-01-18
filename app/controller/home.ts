import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async login() {
    const { ctx } = this;
    const {username, password} = ctx.request.body
    const result = await ctx.service.user.login(username, password)
    if (result) {
      ctx.body = {
        success: true
      }
    } else {
      ctx.body = {
        success: false
      }
    }
  }
}
