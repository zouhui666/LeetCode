//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
var isPalingdrome = function(s) {
  if(s === '') return true;
  let reg = /[^A-Za-z0-9]/g;
  s = s.replace(reg, '').toLowerCase();
  return s == s.split('').reverse().join('')
}

//利用正则表达式将所有非字符和数字字符的去掉。 然后再比较。