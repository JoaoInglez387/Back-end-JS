import pool from './conexao.js';

async function executaQuery(conexao, query) {
    const resultando_query = await conexao.query(query);
    const resposta = resultando_query[0];
    return resposta;
}

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const query = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos');
    const campeonatos = executaQuery(conexao, query);
    console.log(campeonatos);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosID(id) {
    const conexao = await pool.getConnection();
    const query = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ' + id);
    const campeonatos = executaQuery(conexao, query);;
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection();
    const query = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos WHERE ano =' + ano);
    const campeonatos = executaQuery(conexao, query);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection();
    const query = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "' + time + '" ');
    const campeonatos = executaQuery(conexao, query);
    conexao.release();
    return campeonatos;
}
