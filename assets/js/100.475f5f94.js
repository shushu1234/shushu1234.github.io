(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{2362:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"中文题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中文题目"}},[t._v("#")]),t._v(" 中文题目")]),t._v(" "),n("div",[n("p",[t._v("在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。")]),t._v(" "),n("p"),t._v(" "),n("p",[n("strong",[t._v("示例:")])]),t._v(" "),n("p",[t._v("现有矩阵 matrix 如下：")]),t._v(" "),n("pre",[t._v("[\n  [1,   4,  7, 11, 15],\n  [2,   5,  8, 12, 19],\n  [3,   6,  9, 16, 22],\n  [10, 13, 14, 17, 24],\n  [18, 21, 23, 26, 30]\n]\n")]),t._v(" "),n("p",[t._v("给定 target = "),n("code",[t._v("5")]),t._v("，返回 "),n("code",[t._v("true")]),t._v("。")]),t._v(" "),n("p",[t._v("给定 target = "),n("code",[t._v("20")]),t._v("，返回 "),n("code",[t._v("false")]),t._v("。")]),t._v(" "),n("p"),t._v(" "),n("p",[n("strong",[t._v("限制：")])]),t._v(" "),n("p",[n("code",[t._v("0 <= n <= 1000")])]),t._v(" "),n("p",[n("code",[t._v("0 <= m <= 1000")])]),t._v(" "),n("p"),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v("本题与主站 240 题相同："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/search-a-2d-matrix-ii/"}},[t._v("https://leetcode-cn.com/problems/search-a-2d-matrix-ii/")])])]),t._v(" "),n("h2",{attrs:{id:"通过代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),n("RecoDemo",[n("template",{slot:"code-Java-1"},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findNumberIn2DArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 行数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" row "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 列数")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" col "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" col"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])])],2),t._v(" "),n("h2",{attrs:{id:"高赞题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),n("h4",{attrs:{id:"解题思路："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路："}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),n("blockquote",[n("p",[t._v("若使用暴力法遍历矩阵 "),n("code",[t._v("matrix")]),t._v(" ，则时间复杂度为 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("N")]),n("mi",[t._v("M")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(NM)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 。暴力法未利用矩阵 "),n("strong",[t._v("“从上到下递增、从左到右递增”")]),t._v(" 的特点，显然不是最优解法。")])]),t._v(" "),n("p",[t._v("如下图所示，我们将矩阵逆时针旋转 45° ，并将其转化为图形式，发现其类似于 "),n("strong",[t._v("二叉搜索树")]),t._v(" ，即对于每个元素，其左分支元素更小、右分支元素更大。因此，通过从 “根节点” 开始搜索，遇到比 "),n("code",[t._v("target")]),t._v(" 大的元素就向左，反之向右，即可找到目标值 "),n("code",[t._v("target")]),t._v(" 。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(818),alt:"Picture1.png"}}),t._v("{:width=450}")]),t._v(" "),n("p",[t._v("“根节点” 对应的是矩阵的 “左下角” 和 “右上角” 元素，本文称之为 "),n("strong",[t._v("标志数")]),t._v(" ，以 "),n("code",[t._v("matrix")]),t._v(" 中的 "),n("strong",[t._v("左下角元素")]),t._v(" 为标志数 "),n("code",[t._v("flag")]),t._v(" ，则有:")]),t._v(" "),n("ol",[n("li",[t._v("若 "),n("code",[t._v("flag > target")]),t._v(" ，则 "),n("code",[t._v("target")]),t._v(" 一定在 "),n("code",[t._v("flag")]),t._v(" 所在 "),n("strong",[t._v("行的上方")]),t._v(" ，即 "),n("code",[t._v("flag")]),t._v(" 所在行可被消去。")]),t._v(" "),n("li",[t._v("若 "),n("code",[t._v("flag < target")]),t._v(" ，则 "),n("code",[t._v("target")]),t._v(" 一定在 "),n("code",[t._v("flag")]),t._v(" 所在 "),n("strong",[t._v("列的右方")]),t._v(" ，即 "),n("code",[t._v("flag")]),t._v(" 所在列可被消去。")])]),t._v(" "),n("h5",{attrs:{id:"算法流程："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法流程："}},[t._v("#")]),t._v(" "),n("strong",[t._v("算法流程：")])]),t._v(" "),n("ol",[n("li",[t._v("从矩阵 "),n("code",[t._v("matrix")]),t._v(" 左下角元素（索引设为 "),n("code",[t._v("(i, j)")]),t._v(" ）开始遍历，并与目标值对比：\n"),n("ul",[n("li",[t._v("当 "),n("code",[t._v("matrix[i][j] > target")]),t._v(" 时，执行 "),n("code",[t._v("i--")]),t._v(" ，即消去第 "),n("code",[t._v("i")]),t._v(" 行元素；")]),t._v(" "),n("li",[t._v("当 "),n("code",[t._v("matrix[i][j] < target")]),t._v(" 时，执行 "),n("code",[t._v("j++")]),t._v(" ，即消去第 "),n("code",[t._v("j")]),t._v(" 列元素；")]),t._v(" "),n("li",[t._v("当 "),n("code",[t._v("matrix[i][j] = target")]),t._v(" 时，返回 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("t")]),n("mi",[t._v("r")]),n("mi",[t._v("u")]),n("mi",[t._v("e")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("true")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("t")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("e")])])])]),t._v(" ，代表找到目标值。")])])]),t._v(" "),n("li",[t._v("若行索引或列索引越界，则代表矩阵中无目标值，返回 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("f")]),n("mi",[t._v("a")]),n("mi",[t._v("l")]),n("mi",[t._v("s")]),n("mi",[t._v("e")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("false")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),n("span",{staticClass:"mord mathdefault"},[t._v("s")]),n("span",{staticClass:"mord mathdefault"},[t._v("e")])])])]),t._v(" 。")])]),t._v(" "),n("blockquote",[n("p",[t._v("每轮 "),n("code",[t._v("i")]),t._v(" 或 "),n("code",[t._v("j")]),t._v(" 移动后，相当于生成了“消去一行（列）的新矩阵”， 索引"),n("code",[t._v("(i,j)")]),t._v(" 指向新矩阵的左下角元素（标志数），因此可重复使用以上性质消去行（列）。")])]),t._v(" "),n("h5",{attrs:{id:"复杂度分析："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析："}},[t._v("#")]),t._v(" 复杂度分析：")]),t._v(" "),n("ul",[n("li",[t._v("时间复杂度 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mi",[t._v("M")]),n("mo",[t._v("+")]),n("mi",[t._v("N")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(M+N)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("+")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" ：其中，"),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("N")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 和 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("M")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])]),t._v(" 分别为矩阵行数和列数，此算法最多循环 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mo",[t._v("+")]),n("mi",[t._v("N")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M+N")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.76666em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("+")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 次。")]),t._v(" "),n("li",[t._v("空间复杂度 "),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mi",[t._v("O")]),n("mo",{attrs:{stretchy:"false"}},[t._v("(")]),n("mn",[t._v("1")]),n("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord"},[t._v("1")]),n("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" : "),n("code",[t._v("i")]),t._v(", "),n("code",[t._v("j")]),t._v(" 指针使用常数大小额外空间。")])]),t._v(" "),n("p",[t._v("<"),n("img",{attrs:{src:s(819),alt:"Picture2.png"}}),t._v(","),n("img",{attrs:{src:s(820),alt:"Picture3.png"}}),t._v(","),n("img",{attrs:{src:s(821),alt:"Picture4.png"}}),t._v(","),n("img",{attrs:{src:s(822),alt:"Picture5.png"}}),t._v(","),n("img",{attrs:{src:s(823),alt:"Picture6.png"}}),t._v(","),n("img",{attrs:{src:s(824),alt:"Picture7.png"}}),t._v(">")]),t._v(" "),n("h4",{attrs:{id:"代码："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码："}},[t._v("#")]),t._v(" 代码：")]),t._v(" "),n("div",{staticClass:"language-Python [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findNumberIn2DArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("div",{staticClass:"language-Java [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findNumberIn2DArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("div",{staticClass:"language-C++ [] line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution {\npublic:\n    bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {\n        int i = matrix.size() - 1, j = 0;\n        while(i >= 0 && j < matrix[0].size())\n        {\n            if(matrix[i][j] > target) i--;\n            else if(matrix[i][j] < target) j++;\n            else return true;\n        }\n        return false;\n    }\n};\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("h2",{attrs:{id:"提交历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-04-08 17:34:21")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/165344161/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("0 ms")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("100.0%")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("44.3 MB")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-04-08 17:32:26")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/165343346/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Runtime Error"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),n("h2",{attrs:{id:"统计信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("170613")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("421684")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("40.5%")])])])])],1)}),[],!1,null,null,null);a.default=e.exports},818:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-0.90648c2b.png"},819:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-1.3c1ea7bf.png"},820:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-2.acf2cad9.png"},821:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-3.08c154bc.png"},822:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-4.08a755e4.png"},823:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-5.e7e14551.png"},824:function(t,a,s){t.exports=s.p+"assets/img/er-wei-shu-zu-zhong-de-cha-zhao-lcof-6.7a93f36e.png"}}]);