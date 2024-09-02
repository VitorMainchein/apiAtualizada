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
                nome:'ramon teste',
                email:'ramon@teste.com',
                senha:'senhasupersegura',
            }
            );
            expect(res.status).toBe(204)
    });
})

describe('deletar /clientes/:id', () => {
    it('deletar um cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/127fae5d-85aa-4cfa-86ba-10609ca700f8').send(
            {
                nome:'ramon teste'
            })
            expect(res.status).toBe(204)
    })
} )
