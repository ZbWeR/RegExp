// 练手题收录

// 字节面试: 千位分隔符转换
// 将 1000000 转化为 1,000,000
let rawNum = "10000001"
let regex = /\B(?=(\d{3})+$)/g;
// 非单词边界, 正向肯定预查，表示匹配一个位置，该位置后面是连续的三位数字并且,以此结尾($)
console.log(rawNum.replace(regex, ','))


/*
题目：编写一个正则表达式，用于验证一个字符串是否是有效的电子邮件地址。

要求：
- 电子邮件地址的格式应为：username@domain.com
- username部分可以包含字母、数字、下划线和点号，但必须以字母或数字开头，长度至少为1。
- domain部分可以包含字母、数字、连字符和点号，但必须以字母或数字结尾，且至少包含一个点号。
- 整个电子邮件地址的总长度不超过256个字符。

示例：
- 有效的电子邮件地址：example123@example.com
- 无效的电子邮件地址：@example.com, example@example, example@com

提示：可以使用正则表达式元字符（如^、$、\w、\d、\.-等）和量词（如*、+、{n}等）来编写匹配规则。
*/
let emailReg = /^[a-zA-Z0-9]+[\w.]*@[a-zA-Z0-9.-]*\.[a-zA-Z0-9]+$/
let emailStr = "example@com"
console.log(emailReg.test(emailStr));