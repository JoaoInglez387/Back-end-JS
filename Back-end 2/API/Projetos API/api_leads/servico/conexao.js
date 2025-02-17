import mysql from 'mysql2/promise';

const pool = mysql.createPool ({
    host: 'localhost',
    user: 'usuario',
    password: '123usuarios',
    database: 'usuarios'
});

export default pool;