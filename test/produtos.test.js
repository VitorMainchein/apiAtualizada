const request = require('supertest')
const app = require('../index')

describe('GET /produtos', () =>{
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200);
    
});
it('verificar se a lista de produtos está cheia', async() =>{
    const res = await request (app).get('/produtos').send();
    expect(res.body.toBefined);
}); 
})

describe('Criar /produtos', () => {
    it('criar produto com sucesso', async() => {
        const res = await request(app).post('/produtos').send(
            {
                preco: '14,99',
                nome:  'Esmalte',
            }
            );
            expect(res.status).toBe(204)
    });
})

describe('atualizar /produtos/:id', () => {
    it('atualizar nome do produto com sucesso', async () => {
        const res = await request(app).delete('/produtos/0a6ddabe-9cd9-42eb-a6d5-333435f486dc').send(
            {
                nome:'ramon teste'
            })
            expect(res.status).toBe(204)
    })
} )