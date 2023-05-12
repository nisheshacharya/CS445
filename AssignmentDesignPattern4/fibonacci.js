const fibonacci = (function () {
    const cache = {};

    function memoFibonacci(n) {
        if (n <= 1) {
            return n;
        }

        if (cache[n]) {
            return cache[n];
        }

        const result = memoFibonacci(n - 1) + memoFibonacci(n - 2);
        cache[n] = result;

        return result;
    }

    return memoFibonacci;
})();


