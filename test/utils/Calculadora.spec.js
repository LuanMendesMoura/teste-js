// .spec.js
// .test.js
import { Calculadora } from '../../src/utils/Calculadora.js';

describe('Calculadora.js', () => {

    let calculadora;
    beforeEach(() => {
        calculadora = new Calculadora();
    })

    describe('somar()', () => {

        test('Deve falhar quando o parametro a invalido - String', () => {
            const a = 'batata';
            const b = 10;

            expect(() => calculadora.somar(a, b)).toThrow(TypeError);
            expect(() => calculadora.somar(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - NaN', () => {
            expect(() => calculadora.somar(Number('batata'), 10)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Array', () => {
            expect(() => calculadora.somar([1, 2, 3], 10)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Boolean', () => {
            expect(() => calculadora.somar(true, 10)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Null', () => {
            expect(() => calculadora.somar(null, 10)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - String', () => {
            const a = 10;
            const b = 'batata';

            expect(() => calculadora.somar(a, b)).toThrow(TypeError);
            expect(() => calculadora.somar(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - NaN', () => {
            expect(() => calculadora.somar(10, Number('batata'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Array', () => {
            expect(() => calculadora.somar(10, [1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Boolean', () => {
            expect(() => calculadora.somar(10, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Null', () => {
            expect(() => calculadora.somar(10, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve somar dois valores positivos', () => {
            const resultado = calculadora.somar(1, 2);

            expect(resultado).toBe(3);
        });

        test('Deve somar dois valores negativos', () => {
            const resultado = calculadora.somar(-10, -20);

            expect(resultado).toBe(-30);
        });
    });

    describe('subtrair()', () => { 

        test('Deve falhar quando o parametro a invalido - String', () => {
            const a = 'batata';
            const b = 10;

            expect(() => calculadora.subtrair(a, b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - NaN', () => {
            expect(() => calculadora.subtrair(Number('batata'), 10)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Array', () => {
            expect(() => calculadora.subtrair([1, 2, 3], 10)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Boolean', () => {
            expect(() => calculadora.subtrair(true, 10)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Null', () => {
            expect(() => calculadora.subtrair(null, 10)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - String', () => {
            const a = 10;
            const b = 'batata';

            expect(() => calculadora.subtrair(a, b)).toThrow(TypeError);
            expect(() => calculadora.subtrair(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - NaN', () => {
            expect(() => calculadora.subtrair(10, Number('batata'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Array', () => {
            expect(() => calculadora.subtrair(10, [1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Boolean', () => {
            expect(() => calculadora.subtrair(10, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Null', () => {
            expect(() => calculadora.subtrair(10, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve subtrair dois valores negativos', () => {
            const resultado = calculadora.subtrair(-10, -20);

            expect(resultado).toBe(10);
        });

        test('Deve subtrair dois valores positivos', () => {
            const resultado = calculadora.subtrair(2, 1);

            expect(resultado).toBe(1);
        });
    })

    describe('multiplicar()', () => { 

        test('Deve falhar quando o parametro a invalido - String', () => {
            const a = 'batata';
            const b = 10;

            expect(() => calculadora.multiplicar(a, b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - NaN', () => {
            expect(() => calculadora.multiplicar(Number('batata'), 10)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Array', () => {
            expect(() => calculadora.multiplicar([1, 2, 3], 10)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Boolean', () => {
            expect(() => calculadora.multiplicar(true, 10)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Null', () => {
            expect(() => calculadora.multiplicar(null, 10)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - String', () => {
            const a = 10;
            const b = 'batata';

            expect(() => calculadora.multiplicar(a, b)).toThrow(TypeError);
            expect(() => calculadora.multiplicar(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - NaN', () => {
            expect(() => calculadora.multiplicar(10, Number('batata'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Array', () => {
            expect(() => calculadora.multiplicar(10, [1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Boolean', () => {
            expect(() => calculadora.multiplicar(10, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Null', () => {
            expect(() => calculadora.multiplicar(10, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve multiplicar dois valores negativos', () => {
            const resultado = calculadora.multiplicar(-10, -20);

            expect(resultado).toBe(200);
        });

        test('Deve multiplicar dois valores positivos', () => {
            const resultado = calculadora.multiplicar(2, 1);

            expect(resultado).toBe(2);
        });
    })

    describe('dividir()', () => { 

        test('Deve falhar quando o parametro a invalido - String', () => {
            const a = 'batata';
            const b = 10;

            expect(() => calculadora.dividir(a, b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - NaN', () => {
            expect(() => calculadora.dividir(Number('batata'), 10)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Array', () => {
            expect(() => calculadora.dividir([1, 2, 3], 10)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Boolean', () => {
            expect(() => calculadora.dividir(true, 10)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro a invalido - Null', () => {
            expect(() => calculadora.dividir(null, 10)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - String', () => {
            const a = 10;
            const b = 'batata';

            expect(() => calculadora.dividir(a, b)).toThrow(TypeError);
            expect(() => calculadora.dividir(a, b)).toThrow(/^O valor "batata" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - NaN', () => {
            expect(() => calculadora.dividir(10, Number('batata'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Array', () => {
            expect(() => calculadora.dividir(10, [1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Boolean', () => {
            expect(() => calculadora.dividir(10, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b invalido - Null', () => {
            expect(() => calculadora.dividir(10, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro b for 0', () => {
            expect(() => calculadora.dividir(10, 0)).toThrow(/^Divisão por zero não é permitida$/);
        });

        test('Deve dividir dois valores negativos', () => {
            const resultado = calculadora.dividir(-10, -20);

            expect(resultado).toBe(0.5);
        });

        test('Deve dividir dois valores positivos', () => {
            const resultado = calculadora.dividir(2, 1);

            expect(resultado).toBe(2);
        });
    })

    describe('jurosSimples()', () => {

        test('Deve falhar quando o parametro capital invalido - String', () => {
            const capital = 'dinheiro';
            const taxa = 0.5;
            const tempo = 1;

            expect(() => calculadora.jurosSimples(capital, taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital, taxa, tempo)).toThrow(/^O valor "dinheiro" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - NaN', () => {
            expect(() => calculadora.jurosSimples(10, Number('batata'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - Array', () => {
            expect(() => calculadora.jurosSimples([1, 2, 3], 0.5, 1)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - Boolean', () => {
            expect(() => calculadora.jurosSimples(true, 0.5, 1)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - Null', () => {
            expect(() => calculadora.jurosSimples(null, 0.5, 1)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - String', () => {
            const capital = 1000;
            const taxa = 'taxa';
            const tempo = 1;

            expect(() => calculadora.jurosSimples(capital, taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital, taxa, tempo)).toThrow(/^O valor "taxa" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - NaN', () => {
            expect(() => calculadora.jurosSimples(1000, Number('taxa'), 1)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - Array', () => {
            expect(() => calculadora.jurosSimples(1000, [1, 2, 3], 1)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - Boolean', () => {
            expect(() => calculadora.jurosSimples(1000, true, 1)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - Null', () => {
            expect(() => calculadora.jurosSimples(1000, null, 1)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - String', () => {
            const capital = 1000;
            const taxa = 0.5;
            const tempo = 'horas';

            expect(() => calculadora.jurosSimples(capital, taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosSimples(capital, taxa, tempo)).toThrow(/^O valor "horas" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - NaN', () => {
            expect(() => calculadora.jurosSimples(1000, 0.5, Number('horas'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - Array', () => {
            expect(() => calculadora.jurosSimples(1000, 0.5, [1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - Boolean', () => {
            expect(() => calculadora.jurosSimples(1000, 0.5, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - Null', () => {
            expect(() => calculadora.jurosSimples(1000, 0.5, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve retornar o montante passando valores positivos', () => {
            const resultado = calculadora.jurosSimples(1000, 0.5, 1)

            expect(resultado).toBe(500); 
        })
    })

    describe('jurosCompostos()', () => {

        test('Deve falhar quando o parametro capital invalido - String', () => {
            const capital = 'dinheiro';
            const taxa = 0.5;
            const tempo = 1;

            expect(() => calculadora.jurosCompostos(capital, taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosCompostos(capital, taxa, tempo)).toThrow(/^O valor "dinheiro" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - NaN', () => {
            expect(() => calculadora.jurosCompostos(Number('batata'), 0.5, 1)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - Array', () => {
            expect(() => calculadora.jurosCompostos([1, 2, 3], 0.5, 1)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - Boolean', () => {
            expect(() => calculadora.jurosCompostos(true, 0.5, 1)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro capital invalido - Null', () => {
            expect(() => calculadora.jurosCompostos(null, 0.5, 1)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - String', () => {
            const capital = 1000;
            const taxa = 'taxa';
            const tempo = 1;

            expect(() => calculadora.jurosCompostos(capital, taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosCompostos(capital, taxa, tempo)).toThrow(/^O valor "taxa" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - NaN', () => {
            expect(() => calculadora.jurosCompostos(1000, Number('taxa'), 1)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - Array', () => {
            expect(() => calculadora.jurosCompostos(1000, [1, 2, 3], 1)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - Boolean', () => {
            expect(() => calculadora.jurosCompostos(1000, true, 1)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro taxa invalido - Null', () => {
            expect(() => calculadora.jurosCompostos(1000, null, 1)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - String', () => {
            const capital = 1000;
            const taxa = 0.5;
            const tempo = 'horas';

            expect(() => calculadora.jurosCompostos(capital, taxa, tempo)).toThrow(TypeError);
            expect(() => calculadora.jurosCompostos(capital, taxa, tempo)).toThrow(/^O valor "horas" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - NaN', () => {
            expect(() => calculadora.jurosCompostos(1000, 0.5, Number('horas'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - Array', () => {
            expect(() => calculadora.jurosCompostos(1000, 0.5, [1, 2, 3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - Boolean', () => {
            expect(() => calculadora.jurosCompostos(1000, 0.5, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro tempo invalido - Null', () => {
            expect(() => calculadora.jurosCompostos(1000, 0.5, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve retornar o montante passando valores positivos', () => {
            const resultado = calculadora.jurosCompostos(1000, 0.5, 1)

            expect(resultado).toBe(1500); 
        })
    })

    describe('descontoPercentual()', () => {

        test('Deve falhar quando o parametro valor invalido - String', () => {
            const valor = 'dinheiro';
            const percentual = 0.5;

            expect(() => calculadora.descontoPercentual(valor, percentual)).toThrow(TypeError);
            expect(() => calculadora.descontoPercentual(valor, percentual)).toThrow(/^O valor "dinheiro" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - NaN', () => {
            expect(() => calculadora.descontoPercentual(Number('dinheiro'), 0.5)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - Array', () => {
            expect(() => calculadora.descontoPercentual([1, 2, 3], 0.5)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - Boolean', () => {
            expect(() => calculadora.descontoPercentual(true, 0.5)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - Null', () => {
            expect(() => calculadora.descontoPercentual(null, 0.5)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual invalido - String', () => {
            const valor = 100;
            const percentual = 'salve';

            expect(() => calculadora.descontoPercentual(valor, percentual)).toThrow(TypeError);
            expect(() => calculadora.descontoPercentual(valor, percentual)).toThrow(/^O valor "salve" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual invalido - NaN', () => {
            expect(() => calculadora.descontoPercentual(100, Number('salve'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual invalido - Array', () => {
            expect(() => calculadora.descontoPercentual(100, [1,2,3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual invalido - Boolean', () => {
            expect(() => calculadora.descontoPercentual(100, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual invalido - Null', () => {
            expect(() => calculadora.descontoPercentual(100, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual invalido - Null', () => {
            expect(() => calculadora.descontoPercentual(100, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro percentual não estiver entre 0 e 1', () => {
            expect(() => calculadora.descontoPercentual(100, -1)).toThrow(/^Percentual deve estar entre 0 e 1$/);
        });

        test('Deve descontar quando os valores forem positivos e o percentual for entre 0 e 1', () => {
            const resultado = calculadora.descontoPercentual(100, 1)

            expect(resultado).toBe(0)
        })
    })

    describe('descontoFixo()', () => {

        test('Deve falhar quando o parametro valor invalido - String', () => {
            const valor = 'dinheiro';
            const desconto = 50;

            expect(() => calculadora.descontoFixo(valor, desconto)).toThrow(TypeError);
            expect(() => calculadora.descontoFixo(valor, desconto)).toThrow(/^O valor "dinheiro" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - NaN', () => {
            expect(() => calculadora.descontoFixo(Number('dinheiro'), 50)).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - Array', () => {
            expect(() => calculadora.descontoFixo([1, 2, 3], 50)).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - Boolean', () => {
            expect(() => calculadora.descontoFixo(true, 50)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro valor invalido - Null', () => {
            expect(() => calculadora.descontoFixo(null, 50)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto invalido - String', () => {
            const valor = 100;
            const desconto = 'desconto';

            expect(() => calculadora.descontoFixo(valor, desconto)).toThrow(TypeError);
            expect(() => calculadora.descontoFixo(valor, desconto)).toThrow(/^O valor "desconto" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto invalido - NaN', () => {
            expect(() => calculadora.descontoFixo(100, Number('desconto'))).toThrow(/^O valor "NaN" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto invalido - Array', () => {
            expect(() => calculadora.descontoFixo(100, [1,2,3])).toThrow(/^O valor "1,2,3" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto invalido - Boolean', () => {
            expect(() => calculadora.descontoFixo(100, true)).toThrow(/^O valor "true" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto invalido - Null', () => {
            expect(() => calculadora.descontoFixo(100, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto invalido - Null', () => {
            expect(() => calculadora.descontoFixo(100, null)).toThrow(/^O valor "null" não é um número válido$/);
        });

        test('Deve falhar quando o parametro desconto for maior que o valor', () => {
            expect(() => calculadora.descontoFixo(100, 101)).toThrow(/^Desconto maior que o valor$/);
        });

        test('Deve descontar quando os valores forem positivos e o desconto menor que o valor', () => {
            const resultado = calculadora.descontoFixo(100, 50)

            expect(resultado).toBe(50)
        })
    })
});

