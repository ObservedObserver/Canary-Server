import {Controller} from 'egg'

class SQLController extends Controller {
  async sqlQuery() {
    const {ctx} = this
    const {sql, config}: {sql: string, config: any} = ctx.request.body
    let result = await ctx.service.mysql.query(sql, config)
    ctx.body = {
      success: true,
      data: result
    }
  }
}

export default SQLController
