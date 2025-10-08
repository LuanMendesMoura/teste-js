import { CarrinhoDeCompras } from "../../src/utils/CarrinhoCompras";

describe('CarrinhoCompras.js', () => {

    let carrinhoCompras
    beforeEach(() => {
        carrinhoCompras = new CarrinhoDeCompras();
    })

    describe('adicionarItem()', () => {

        test('Deve falhar quando o parâmetro nome estiver vazio', () => {
            expect(() => carrinhoCompras.adicionarItem('', 20, 2)).toThrow(/^Dados do item inválidos$/)
        })

        test('Deve falhar quando o parâmetro preco for menor ou igual a 0', () => {
            expect(() => carrinhoCompras.adicionarItem('Arroz', 0, 2)).toThrow(/^Dados do item inválidos$/)
        })

        test('Deve falhar quando o parâmetro quantidade for menor ou igual a 0', () => {
            expect(() => carrinhoCompras.adicionarItem('Arroz', 20, 0)).toThrow(/^Dados do item inválidos$/)
        })

        test('Deve adicionar o item na lista quando todos os parâmetros estiverem corretos', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);
        })

    })

    describe('removerItem()', () => {

        test('Deve falhar quando não exitir o item na lista', () => {
            expect(() => carrinhoCompras.removerItem('arroz')).toThrow(/^Item não encontrado$/)
        })

        test('Deve remover um item quando existir', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);

            carrinhoCompras.removerItem('Arroz')
        })
    })

    describe('calcularTotal()', () => {

        test('Deve calcular o valor total dos itens', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);
            carrinhoCompras.adicionarItem('Feijão', 10.00, 1);

            expect(() => carrinhoCompras.calcularTotal().toBe(30))
        })
    })

    describe('limparCarrinho()', () => {

        test('Deve limpar o carrinho', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);
            carrinhoCompras.adicionarItem('Feijão', 10.00, 1);

            expect(() => carrinhoCompras.limparCarrinho())
        })
    })

})