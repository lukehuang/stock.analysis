import fse from 'fs-extra';
import path from 'path';
import sq3 from 'sqlite3';
import { docDir } from '@utils/settings';

export const dbPath = path.join(docDir, 'data.sqlite3');
fse.ensureFileSync(dbPath);

const sqlite3 = sq3.verbose();
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    /**
     * 交易记录 EXCHANGE_RECORD
     * stock_code 股票代码
     * stock_name 股票名称
     * unit_price 成交单价（元/股）
     * exchange_number 交易数量（股）
     * exchange_type 交易类别：0-买 1-卖
     * exchange_time 成交时间
     */
    db.run(`CREATE TABLE EXCHANGE_RECORD(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        stock_code VARCHAR(30) NOT NULL,
        stock_name VARCHAR(30) NOT NULL,
        unit_price DECIMAL(15,2) NOT NULL,
        exchange_number INTEGER NOT NULL,
        exchange_type INTEGER NOT NULL,
        exchange_time INTEGER NOT NULL
    )`, err => {
        console.error(err);
    });
});

export default db;
