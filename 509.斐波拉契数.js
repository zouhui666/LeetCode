var fib = function(N) {
    var cur = 0;
    var next = 1;
    while (N-- > 0) {
        next = cur + next;
        cur = next - cur;
    }
    return cur;
}