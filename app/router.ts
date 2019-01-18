import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/getInitData', controller.union.getData);
  router.post('/api/addDataSource', controller.dataSource.addDataSource);
  router.get('/api/getDataSource', controller.dataSource.getDataSourceList);
  router.delete('/api/deleteDataSource', controller.dataSource.deleteDataSource);
  router.put('/api/updateDataSource', controller.dataSource.putDataSource);
  router.get('/api/getDashBoard', controller.dashBoard.getDashBoardList);
  router.post('/api/addDashBoard', controller.dashBoard.addDashBoard);
  router.put('/api/updateDashBoard', controller.dashBoard.putDashBoard);
  router.delete('/api/deleteDashBoard', controller.dashBoard.deleteDashBoard);
  router.post('createPost', '/api/login', controller.home.login);


  router.options('/api/getInitData', controller.union.getData);
  router.options('/api/addDataSource', controller.dataSource.addDataSource);
  router.options('/api/getDataSource', controller.dataSource.getDataSourceList);
  router.options('/api/deleteDataSource', controller.dataSource.deleteDataSource);
  router.options('/api/updateDataSource', controller.dataSource.putDataSource);
  router.options('/api/getDashBoard', controller.dashBoard.getDashBoardList);
  router.options('/api/addDashBoard', controller.dashBoard.addDashBoard);
  router.options('/api/updateDashBoard', controller.dashBoard.putDashBoard);
  router.options('/api/deleteDashBoard', controller.dashBoard.deleteDashBoard);
  router.options('/api/login', controller.home.login);
};
