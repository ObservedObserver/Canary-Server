import { Controller } from 'egg'
const DB_FILE: string = './data/dashBoard.json'
class DashBoardController extends Controller {
  public async getDashBoardList() {
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
  public async deleteDashBoard() {
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
  public async addDashBoard() {
    const {ctx} = this
    const dashBoard: any = ctx.request.body
    const result: Array<string> = await ctx.service.queryDB.post(DB_FILE, [dashBoard])
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
  public async putDashBoard() {
    const {ctx} = this
    const dashBoard: any = ctx.request.body
    const result = await ctx.service.queryDB.put(DB_FILE, [dashBoard.id], [dashBoard])
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
