import { CarrinhoDeCompras } from "../../src/utils/CarrinhoCompras";

describe('CarrinhoCompras.js', () => {

    let carrinhoCompras;
    beforeEach(() => {
        carrinhoCompras = new CarrinhoDeCompras();
    });

    describe('adicionarItem()', () => {

        test('Deve falhar quando o parâmetro nome estiver vazio', () => {
            expect(() => carrinhoCompras.adicionarItem('', 20, 2)).toThrow(/^Dados do item inválidos$/);
        });

        test('Deve falhar quando o parâmetro preco for menor ou igual a 0', () => {
            expect(() => carrinhoCompras.adicionarItem('Arroz', 0, 2)).toThrow(/^Dados do item inválidos$/);
        });

        test('Deve falhar quando o parâmetro quantidade for menor ou igual a 0', () => {
            expect(() => carrinhoCompras.adicionarItem('Arroz', 20, 0)).toThrow(/^Dados do item inválidos$/);
        });

        test('Deve adicionar o item no carrinho quando todos os parâmetros estiverem corretos', () => {
            const resultado = carrinhoCompras.adicionarItem('Arroz', 20.00, 2);

            expect(resultado);
        });

    });

    describe('removerItem()', () => {

        test('Deve falhar quando não exitir o item no carrinho', () => {
            expect(() => carrinhoCompras.removerItem('arroz')).toThrow(/^Item não encontrado$/);
        });

        test('Deve remover um item quando existir', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);

            const resultado = carrinhoCompras.removerItem('Arroz');

            expect(resultado);
        });
    });

    describe('calcularTotal()', () => {

        test('Deve calcular o valor total dos itens no carrinho', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);
            carrinhoCompras.adicionarItem('Feijão', 10.00, 1);

            expect(() => carrinhoCompras.calcularTotal().toBe(30));
        });
    });

    describe('limparCarrinho()', () => {

        test('Deve limpar o carrinho', () => {
            carrinhoCompras.adicionarItem('Arroz', 20.00, 2);
            carrinhoCompras.adicionarItem('Feijão', 10.00, 1);

            expect(() => carrinhoCompras.limparCarrinho());
        });
    });

});