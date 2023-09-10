import { gcd } from './gcd';

describe('gcd', () => {
    it('Пример 1', () => {
        expect(gcd(24, 36)).toBe(12);
    });

    it('Пример 2', () => {
        expect(gcd(17, 36)).toBe(1);
    });

    it('возвращает НОД двух чисел', () => {
        expect(gcd(125, 15)).toBe(5);
        expect(gcd(14326642, 244)).toBe(2);
    });

    it('возвращает 1, если одно из чисел простое', () => {
        expect(gcd(125, 17)).toBe(1);
    });

    it('возвращает первое число, если второе = 0', () => {
        expect(gcd(125, 0)).toBe(125);
        expect(gcd(0, 125)).toBe(125);
    });
});
