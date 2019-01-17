import {Controller} from 'egg';
const DS_FILE: string = './data/dataSource.json'
const DB_FILE: string = './data/dashBoard.json'
interface UnionData {
  dataSource: Array<any>,
  dashBoardList: Array<any>,
  dataWareHouse: Array<any>
}
class UnionController extends Controller {
  public async getData() {
    const {ctx} = this
    const dataSourceList: Array<any> = await ctx.service.queryDB.get(DS_FILE)
    const dashBoardList: Array<any> = await ctx.service.queryDB.get(DB_FILE)
    const data: UnionData = {
      dataSource: [],
      dashBoardList: [],
      dataWareHouse: []
    }
    data.dataSource = dataSourceList
    data.dashBoardList = dashBoardList
    const map: Map<string, any> = new Map()
    dashBoardList.forEach(db => {
      if (!map.has(db.id)) {
        map.set(db.id, db)
      }
    })
    data.dataWareHouse = [...map.entries()]
    ctx.body = {
      success: true,
      data
    }
  }
}

export default UnionController