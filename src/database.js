import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-34-201-95-176.compute-1.amazonaws.com',
    user:'oyeisgczawbfza',
    password:'504be79431768462db829c50fe9b8ea220df44b9fda3bcede0fa2d76960384d0',
    database: 'df1s2p9kv5ot4p',
    port:5432,
    ssl:{rejectUnauthorized:false}
});