import { somar, subtrair } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        //AAA
        //Arrange (Preparar)
        const a = 5;
        const b = 7;

        //Act (Executar)
        const resultado = somar(a, b);

        //Assert (Verificar)
        expect(resultado).toBe(12);
    })
})

describe("Calculadora", () => {
    test("Deve subtrair dois números corretamente", () => {
        //AAA
        //Arrange (Preparar)
        const a = 5;
        const b = 7;

        //Act (Executar)
        const resultado = subtrair(a, b);

        //Assert (Verificar)
        expect(resultado).toBe(-2);
    })
})