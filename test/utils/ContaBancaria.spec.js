import { ContaBancaria } from "../../src/utils/ContaBancaria";

describe('ContaBancaria.js', () => {

    let contaBancaria;
    beforeEach(() => {
        contaBancaria = new ContaBancaria('Luan');
    });

    describe('construtor()', () => {

        test('Deve falhar quando o parametro titular for vazio', () => {
            expect(() => new ContaBancaria()).toThrow(/^Titular é obrigatório$/);
        });

        test('Deve contruir quando o parametro titular for diferente de vazio', () => {
            const resultado = new ContaBancaria('Luan');

            expect(resultado);
        });
    });

    describe('depositar()', () => {

        test('Deve falhar quando o parametro valor for menor ou igual a 0', () => {
            expect(() => contaBancaria.depositar(0)).toThrow(/^Valor inválido$/);
        });

        test('Deve depositar quando o parametro valor for maior que 0', () => {
            const resultado = contaBancaria.depositar(100);

            expect(resultado);
        });
    });

    describe('sacar()', () => {

        test('Deve falhar quando o parametro valor for menor ou igual a 0', () => {
            expect(() => contaBancaria.sacar(0)).toThrow(/^Valor inválido$/);
        });

        test('Deve falhar quando o parametro valor for maior que o saldo', () => {
            contaBancaria.depositar(90);
            expect(() => contaBancaria.sacar(100)).toThrow(/^Saldo insuficiente$/);
        });

        test('Deve sacar quando o parametro valor for maior que 0 e menor ou igual ao saldo', () => {
            contaBancaria.depositar(100);

            const resultado = contaBancaria.sacar(100);

            expect(resultado);
        });
    });

    describe('consultarSaldo()', () => {

        test('Deve consultar o saldo', () => {
            contaBancaria.depositar(100);

            const resultado = contaBancaria.consultarSaldo();
            
            expect(resultado).toBe(100);
        });
    });
});