//给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。
var findWords = function(words) {
  let regexp = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i;
  return words.filter(item => {
    return regexp.test(item)
  })
}
//利用正则表达式来进行匹配