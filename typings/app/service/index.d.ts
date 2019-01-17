// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportQueryDB from '../../../app/service/queryDB';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    queryDB: ExportQueryDB;
    user: ExportUser;
  }
}
