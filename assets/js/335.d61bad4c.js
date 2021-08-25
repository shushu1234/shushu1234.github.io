(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{2392:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"中文题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文题目"}},[t._v("#")]),t._v(" 中文题目")]),t._v(" "),s("div",[s("p",[t._v("编写一个方法，找出两个数字"),s("code",[t._v("a")]),t._v("和"),s("code",[t._v("b")]),t._v("中最大的那一个。不得使用if-else或其他比较运算符。")]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("pre",[s("strong",[t._v("输入：")]),t._v(" a = 1, b = 2\n"),s("strong",[t._v("输出：")]),t._v(" 2\n")])]),t._v(" "),s("h2",{attrs:{id:"通过代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),s("RecoDemo",[s("template",{slot:"code-Java-1"},[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意要使用long，否则一个较大正数减一个较大负数，将会溢出")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于转换成了long，需要右移63位寻找符号位")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当相减后的结果x>0的话，那么 k=0，即a>b")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时计算公式为：   1*a - 0*b =a")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当相减后的结果x<0的话，那么 k=-1,即a<b")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时计算公式为：   0*a -(-1)*b = b")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])],2),t._v(" "),s("h2",{attrs:{id:"高赞题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),s("h3",{attrs:{id:"解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[t._v("#")]),t._v(" 解释")]),t._v(" "),s("blockquote",[s("p",[t._v("既然题目提到："),s("strong",[t._v("不得使用if-else或其他比较运算符")]),t._v("，那么我们也尽可能回避abs、max这些函数，因为其内部可能调用比较了运算符。")])]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("本质是"),s("strong",[t._v("平均值法")]),t._v("： "),s("code",[t._v("max(a, b) = ((a + b) + abs(a - b)) / 2")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"绝对值的位运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绝对值的位运算"}},[t._v("#")]),t._v(" 绝对值的位运算")]),t._v(" "),s("blockquote",[s("p",[t._v("为了回避"),s("code",[t._v("abs")]),t._v("，利用位运算实现绝对值功能。\n以"),s("code",[t._v("int8_t")]),t._v("为例：分析运算："),s("code",[t._v("(var ^ (var >> 7)) - (var >> 7)")])])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("var >= 0:")]),t._v(" "),s("code",[t._v("var >> 7 => 0x00")]),t._v("，即："),s("code",[t._v("(var ^ 0x00) - 0x00")]),t._v("，异或结果为"),s("code",[t._v("var")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("var < 0:")]),t._v(" "),s("code",[t._v("var >> 7 => 0xFF")]),t._v("，即："),s("code",[t._v("(var ^ 0xFF) - 0xFF")]),t._v("，"),s("code",[t._v("var ^ 0xFF")]),t._v("是在对var的全部位取反，"),s("code",[t._v("-0xFF <=> +1")]),t._v(", 对"),s("code",[t._v("signed int")]),t._v("取反加一就是取其"),s("strong",[t._v("相反数")]),t._v("。")])])]),t._v(" "),s("p",[t._v("举个栗子🌰："),s("code",[t._v("var = -3 <=> 0xFD")]),t._v("，"),s("code",[t._v("(var ^ 0xFF) - 0xFF= 0x02 - 0xff= 0x03")])]),t._v(" "),s("blockquote",[s("p",[t._v("基于上述分析：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("绝对值位运算")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("int8_t")]),t._v(" "),s("td",[t._v("(var ^ (var >> 7)) - (var >> 7)")])]),t._v(" "),s("tr",[s("td",[t._v("int16_t")]),t._v(" "),s("td",[t._v("(var ^ (var >> 15)) - (var >> 15)")])]),t._v(" "),s("tr",[s("td",[t._v("int32_t")]),t._v(" "),s("td",[t._v("(var ^ (var >> 31)) - (var >> 31)")])]),t._v(" "),s("tr",[s("td",[t._v("int64_t")]),t._v(" "),s("td",[t._v("(var ^ (var >> 63)) - (var >> 63)")])])])])]),t._v(" "),s("p",[t._v("代码中"),s("code",[t._v("(_diff ^ (_diff >> 63)) - (_diff >> 63)")]),t._v("就是在求取"),s("code",[t._v("long (int64_t)")]),t._v("的绝对值。")]),t._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" _sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" _diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" _abs_diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _abs_diff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("标记状态")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("我的注释")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2021-07-19 21:37:42")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/submissions/detail/197535397/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("🚩")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("移位运算")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0 ms")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("100.0%")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("35.3 MB")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),s("h2",{attrs:{id:"统计信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("18076")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("24599")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("73.5%")])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);