(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1706:function(t,a,s){t.exports=s.p+"assets/img/shan-chu-lian-biao-de-jie-dian-lcof-0.4fc55983.png"},1707:function(t,a,s){t.exports=s.p+"assets/img/shan-chu-lian-biao-de-jie-dian-lcof-1.18fca42c.png"},1708:function(t,a,s){t.exports=s.p+"assets/img/shan-chu-lian-biao-de-jie-dian-lcof-2.082b9033.png"},1709:function(t,a,s){t.exports=s.p+"assets/img/shan-chu-lian-biao-de-jie-dian-lcof-3.f24ca26d.png"},1710:function(t,a,s){t.exports=s.p+"assets/img/shan-chu-lian-biao-de-jie-dian-lcof-4.a9e9f9df.png"},1711:function(t,a,s){t.exports=s.p+"assets/img/shan-chu-lian-biao-de-jie-dian-lcof-5.58043cd9.png"},2429:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"中文题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中文题目"}},[t._v("#")]),t._v(" 中文题目")]),t._v(" "),n("div",[n("p",[t._v("给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。")]),t._v(" "),n("p",[t._v("返回删除后的链表的头节点。")]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v("此题对比原题有改动")]),t._v(" "),n("p",[n("strong",[t._v("示例 1:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入:")]),t._v(" head = [4,5,1,9], val = 5\n"),n("strong",[t._v("输出:")]),t._v(" [4,1,9]\n"),n("strong",[t._v("解释: ")]),t._v("给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.\n")]),t._v(" "),n("p",[n("strong",[t._v("示例 2:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入:")]),t._v(" head = [4,5,1,9], val = 1\n"),n("strong",[t._v("输出:")]),t._v(" [4,5,9]\n"),n("strong",[t._v("解释: ")]),t._v("给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.\n")]),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("p",[n("strong",[t._v("说明：")])]),t._v(" "),n("ul",[n("li",[t._v("题目保证链表中节点的值互不相同")]),t._v(" "),n("li",[t._v("若使用 C 或 C++ 语言，你不需要 "),n("code",[t._v("free")]),t._v(" 或 "),n("code",[t._v("delete")]),t._v(" 被删除的节点")])])]),t._v(" "),n("h2",{attrs:{id:"通过代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),n("RecoDemo",[n("template",{slot:"code-Java-1"},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" tempHead "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            tempHead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tempHead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                head "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tempHead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br")])])])],2),t._v(" "),n("h2",{attrs:{id:"高赞题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),n("h4",{attrs:{id:"解题思路："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路："}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),n("p",[t._v("本题删除值为 "),n("code",[t._v("val")]),t._v(" 的节点分需为两步：定位节点、修改引用。")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("定位节点：")]),t._v(" 遍历链表，直到 "),n("code",[t._v("head.val == val")]),t._v(" 时跳出，即可定位目标节点。")]),t._v(" "),n("li",[n("strong",[t._v("修改引用：")]),t._v(" 设节点 "),n("code",[t._v("cur")]),t._v(" 的前驱节点为 "),n("code",[t._v("pre")]),t._v(" ，后继节点为 "),n("code",[t._v("cur.next")]),t._v(" ；则执行 "),n("code",[t._v("pre.next = cur.next")]),t._v(" ，即可实现删除 "),n("code",[t._v("cur")]),t._v(" 节点。")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(1706),alt:"Picture1.png"}}),t._v("{:width=450}")]),t._v(" "),n("h5",{attrs:{id:"算法流程："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法流程："}},[t._v("#")]),t._v(" 算法流程：")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("特例处理：")]),t._v(" 当应删除头节点 "),n("code",[t._v("head")]),t._v(" 时，直接返回 "),n("code",[t._v("head.next")]),t._v(" 即可。")]),t._v(" "),n("li",[n("strong",[t._v("初始化：")]),t._v(" "),n("code",[t._v("pre = head")]),t._v(" , "),n("code",[t._v("cur = head.next")]),t._v(" 。")]),t._v(" "),n("li",[n("strong",[t._v("定位节点：")]),t._v(" 当 "),n("code",[t._v("cur")]),t._v(" 为空 "),n("strong",[t._v("或")]),t._v(" "),n("code",[t._v("cur")]),t._v(" 节点值等于 "),n("code",[t._v("val")]),t._v(" 时跳出。\n"),n("ol",[n("li",[t._v("保存当前节点索引，即 "),n("code",[t._v("pre = cur")]),t._v(" 。")]),t._v(" "),n("li",[t._v("遍历下一节点，即 "),n("code",[t._v("cur = cur.next")]),t._v(" 。")])])]),t._v(" "),n("li",[n("strong",[t._v("删除节点：")]),t._v(" 若 "),n("code",[t._v("cur")]),t._v(" 指向某节点，则执行 "),n("code",[t._v("pre.next = cur.next")]),t._v(" ；若 "),n("code",[t._v("cur")]),t._v(" 指向 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("n")]),n("mi",[t._v("u")]),n("mi",[t._v("l")]),n("mi",[t._v("l")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("null")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("n")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v(" ，代表链表中不包含值为 "),n("code",[t._v("val")]),t._v(" 的节点。")]),t._v(" "),n("li",[n("strong",[t._v("返回值：")]),t._v(" 返回链表头部节点 "),n("code",[t._v("head")]),t._v(" 即可。")])]),t._v(" "),n("p",[t._v("<"),n("img",{attrs:{src:s(1707),alt:"Picture2.png"}}),t._v(","),n("img",{attrs:{src:s(1708),alt:"Picture3.png"}}),t._v(","),n("img",{attrs:{src:s(1709),alt:"Picture4.png"}}),t._v(","),n("img",{attrs:{src:s(1710),alt:"Picture5.png"}}),t._v(","),n("img",{attrs:{src:s(1711),alt:"Picture6.png"}}),t._v(">")]),t._v(" "),n("h5",{attrs:{id:"复杂度分析："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析："}},[t._v("#")]),t._v(" 复杂度分析：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("时间复杂度 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("N")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" ：")]),t._v(" "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("N")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 为链表长度，删除操作平均需循环 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("N")]),n("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),n("mn",[t._v("2")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N/2")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),n("span",{staticClass:"mord"},[t._v("/")]),n("span",{staticClass:"mord"},[t._v("2")])])])]),t._v(" 次，最差 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("N")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 次。")]),t._v(" "),n("li",[n("strong",[t._v("空间复杂度 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mn",[t._v("1")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord"},[t._v("1")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" ：")]),t._v(" "),n("code",[t._v("cur")]),t._v(", "),n("code",[t._v("pre")]),t._v(" 占用常数大小额外空间。")])]),t._v(" "),n("h4",{attrs:{id:"代码："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码："}},[t._v("#")]),t._v(" 代码：")]),t._v(" "),n("div",{staticClass:"language-Python [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("div",{staticClass:"language-Java [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pre"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("div",{staticClass:"language-C++ [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    ListNode* deleteNode(ListNode* head, int val) {\n        if(head->val == val) return head->next;\n        ListNode *pre = head, *cur = head->next;\n        while(cur != nullptr && cur->val != val) {\n            pre = cur;\n            cur = cur->next;\n        }\n        if(cur != nullptr) pre->next = cur->next;\n        return head;\n    }\n};\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("h2",{attrs:{id:"提交历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("标记状态")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("我的注释")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-05-27 22:18:13")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com/submissions/detail/181478924/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("🚩")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("虚拟头节点")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("0 ms")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("100.0%")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("38.1 MB")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),n("h2",{attrs:{id:"统计信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("142253")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("240716")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("59.1%")])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);