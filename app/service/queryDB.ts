import { Service } from 'egg';
import * as fs from 'fs';
class QueryDB extends Service {
  public async get(filename: string): Promise<any> {
    try {
      const data: Array<any> = JSON.parse(fs.readFileSync(filename).toString());
      return data;
    } catch (error) {
      return false;
    }
  }
  public async post(filename: string, records: Array<any>): Promise<any> {
    try {
      const data: Array<any> = JSON.parse(fs.readFileSync(filename).toString());
      const storeRecords: Array<any> = records.map((record, index) => {
        return {
          ...record,
          id: filename + (new Date()).toString() + '-' + index
        }
      })
      data.push(...storeRecords);
      fs.writeFileSync(filename, JSON.stringify(data));
      return storeRecords.map(item => item.id);
    } catch (error) {
      return error;
    }
  }
  public async delete(filename: string, rids: Array<string>): Promise<any> {
    try {
      const data: Array<any> = JSON.parse(fs.readFileSync(filename).toString());
      const filterData = data.filter(record => {
        return rids.indexOf(record.id) === -1
      })
      fs.writeFileSync(filename, JSON.stringify(filterData))
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
    
  }
  public async put(filename: string, rids: Array<string>, records: Array<any>): Promise<any> {
    try {
      const data: Array<any> = JSON.parse(fs.readFileSync(filename).toString());
      rids.forEach((rid: any, i: number) => {
        let index: number = data.findIndex(item => {
          return item.id === rid
        })
        console.log('index', index, records[i], rids, records)
        data[index] = records[i]
      })
      fs.writeFileSync(filename, JSON.stringify(data))
      return true;
    } catch (error) {
      return false
    }
  }
}

export default QueryDB;
