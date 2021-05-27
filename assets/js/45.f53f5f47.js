(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1231:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-0.411ff76f.png"},1232:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-1.8cc33a8f.png"},1233:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-2.784b00f5.png"},1234:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-3.387bb076.png"},1235:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-4.2c9b9684.png"},1236:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-5.9a59114d.png"},1237:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-6.60b78958.png"},1238:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-7.51fef2e3.png"},1239:function(t,s,a){t.exports=a.p+"assets/img/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof-8.e1789a7b.png"},1330:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"中文题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中文题目"}},[t._v("#")]),t._v(" 中文题目")]),t._v(" "),n("div",[n("p",[t._v("输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。")]),t._v(" "),n("p",[t._v("例如，一个链表有 "),n("code",[t._v("6")]),t._v(" 个节点，从头节点开始，它们的值依次是 "),n("code",[t._v("1、2、3、4、5、6")]),t._v("。这个链表的倒数第 "),n("code",[t._v("3")]),t._v(" 个节点是值为 "),n("code",[t._v("4")]),t._v(" 的节点。")]),t._v(" "),n("p"),t._v(" "),n("p",[n("strong",[t._v("示例：")])]),t._v(" "),n("pre",[t._v("给定一个链表: "),n("strong",[t._v("1->2->3->4->5")]),t._v(", 和 "),n("em",[t._v("k ")]),n("strong",[t._v("= 2")]),t._v(".\n\n返回链表 4"),n("strong",[t._v("->5")]),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"通过代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),n("RecoDemo",[n("template",{slot:"code-Java-1"},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKthFromEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                fast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                slow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])])])],2),t._v(" "),n("h2",{attrs:{id:"高赞题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),n("h4",{attrs:{id:"解题思路："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路："}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),n("ul",[n("li",[t._v("第一时间想到的解法：\n"),n("ol",[n("li",[t._v("先遍历统计链表长度，记为 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("n")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("n")])])])]),t._v(" ；")]),t._v(" "),n("li",[t._v("设置一个指针走 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("n")]),n("mo",[t._v("−")]),n("mi",[t._v("k")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(n-k)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault"},[t._v("n")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("−")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 步，即可找到链表倒数第 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 个节点。")])])]),t._v(" "),n("li",[t._v("使用双指针则可以不用统计链表长度。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1231),alt:"Picture0.png"}}),t._v("{:width=300}")]),t._v(" "),n("h5",{attrs:{id:"算法流程："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法流程："}},[t._v("#")]),t._v(" 算法流程：")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("初始化：")]),t._v(" 前指针 "),n("code",[t._v("former")]),t._v(" 、后指针 "),n("code",[t._v("latter")]),t._v(" ，双指针都指向头节点 "),n("code",[t._v("head​")]),t._v(" 。")]),t._v(" "),n("li",[n("strong",[t._v("构建双指针距离：")]),t._v(" 前指针 "),n("code",[t._v("former")]),t._v(" 先向前走 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 步（结束后，双指针 "),n("code",[t._v("former")]),t._v(" 和 "),n("code",[t._v("latter")]),t._v(" 间相距 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 步）。")]),t._v(" "),n("li",[n("strong",[t._v("双指针共同移动：")]),t._v(" 循环中，双指针 "),n("code",[t._v("former")]),t._v(" 和 "),n("code",[t._v("latter")]),t._v("  每轮都向前走一步，直至 "),n("code",[t._v("former")]),t._v(" 走过链表 "),n("strong",[t._v("尾节点")]),t._v(" 时跳出（跳出后， "),n("code",[t._v("latter")]),t._v(" 与尾节点距离为 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("k")]),n("mo",[t._v("−")]),n("mn",[t._v("1")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k-1")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("−")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),n("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("，即 "),n("code",[t._v("latter")]),t._v(" 指向倒数第 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 个节点）。")]),t._v(" "),n("li",[n("strong",[t._v("返回值：")]),t._v(" 返回 "),n("code",[t._v("latter")]),t._v(" 即可。")])]),t._v(" "),n("p",[t._v("<"),n("img",{attrs:{src:a(1232),alt:"Picture1.png"}}),t._v(","),n("img",{attrs:{src:a(1233),alt:"Picture2.png"}}),t._v(","),n("img",{attrs:{src:a(1234),alt:"Picture3.png"}}),t._v(","),n("img",{attrs:{src:a(1235),alt:"Picture4.png"}}),t._v(","),n("img",{attrs:{src:a(1236),alt:"Picture5.png"}}),t._v(","),n("img",{attrs:{src:a(1237),alt:"Picture6.png"}}),t._v(","),n("img",{attrs:{src:a(1238),alt:"Picture7.png"}}),t._v(","),n("img",{attrs:{src:a(1239),alt:"Picture8.png"}}),t._v(">")]),t._v(" "),n("h5",{attrs:{id:"复杂度分析："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析："}},[t._v("#")]),t._v(" 复杂度分析：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("时间复杂度 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("N")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" ：")]),t._v(" "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("N")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 为链表长度；总体看， "),n("code",[t._v("former")]),t._v(" 走了 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("N")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 步， "),n("code",[t._v("latter")]),t._v(" 走了 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("N")]),n("mo",[t._v("−")]),n("mi",[t._v("k")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(N-k)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("−")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 步。")]),t._v(" "),n("li",[n("strong",[t._v("空间复杂度 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mn",[t._v("1")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord"},[t._v("1")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" ：")]),t._v(" 双指针 "),n("code",[t._v("former")]),t._v(" , "),n("code",[t._v("latter")]),t._v(" 使用常数大小的额外空间。")])]),t._v(" "),n("h4",{attrs:{id:"代码："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码："}},[t._v("#")]),t._v(" 代码：")]),t._v(" "),n("blockquote",[n("p",[t._v("本题没有 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 大于链表长度的 case ，因此不用考虑越界问题。\n考虑越界问题的代码请见第三、四栏。")])]),t._v(" "),n("div",{staticClass:"language-python [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKthFromEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" latter\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("div",{staticClass:"language-java [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKthFromEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" latter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" latter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("div",{staticClass:"language-python [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKthFromEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n            former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" latter\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("div",{staticClass:"language-java [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKthFromEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            former "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" former"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            latter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" latter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" latter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h2",{attrs:{id:"提交历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("标记状态")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("我的注释")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-05-27 22:34:44")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com/submissions/detail/181484204/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("🚩🚩")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("快慢指针")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("0 ms")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("100.0%")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("36.3 MB")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),n("h2",{attrs:{id:"统计信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("174773")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("222392")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("78.6%")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);