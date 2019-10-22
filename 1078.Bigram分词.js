var findOcurrences = function(text, first, second) {
    text = text.split('');
    var ary = [];
    var l = text.length;
    for (let i = 2; i < l; i++) {
        if (text[i - 2] == first && text[i - 1] == second) {
            ary.push(text[i]);
        }
    }
    return ary;
}