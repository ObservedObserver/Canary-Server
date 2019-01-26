import {Service} from 'egg'


const mysql = require('mysql')

interface MysqlConfig {
  host: string,
  port: number,
  user: string,
  password: string
}

function mysqlQuery ({config, sql}): Promise<any> {
 return new Promise((resolve, reject) => {
    let connection = mysql.createConnection(config)
    connection.connect((err) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
          connection.end()
        })
      }
    })
  })
}
class Mysql extends Service {
  async query(sql: string, config: MysqlConfig): Promise<any> {
    let result: any
    try {
      result = await mysqlQuery({sql, config})
    } catch (error) {
      result = error
    }
    return result
  }
}
export default Mysql