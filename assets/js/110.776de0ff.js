(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{341:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"英文原文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#英文原文"}},[t._v("#")]),t._v(" 英文原文")]),t._v(" "),s("div",[s("p",[t._v("Reverse a singly linked list.")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("pre",[s("strong",[t._v("Input:")]),t._v(" 1->2->3->4->5->NULL\n"),s("strong",[t._v("Output:")]),t._v(" 5->4->3->2->1->NULL\n")]),t._v(" "),s("p",[s("b",[t._v("Follow up:")])]),t._v(" "),s("p",[t._v("A linked list can be reversed either iteratively or recursively. Could you implement both?")])]),t._v(" "),s("h2",{attrs:{id:"中文翻译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文翻译"}},[t._v("#")]),t._v(" 中文翻译")]),t._v(" "),s("div",[s("p",[t._v("反转一个单链表。")]),t._v(" "),s("p",[s("strong",[t._v("示例:")])]),t._v(" "),s("pre",[s("strong",[t._v("输入:")]),t._v(" 1->2->3->4->5->NULL\n"),s("strong",[t._v("输出:")]),t._v(" 5->4->3->2->1->NULL")]),t._v(" "),s("p",[s("strong",[t._v("进阶:")]),s("br"),t._v("\n你可以迭代或递归地反转链表。你能否用两种方法解决这道题？")])]),t._v(" "),s("h2",{attrs:{id:"通过代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),s("RecoDemo",[s("template",{slot:"code-Java-1"},[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                pre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                cur"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])])])],2),t._v(" "),s("h2",{attrs:{id:"统计信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("136004")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("205836")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("66.1%")])])])]),t._v(" "),s("h2",{attrs:{id:"提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2018-07-01 16:24:30")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/3657272/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0 ms")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),s("h2",{attrs:{id:"相似题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相似题目"}},[t._v("#")]),t._v(" 相似题目")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("题目")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("难度")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("反转链表 II"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("中等")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-upside-down/",target:"_blank",rel:"noopener noreferrer"}},[t._v("上下翻转二叉树"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("中等")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/palindrome-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("回文链表"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);