var intersection = function(ary1, ary2) {
    let set1 = new Set(ary1);
    let set2 = new Set(ary2);
    return Array.from(set1).filter(item => set2.has(item));
}