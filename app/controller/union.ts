import {Controller} from 'egg';
const DS_FILE: string = './data/dataSource.json'
const DB_FILE: string = './data/dashBoard.json'
const C_FILE: string = './data/chartWareHouse.json'
interface UnionData {
  dataSource: Array<any>,
  dashBoardList: Array<any>,
  chartWarehouse: Array<any>
}
class UnionController extends Controller {
  public async getData() {
    const {ctx} = this
    const dataSourceList: Array<any> = await ctx.service.queryDB.get(DS_FILE)
    const dashBoardList: Array<any> = await ctx.service.queryDB.get(DB_FILE)
    const chartWarehouse: Array<any> = await ctx.service.queryDB.get(C_FILE)
    const data: UnionData = {
      dataSource: dataSourceList,
      dashBoardList,
      chartWarehouse
    }
    ctx.body = {
      success: true,
      data
    }
  }
}

export default UnionController