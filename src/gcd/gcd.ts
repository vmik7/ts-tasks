export function gcd(a: number, b: number): number {
    let first = a;
    let second = b;

    while (second !== 0) {
        const mod = first % second;

        first = second;
        second = mod;
    }
    return first;
}
