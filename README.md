# Canary Server

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Build DB File
The system is using a file storage for data. you need create those json file with a empty array in them for init.
```bash
/data/

dataSource.json
dashBoard.json
chartWarehouse.json
```
If you want transform it into a real db system. you can edit the service.queryDB for your own database.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
