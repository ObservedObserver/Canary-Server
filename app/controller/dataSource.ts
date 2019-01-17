import { Controller } from 'egg'
const DB_FILE: string = './data/dataSource.json'
class DataSourceController extends Controller {
  public async getDataSourceList() {
    const {ctx} = this
    const result = await ctx.service.queryDB.get(DB_FILE)
    if (result !== false) {
      ctx.body = {
        success: true,
        result
      }
    } else {
      ctx.body = {
        success: true,
        result
      }
    }
  }
  public async deleteDataSource() {
    const {ctx} = this
    const { id }: { id: string } = ctx.request.body
    const result: boolean = await ctx.service.queryDB.delete(DB_FILE, [id])
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
  public async addDataSource() {
    const {ctx} = this
    const dataSource: any = ctx.request.body
    const result: Array<string> = await ctx.service.queryDB.post(DB_FILE, [dataSource])
    if (result instanceof Array && result.length > 0) {
      ctx.body = {
        success: true,
        data: {
          id: result[0]
        }
      }
    } else {
      ctx.body = {
        success: false,
        data: result
      }
    }
  }
  public async putDataSource() {
    const {ctx} = this
    const dataSource: any = ctx.request.body
    const result = await ctx.service.queryDB.put(DB_FILE, [dataSource.id], [dataSource])
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

export default DataSourceController