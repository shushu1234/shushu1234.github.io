(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{445:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"英文原文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#英文原文"}},[t._v("#")]),t._v(" 英文原文")]),t._v(" "),a("div",[a("p",[t._v("Given a linked list, swap every two adjacent nodes and return its head.")]),t._v(" "),a("p",[t._v("You may "),a("strong",[t._v("not")]),t._v(" modify the values in the list's nodes, only nodes itself may be changed.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("pre",[t._v("Given "),a("code",[t._v("1->2->3->4")]),t._v(", you should return the list as "),a("code",[t._v("2->1->4->3")]),t._v(".\n")])]),t._v(" "),a("h2",{attrs:{id:"中文翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文翻译"}},[t._v("#")]),t._v(" 中文翻译")]),t._v(" "),a("div",[a("p",[t._v("给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。")]),t._v(" "),a("p",[a("strong",[t._v("你不能只是单纯的改变节点内部的值")]),t._v("，而是需要实际的进行节点交换。")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("strong",[t._v("示例:")])]),t._v(" "),a("pre",[t._v("给定 "),a("code",[t._v("1->2->3->4")]),t._v(", 你应该返回 "),a("code",[t._v("2->1->4->3")]),t._v(".\n")])]),t._v(" "),a("h2",{attrs:{id:"通过代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),a("RecoDemo",[a("template",{slot:"code-Java-1"},[a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" dummyHead"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            dummyHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dummyHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" node1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" node2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("node1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("node2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                node2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("node1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                node1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("node2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                ç°å¨node1æåçæ¯ååçé£ä¸ªèç¹")]),t._v("\n                p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("node1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummyHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])])])],2),t._v(" "),a("h2",{attrs:{id:"统计信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("59956")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("94531")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("63.4%")])])])]),t._v(" "),a("h2",{attrs:{id:"提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2018-07-15 22:07:05")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/4215557/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4 ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),a("h2",{attrs:{id:"相似题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相似题目"}},[t._v("#")]),t._v(" 相似题目")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("题目")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("难度")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-nodes-in-k-group/",target:"_blank",rel:"noopener noreferrer"}},[t._v("K 个一组翻转链表"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("困难")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);