const request = require('supertest')
const app = require('../index')

describe('GET /clientes', () =>{
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200);
    
});
it('verificar se a lista de clientes está cheia', async() =>{
    const res = await request (app).get('/clientes').send();
    expect(res.body.toBefined);
}); 
})

describe('Criar /clientes', () => {
    it('criar cliente com sucesso', async() => {
        const res = await request(app).post('/clientes').send(
            {
                nome:'vitor teste',
                email:'vitor@teste.com',
                senha:'senhasupervitor',
            }
            );
            expect(res.status).toBe(204)
    });
})

describe('Criar /clientes/:id', () => {
    it('atualizar o nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/2d0bb648-5cc4-4047-8fc4-8017653ee82e').send(
            {
                nome:'vitor update',
            }
        )
        expect(res.status).toBe(200)
    })
})

describe('deletar /clientes/:id', () => {
    it('deletar um cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/2d0bb648-5cc4-4047-8fc4-8017653ee82e').send(
            {
                nome:'vitor update'
            })
            expect(res.status).toBe(204)
    })
} )
