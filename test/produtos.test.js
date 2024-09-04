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
                preco: '99',
                nome:  'lego',
            }
            );
            expect(res.status).toBe(204)
    });
})

describe('Criar /produtos/:id', () => {
    it('atualizar o nome do produto com sucesso', async () => {
        const res = await request(app).post('/produtos/eb566b58-68a3-4e84-9529-b05d681943a1').send(
            {
                nome: 'lego',
            }
        )
        expect(res.status).toBe(200)
    })
})

describe('deletar /produtos/:id', () => {
    it('deletar nome do produto com sucesso', async () => {
        const res = await request(app).delete('/produtos/eb566b58-68a3-4e84-9529-b05d681943a1').send(
            {
                nome:'ramon teste'
            })
            expect(res.status).toBe(204)
    })
} )