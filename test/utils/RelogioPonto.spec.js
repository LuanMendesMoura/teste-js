import { RelogioPonto } from "../../src/utils/RelogioPonto";

describe('RelogioPonto.js', () => {

    let relogioPonto;
    beforeEach(() => {
        relogioPonto = new RelogioPonto();
    });

    describe('registrarEntrada()', () => {

        test('Deve falhar quando funcionarioId for vazio', () => {
            expect(() => relogioPonto.registrarEntrada(null, "19:00")).toThrow(/^Dados inválidos$/);
        });

        test('Deve falhar quando horaEntrada for vazio', () => {
            expect(() => relogioPonto.registrarEntrada(2, null)).toThrow(/^Dados inválidos$/);
        });

        test('Deve registrar funcionarioId e horaEntrada', () => {
            const resultado = relogioPonto.registrarEntrada(2, "19:00");
            
            expect(resultado);
        });

    });

    describe('registrarSaida()', () => {

        test('Deve falhar quando não existir o registro for vazio', () => {
            expect(() => relogioPonto.registrarSaida(1, "19:00")).toThrow(/^Nenhuma entrada ativa encontrada$/);
        });

        test('Deve registrar horario de saida', () => {
            relogioPonto.registrarEntrada(2, "09:00");

            const resultado = relogioPonto.registrarSaida(2, "19:00");

            expect(resultado);
        });
    });

    describe('calcularHorasTrabalhadas()', () => {

        test('Deve calcular as horas trabalhadas', () => {
            relogioPonto.registrarEntrada(2, "09:00");
            relogioPonto.registrarSaida(2, "19:00");

            const resultado = relogioPonto.calcularHorasTrabalhadas(2);

            expect(resultado).toBe(10);
        });
    });
});