(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1153:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"英文原文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#英文原文"}},[t._v("#")]),t._v(" 英文原文")]),t._v(" "),a("div",[a("p",[t._v("You are given a binary tree in which each node contains an integer value.")]),t._v(" "),a("p",[t._v("Find the number of paths that sum to a given value.")]),t._v(" "),a("p",[t._v("The path does not need to start or end at the root or a leaf, but it must go downwards\n(traveling only from parent nodes to child nodes).")]),t._v(" "),a("p",[t._v("The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.\n")]),a("p",[a("b",[t._v("Example:")]),t._v(" "),a("pre",[t._v("root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8\n"),a("pre",[a("code",[t._v("  10\n /  \\\n<b>5</b>   <b>-3</b>\n")])]),t._v(" "),a("p",[a("b",[t._v("/")]),t._v(" "),a("b",[t._v("</b>    "),a("b",[t._v("</b>\n"),a("b",[t._v("3")]),t._v(" "),a("b",[t._v("2")]),t._v(" "),a("b",[t._v("11")]),t._v("\n/ \\   "),a("b",[t._v("</b>\n3  -2   "),a("b",[t._v("1")])])])])]),t._v(" "),a("p",[t._v("Return 3. The paths that sum to 8 are:")]),t._v(" "),a("ol",[a("li",[t._v("5 -> 3")]),t._v(" "),a("li",[t._v("5 -> 2 -> 1")]),t._v(" "),a("li",[t._v("-3 -> 11\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"中文翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文翻译"}},[t._v("#")]),t._v(" 中文翻译")]),t._v(" "),a("div",[a("p",[t._v("给定一个二叉树，它的每个结点都存放着一个整数值。")]),t._v(" "),a("p",[t._v("找出路径和等于给定数值的路径总数。")]),t._v(" "),a("p",[t._v("路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。")]),t._v(" "),a("p",[t._v("二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。")]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("pre",[t._v("root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8\n\n      10\n     /  \\\n    "),a("strong",[t._v("5")]),t._v("   "),a("strong",[t._v("-3")]),t._v("\n   "),a("strong",[t._v("/")]),t._v(" "),a("strong",[t._v("\\")]),t._v("    "),a("strong",[t._v("\\")]),t._v("\n  "),a("strong",[t._v("3")]),t._v("   "),a("strong",[t._v("2")]),t._v("   "),a("strong",[t._v("11")]),t._v("\n / \\   "),a("strong",[t._v("\\")]),t._v("\n3  -2   "),a("strong",[t._v("1")]),t._v("\n\n返回 3。和等于 8 的路径有:\n\n1.  5 -> 3\n2.  5 -> 2 -> 1\n3.  -3 -> 11\n")])]),t._v(" "),a("h2",{attrs:{id:"通过代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),a("RecoDemo",[a("template",{slot:"code-Java-1"},[a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" findPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])])])],2),t._v(" "),a("h2",{attrs:{id:"高赞题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),a("h1",{attrs:{id:"解法思路（一）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法思路（一）"}},[t._v("#")]),t._v(" 解法思路（一）")]),t._v(" "),a("ul",[a("li",[t._v("路径的开头可以不是根节点，结束也可以不是叶子节点，是不是有点复杂？")]),t._v(" "),a("li",[t._v("如果问题是这样：找出以根节点为开始，任意节点可作为结束，且路径上的节点和为 sum 的路径的个数；")]),t._v(" "),a("li",[t._v("是不是前序遍历一遍二叉树就可以得到所有这样的路径？是的；")]),t._v(" "),a("li",[t._v("如果这个问题解决了，那么原问题可以分解成多个这个问题；")]),t._v(" "),a("li",[t._v("是不是和数线段是同一个问题，只不过线段变成了二叉树；")]),t._v(" "),a("li",[t._v("在解决了以根节点开始的所有路径后，就要找以根节点的左孩子和右孩子开始的所有路径，三个节点构成了一个递归结构；")]),t._v(" "),a("li",[t._v("递归真的好简单又好难；")])]),t._v(" "),a("h1",{attrs:{id:"解法实现（一）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法实现（一）"}},[t._v("#")]),t._v(" 解法实现（一）")]),t._v(" "),a("h6",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("ul",[a("li",[t._v("O(n)，n为树的节点个数；")])]),t._v(" "),a("h6",{attrs:{id:"空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),a("ul",[a("li",[t._v("O(h)，h为树的高度；")])]),t._v(" "),a("h6",{attrs:{id:"关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[t._v("#")]),t._v(" 关键字")]),t._v(" "),a("p",[a("code",[t._v("二叉树")]),t._v(" "),a("code",[t._v("递归")]),t._v(" "),a("code",[t._v("前序遍历")]),t._v(" "),a("code",[t._v("路径和")]),t._v(" "),a("code",[t._v("路径数量")]),t._v(" "),a("code",[t._v("数线段")]),t._v(" "),a("code",[t._v("双递归")])]),t._v(" "),a("h6",{attrs:{id:"实现细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现细节"}},[t._v("#")]),t._v(" 实现细节")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("sum - root.val")]),t._v(" 好好体会一下，挺有意思的；")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("package leetcode._437;\n\npublic class Solution437_1 {\n\n    public static class TreeNode {\n        int val;\n        TreeNode left;\n        TreeNode right;\n        TreeNode(int x) { val = x; }\n    }\n\n    /**\n     * 求以 root 为根的二叉树，所有和为 sum 的路径；\n     * 路径的开头不一定是 root，结尾也不一定是叶子节点；\n     * @param root\n     * @param sum\n     * @return\n     */\n    public int pathSum(TreeNode root, int sum) {\n\n        if (root == null) {\n            return 0;\n        }\n\n        return paths(root, sum) \n                + pathSum(root.left, sum) \n                + pathSum(root.right, sum);\n    }\n\n    private int paths(TreeNode root, int sum) {\n\n        if (root == null) {\n            return 0;\n        }\n\n        int res = 0;\n        if (root.val == sum) {\n            res += 1;            \n        }\n        \n        res += paths(root.left, sum - root.val);\n        res += paths(root.right, sum - root.val);\n        \n        return res;\n    }\n\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/2cc66577f7d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("返回 LeetCode [Java] 目录"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"统计信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("17510")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32944")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("53.2%")])])])]),t._v(" "),a("h2",{attrs:{id:"提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2018-07-17 21:41:16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com//submissions/detail/4299764/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("26 ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),a("h2",{attrs:{id:"相似题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相似题目"}},[t._v("#")]),t._v(" 相似题目")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("题目")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("难度")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("路径总和"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com/problems/path-sum-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("路径总和 II"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("中等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com/problems/path-sum-iv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("路径和 IV"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("中等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-univalue-path/",target:"_blank",rel:"noopener noreferrer"}},[t._v("最长同值路径"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("简单")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);