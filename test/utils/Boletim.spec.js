import { Boletim } from "../../src/utils/Boletim";

describe('Boletim.js', () => {

    let boletim;
    beforeEach(() => {
        boletim = new Boletim();
    })

    describe('adicionarNota()', () => {

        test('Deve falhar quando o parametro nota invalido - String', () => {
            const nota = 'batata';

            expect(() => boletim.adicionarNota(nota)).toThrow(TypeError);
            expect(() => boletim.adicionarNota(nota)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro nota invalido - NaN', () => {
            expect(() => boletim.adicionarNota(Number('batata'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro nota invalido - Array', () => {
            expect(() => boletim.adicionarNota([1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro nota invalido - Boolean', () => {
            expect(() => boletim.adicionarNota(true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro nota invalido - Null', () => {
            expect(() => boletim.adicionarNota(null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro nota não estiver entre 0 e 10', () => {
            expect(() => boletim.adicionarNota(11)).toThrow(/^Nota deve estar entre 0 e 10$/);
        });

        test('Deve adicionar nota quando o parametro nota estiver entre 0 e 10', () => {
            const resultado = boletim.adicionarNota(9);

            expect(resultado).toBe(9)
        });
    })

    describe('calcularMedia()', () => {

        test('Deve falhar quando a nota for 0', () => {
            const resultado = boletim.calcularMedia()

            expect(resultado).toBe(0)
        });

        test('Deve calcular a media', () => {
            boletim.adicionarNota(9);
            boletim.adicionarNota(9);

            const resultado = boletim.calcularMedia()

            expect(resultado).toBe(9)
        })
    })

    describe('verificarAprovacao', () => {

        test('Deve falhar quando a nota é igual ou maior que 7', () => {
            const resultado = boletim.verificarAprovacao();

            expect(resultado).toBe(false)
        });

        test('Deve verificar a aprovacao', () => {
            boletim.adicionarNota(9);
            boletim.adicionarNota(9);

            const resultado = boletim.verificarAprovacao()

            expect(resultado).toBe(true)
        })
    })

}) 