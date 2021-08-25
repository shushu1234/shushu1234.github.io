(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{2046:function(t,s,a){t.exports=a.p+"assets/img/minimum-height-tree-lcci-0.6a934429.png"},2047:function(t,s,a){t.exports=a.p+"assets/img/minimum-height-tree-lcci-1.3183061a.png"},2048:function(t,s){t.exports="data:image/jpeg;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPEVycm9yPgogIDxDb2RlPk5vU3VjaEtleTwvQ29kZT4KICA8TWVzc2FnZT5UaGUgc3BlY2lmaWVkIGtleSBkb2VzIG5vdCBleGlzdC48L01lc3NhZ2U+CiAgPFJlcXVlc3RJZD42MEU0NjcyMzUzQkNDNjM1Mzc1Rjc2NDk8L1JlcXVlc3RJZD4KICA8SG9zdElkPmxlZXRjb2RlLXBpYy5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tPC9Ib3N0SWQ+CiAgPEtleT5mYTZmNjc3ZWIxZmM5MGJiNDhmOTI1MzdkYjAwMmI2MDU4NzdiZWNlMzVhMTY5NzE2MmYwYTEwZTNjM2NiYjdkLXFyY29kZV9mb3JfZ2hfNmU1Zjg1NTdiMWY4XzI1OC5qcGc8L0tleT4KPC9FcnJvcj4K"},2393:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"中文题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中文题目"}},[t._v("#")]),t._v(" 中文题目")]),t._v(" "),n("div",[n("p",[t._v("给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。")]),n("strong",[t._v("示例:")]),n("pre",[t._v("给定有序数组: [-10,-3,0,5,9],"),n("br"),n("br"),t._v("一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树："),n("br"),n("br"),t._v("          0 "),n("br"),t._v("         / \\ "),n("br"),t._v("       -3   9 "),n("br"),t._v("       /   / "),n("br"),t._v("     -10  5 "),n("br")])]),t._v(" "),n("h2",{attrs:{id:"通过代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过代码"}},[t._v("#")]),t._v(" 通过代码")]),t._v(" "),n("RecoDemo",[n("template",{slot:"code-Java-2"},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortedArrayToBST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])])])],2),t._v(" "),n("h2",{attrs:{id:"高赞题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高赞题解"}},[t._v("#")]),t._v(" 高赞题解")]),t._v(" "),n("p",[t._v("首先复习下二叉搜索树的定义：对于树中的所有子树都有，左子树上的值都小于根节点的值，右子树上的值都大于根节点上的值。总结一下就是，树的中序遍历可以得到一个升序序列。")]),t._v(" "),n("p",[t._v("如下图所示：\n"),n("img",{attrs:{src:a(2046),alt:"二叉搜索树.png"}})]),t._v(" "),n("p",[t._v("那如何保证高度最小呢？当树中的任意结点的左右子树高度差都不超过 1 时，整棵树的深度最小。")]),t._v(" "),n("p",[t._v("下面是一种构造最小高度树的思路：")]),t._v(" "),n("ol",[n("li",[t._v("如果序列长度为 0，那么是一棵空树。")]),t._v(" "),n("li",[t._v("如果序列长度为 1，那么只有一个根节点。")]),t._v(" "),n("li",[t._v("如果长度大于 1，那么选取中间位置的数赋给根节点，然后前一半递归构建左子树，后一半递归构建右子树。")])]),t._v(" "),n("p",[t._v("以 [-5,-3,0,1,5,9] 为例，构造过程如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2047),alt:"构造平衡二叉搜索树.png"}})]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* dfs(const vector<int> &nums, int L, int R) {\n        if(L > R) {\n            return nullptr;\n        }\n        int mid = (L+R)>>1;\n        auto ptr = new TreeNode(nums[mid]); //填充根节点\n        ptr->left = dfs(nums, L, mid-1); //构造左子树\n        ptr->right = dfs(nums, mid+1, R); //构造右子树\n        return ptr;\n    }\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        return dfs(nums, 0, nums.size()-1);\n    }\n};\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2048),alt:"qrcode_for_gh_6e5f8557b1f8_258.jpg"}})]),t._v(" "),n("p",[t._v("扫码关注，更多福利~")]),t._v(" "),n("h2",{attrs:{id:"提交历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提交历史"}},[t._v("#")]),t._v(" 提交历史")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("提交时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交结果")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("标记状态")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("我的注释")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("执行时间")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("战胜比例")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("内存消耗")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("语言")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-07-06 21:57:00")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com/submissions/detail/192992888/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Time Limit Exceeded"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("2021-07-06 21:56:49")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://leetcode-cn.com/submissions/detail/192992816/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accepted"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("0 ms")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("100.0%")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("38.3 MB")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("java")])])])]),t._v(" "),n("h2",{attrs:{id:"统计信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计信息"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("通过次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("提交次数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("AC比率")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("31293")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("39649")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("78.9%")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);