import { somar } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {

        const a = 5;
        const b = 7;

        const resultado = somar(a, b);

        expect(resultado).toBe(12);
    })
})