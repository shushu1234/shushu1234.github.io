(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1133:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"英文原文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#英文原文"}},[t._v("#")]),t._v(" 英文原文")]),t._v(" "),s("div",[s("p",[t._v("Given an array of integers that is already "),s("strong",[s("em",[t._v("sorted in ascending order")])]),t._v(", find two numbers such that they add up to a specific target number.")]),t._v(" "),s("p",[t._v("The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[t._v("Your returned answers (both index1 and index2) are not zero-based.")]),t._v(" "),s("li",[t._v("You may assume that each input would have "),s("em",[t._v("exactly")]),t._v(" one solution and you may not use the "),s("em",[t._v("same")]),t._v(" element twice.")])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("pre",[s("strong",[t._v("Input:")]),t._v(" numbers = [2,7,11,15], target = 9\n"),s("strong",[t._v("Output:")]),t._v(" [1,2]\n"),s("strong",[t._v("Explanation:")]),t._v(" The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.")])]),t._v(" "),s("h2",{attrs:{id:"中文翻译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文翻译"}},[t._v("#")]),t._v(" 中文翻译")]),t._v(" "),s("div",[s("p",[t._v("给定一个已按照"),s("strong",[s("em",[t._v("升序排列")]),t._v(" ")]),t._v("的有序数组，找到两个数使得它们相加之和等于目标数。")]),t._v(" "),s("p",[t._v("函数应该返回这两个下标值"),s("em"),t._v("index1 和 index2，其中 index1 必须小于 index2"),s("em",[t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("说明:")])]),t._v(" "),s("ul",[s("li",[t._v("返回的下标值（index1 和 index2）不是从零开始的。")]),t._v(" "),s("li",[t._v("你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。")])]),t._v(" "),s("p",[s("strong",[t._v("示例:")])]),t._v(" "),s("pre",[s("strong",[t._v("输入:")]),t._v(" numbers = [2, 7, 11, 15], target = 9\n"),s("strong",[t._v("输出:")]),t._v(" [1,2]\n"),s("strong",[t._v("解释:")]),t._v(" 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。")])]),t._v(" "),s("h2",{attrs:{id:"通过代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),s("RecoDemo",[s("template",{slot:"code-Java-1"},[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("twoSum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("numbers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" hi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    hi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])]),t._v(" "),s("template",{slot:"code-Java-2"},[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("twoSum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("numbers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" hi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    hi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("lo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])],2),t._v(" "),s("h2",{attrs:{id:"官方题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方题解"}},[t._v("#")]),t._v(" 官方题解")]),t._v(" "),s("h4",{attrs:{id:"方法-1：双指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法-1：双指针"}},[t._v("#")]),t._v(" 方法 1：双指针")]),t._v(" "),s("p",[s("strong",[t._v("算法")])]),t._v(" "),s("p",[t._v("我们可以使用 "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两数之和"),s("OutboundLink")],1),t._v(" 的解法在 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("msup",[s("mi",[t._v("n")]),s("mn",[t._v("2")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n^2)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 时间 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 空间暴力解决，也可以用哈希表在 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 时间和 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 空间内解决。然而，这两种方法都没有用到输入数组已经排序的性质，我们可以做得更好。")]),t._v(" "),s("p",[t._v("我们使用两个指针，初始分别位于第一个元素和最后一个元素位置，比较这两个元素之和与目标值的大小。如果和等于目标值，我们发现了这个唯一解。如果比目标值小，我们将较小元素指针增加一。如果比目标值大，我们将较大指针减小一。移动指针后重复上述比较知道找到答案。")]),t._v(" "),s("p",[t._v("假设 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("a")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("b")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("c")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("d")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("e")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("f")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mo",[t._v("…")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[... , a, b, c, ... , d, e, f, …]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("a")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("c")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("e")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"minner"},[t._v("…")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 是已经升序排列的输入数组，并且元素 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("b")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b, e")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("e")])])])]),t._v(" 是唯一解。因为我们从左到右移动较小指针，从右到左移动较大指针，总有某个时刻存在一个指针移动到 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("b")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")])])])]),t._v(" 或 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("e")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("e")])])])]),t._v(" 的位置。不妨假设小指针县移动到了元素 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("b")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")])])])]),t._v(" ，这是两个元素的和一定比目标值大，根据我们的算法，我们会向左移动较大指针直至获得结果。")]),t._v(" "),s("div",{staticClass:"language-C++ [] line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        int low = 0, high = numbers.size() - 1;\n        while (low < high) {\n            int sum = numbers[low] + numbers[high];\n            if (sum == target)\n                return {low + 1, high + 1};\n            else if (sum < target)\n                ++low;\n            else\n                --high;\n        }\n        return {-1, -1};\n    }\n};\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("是否需要考虑 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("b")]),s("mi",[t._v("e")]),s("mi",[t._v("r")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("l")]),s("mi",[t._v("o")]),s("mi",[t._v("w")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("+")]),s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mi",[t._v("b")]),s("mi",[t._v("e")]),s("mi",[t._v("r")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("h")]),s("mi",[t._v("i")]),s("mi",[t._v("g")]),s("mi",[t._v("h")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("numbers[low] + numbers[high]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("b")]),s("span",{staticClass:"mord mathdefault"},[t._v("e")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathdefault"},[t._v("o")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("b")]),s("span",{staticClass:"mord mathdefault"},[t._v("e")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),s("span",{staticClass:"mord mathdefault"},[t._v("s")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("h")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),s("span",{staticClass:"mord mathdefault"},[t._v("h")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 溢出呢？答案是不需要。因为即使两个元素之和溢出了，因为只存在唯一解，所以一定会先访问到答案。")]),t._v(" "),s("p",[s("strong",[t._v("复杂度分析")])]),t._v(" "),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。每个元素最多被访问一次，共有 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")])])])]),t._v(" 个元素。")]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。只是用了两个指针。")])]),t._v(" "),s("h2",{attrs:{id:"提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2018-05-16 18:23:14")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/2331800/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("4 ms")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("27.53%")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("java")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2018-05-16 18:21:28")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/2331772/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("3 ms")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("36.0%")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),s("h2",{attrs:{id:"统计信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("59245")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("114455")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("51.8%")])])])]),t._v(" "),s("h2",{attrs:{id:"相似题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相似题目"}},[t._v("#")]),t._v(" 相似题目")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("题目")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("难度")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两数之和"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两数之和 IV - 输入 BST"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum-less-than-k/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小于 K 的两数之和"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);