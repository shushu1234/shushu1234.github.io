(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1199:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"中文题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中文题目"}},[t._v("#")]),t._v(" 中文题目")]),t._v(" "),n("div",[n("p",[t._v("给定一个Excel表格中的列名称，返回其相应的列序号。")]),t._v(" "),n("p",[t._v("例如，")]),t._v(" "),n("pre",[t._v("    A -> 1\n    B -> 2\n    C -> 3\n    ...\n    Z -> 26\n    AA -> 27\n    AB -> 28 \n    ...\n")]),t._v(" "),n("p",[n("strong",[t._v("示例 1:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入:")]),t._v(' "A"\n'),n("strong",[t._v("输出:")]),t._v(" 1\n")]),t._v(" "),n("p",[n("strong",[t._v("示例 2:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入: ")]),t._v('"AB"\n'),n("strong",[t._v("输出:")]),t._v(" 28\n")]),t._v(" "),n("p",[n("strong",[t._v("示例 3:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入: ")]),t._v('"ZY"\n'),n("strong",[t._v("输出:")]),t._v(" 701")]),t._v(" "),n("p",[n("strong",[t._v("致谢：")]),n("br"),t._v("\n特别感谢 "),n("a",{attrs:{href:"http://leetcode.com/discuss/user/ts"}},[t._v("@ts")]),t._v(" 添加此问题并创建所有测试用例。")])]),t._v(" "),n("h2",{attrs:{id:"通过代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),n("RecoDemo",[n("template",{slot:"code-Java-1"},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("titleToNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" columnTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("columnTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            tmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("columnTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            res"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("tmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])])],2),t._v(" "),n("h2",{attrs:{id:"高赞题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),n("h3",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),n("ul",[n("li",[t._v("标签：字符串遍历，进制转换")]),t._v(" "),n("li",[t._v("初始化结果 "),n("code",[t._v("ans = 0")]),t._v("，遍历时将每个字母与 A 做减法，因为 A 表示 1，所以减法后需要每个数加 1，计算其代表的数值 "),n("code",[t._v("num = 字母 - ‘A’ + 1")])]),t._v(" "),n("li",[t._v("因为有 26 个字母，所以相当于 26 进制，每 26 个数则向前进一位")]),t._v(" "),n("li",[t._v("所以每遍历一位则"),n("code",[t._v("ans = ans * 26 + num")])]),t._v(" "),n("li",[t._v("以 ZY 为例，Z 的值为 26，Y 的值为 25，则结果为 "),n("code",[t._v("26 * 26 + 25=701")])]),t._v(" "),n("li",[t._v("时间复杂度："),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("n")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault"},[t._v("n")]),n("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),n("h3",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),n("div",{staticClass:"language-Java [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("titleToNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"画解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画解"}},[t._v("#")]),t._v(" 画解")]),t._v(" "),n("p",[t._v("<"),n("img",{attrs:{src:a(993),alt:"frame_00001.png"}}),t._v(","),n("img",{attrs:{src:a(994),alt:"frame_00002.png"}}),t._v(","),n("img",{attrs:{src:a(995),alt:"frame_00003.png"}}),t._v(","),n("img",{attrs:{src:a(996),alt:"frame_00004.png"}}),t._v(">")]),t._v(" "),n("p",[t._v("想看大鹏画解更多高频面试题，欢迎阅读大鹏的 LeetBook："),n("a",{attrs:{href:"https://leetcode-cn.com/leetbook/detail/illustrate-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《画解剑指 Offer 》"),n("OutboundLink")],1),t._v("，O(∩_∩)O")]),t._v(" "),n("h2",{attrs:{id:"提交历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-03-30 17:48:48")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/161798256/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("1 ms")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("100.0%")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("38.3 MB")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),n("h2",{attrs:{id:"统计信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("66576")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("96527")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("69.0%")])])])]),t._v(" "),n("h2",{attrs:{id:"相似题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相似题目"}},[t._v("#")]),t._v(" 相似题目")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("题目")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("难度")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com/problems/excel-sheet-column-title/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Excel表列名称"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])])])])],1)}),[],!1,null,null,null);s.default=e.exports},993:function(t,s,a){t.exports=a.p+"assets/img/excel-sheet-column-number-0.6166cf6d.png"},994:function(t,s,a){t.exports=a.p+"assets/img/excel-sheet-column-number-1.7bcae54f.png"},995:function(t,s,a){t.exports=a.p+"assets/img/excel-sheet-column-number-2.4bd55274.png"},996:function(t,s,a){t.exports=a.p+"assets/img/excel-sheet-column-number-3.c9588c72.png"}}]);