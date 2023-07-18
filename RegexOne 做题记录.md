#做题记录

## RegexOne

题目链接： [RegexOne - Learn Regular Expressions - Lesson 1: An Introduction, and the ABCs](https://regexone.com/)

### Promblem 1：匹配十进制数字

题目描述: 匹配正负数,科学计数法等等,给出例子如下.

> 匹配: 3.1415926 ; -255.34 ; 128 ; 1.9e10 ; 123,340.00
>
> 跳过: 720p

Answer: `^-?(\d+,?)*(\.\d+(e?\d+)?)?$`

详细解释: 首先利用`-?`处理正负数,随后采用`(\d+,?)*`去处理类似`123,345,678`的情况,然后处理小数部分,注意小数部分可能整体不存在.对于小数部分可以采用`\.\d+`处理,但还要注意科学计数法的指数表示,这一部分也是可选的,采用`e?\d+`去处理.

### Promblem 2: 提取电话号码的地区码

题目描述:  提取电话号码的前三位地区码

Answer: `\d{3}`即可捕获地区码

### Promblem 3:  捕获电子邮件的名称

题目描述: 捕获`@`前的邮箱名称

Answer: `([\w\.]+)`

### Promblem 4: 匹配HTML标签

题目描述: 给出HTML语句,提取有效信息,包括标签名,类名,标签内的内容等等.

Answer: 捕获标签名`<(\w+)`;捕获类名`class=['"](\w+)['"]`;捕获标签内内容`>([\w\s]+)<`

### Promblem 5: 匹配特定后缀的文件名

题目描述: 提取后缀为`png/gif/jpg`的文件名称

Answer: `(\w+)\.(png|jpg|gif)$`

详细解释: `\w+`提取文件名,`(png|jpg|gif)$`限制以这三种后缀为结尾

### Promblem 6: 过滤行首行尾空格

题目背景:

> Occasionally, you'll find yourself with a log file that has **ill-formatted whitespace** where lines are indented too much or not enough. One way to fix this is to use an editor's search a replace and a regular expression to extract the content of the lines without the extra whitespace.

题目描述: 要求我们过滤掉数据开头和末尾多余的空格.

Answer: `\s*([\s\w\.]*)\s*`或`^\s*(.*)\s*$`

详细解释:使用`\s*`匹配数据开头和结尾的空格,括号内利用`\s`匹配数据内的空格,`\w`匹配数据数据内的字符.

### Promblem 7: 从日志文件提取报错信息

题目背景:

> In this example, we are going to use actual output from an Android adb debugging session. Your goal is to use any regular expression techniques that we've learned so far to **extract** the **filename**, **method name** and **line number** of line of the stack trace

题目描述: 要求我们从代码运行日志中,匹配报错信息,捕获报错**文件名,方法,行号**.

Answer: `(\w+)\(([\w\.]+):(\d+)\)`

详细解释: `(\w+)`捕获方法,`\(`和`\)`转义字符去匹配报错信息的左右括号,采用`[\w\.]`匹配包含`.`的文件名

### Promblem 8: 从URL中提取相关信息

题目背景:

> When working with files and resources over a network, you will often come across URIs and URLs which can be parsed and worked with directly. Most standard libraries will have classes to parse and construct these kind of identifiers, but if you need to match them in logs or a larger corpus of text, you can use regular expressions to pull out information from their structured format quite easily.

题目描述: 从URL中提取出scheme,host和port(可选).

拓展知识: URL具有形如 `https://regexone.com:80/page`的结构.其中`https`称为**scheme**,regexone.com称为**host**,``80`称为**port**.

Answer: `(\w+)://([\w\.-]+):?(\d+)?`

详细解释: 

+ **scheme**主要是`https`,`ftp`等,全为英文字符,采用`\w+`去捕获即可.
+ **host**包括英文字符,`.`和`-`,采用`[\w\.-]+`去捕获.
+ **port**包含`:`和一串数字,由于整体可选,采用`:(\d+)?`去捕获.

