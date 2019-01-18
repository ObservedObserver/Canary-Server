import { Controller } from 'egg'
const C_FILE: string = './data/chartWarehouse.json'
class DashBoardController extends Controller {
  public async getChartList() {
    const {ctx} = this
    const result = await ctx.service.queryDB.get(C_FILE)
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
  public async deleteChart() {
    const {ctx} = this
    const { id }: { id: string } = ctx.request.body
    const result: boolean = await ctx.service.queryDB.delete(C_FILE, [id])
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
  public async addChart() {
    const {ctx} = this
    const chart: any = ctx.request.body
    const result: Array<string> = await ctx.service.queryDB.post(C_FILE, [chart])
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
  public async putChart() {
    const {ctx} = this
    const chart: any = ctx.request.body
    const result = await ctx.service.queryDB.put(C_FILE, [chart.id], [chart])
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

export default DashBoardController
