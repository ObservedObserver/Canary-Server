// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDashBoard from '../../../app/controller/dashBoard';
import ExportDataSource from '../../../app/controller/dataSource';
import ExportHome from '../../../app/controller/home';
import ExportUnion from '../../../app/controller/union';

declare module 'egg' {
  interface IController {
    dashBoard: ExportDashBoard;
    dataSource: ExportDataSource;
    home: ExportHome;
    union: ExportUnion;
  }
}
