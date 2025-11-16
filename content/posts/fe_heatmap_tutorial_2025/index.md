---
title: "给Hugo/Blowfish博客添加热力图-不懂代码看着操作就行"
categories: ["博客装修"]
tags: ["技术"]
# summary:
#externalUrl: ""
# showSummary: true
date: 2025-11-14
draft: true
---

<!-- ## 标题  -->
<!-- **加粗** -->

本热力图构建基于这两篇博文，[椒盐豆豉](https://blog.douchi.space/hugo-blog-heatmap/)，[Yibo Cat](https://yibocat.github.io/posts/jzrj/jzrj_4/) (Yibo Cat 的链接有可能失效，您可以在搜索引擎里找到 Ta)
## 目标阅读人群

如果你需要手把手指导、不（太）懂代码；需要博客数据可视化，那么本篇教程是为你而写的。

## 起因

最开始建立博客、开始装修的时候，我意识到本·前端经验半年·四年没碰·大脑在理解博客DIY上存在一些基本性的困难。

如果你是刚刚建好博客仓库，还没有来得及细读文档，那么你可能也会遇到类似的困难，比如，我在浏览器兴奋输入 "Hugo 装修“，教程里写”下载xxx, 然后代码xxx"，我感觉就像随机走进一个大学教学楼教室然后课上的老师在讲“那么我们这个水晶属于三方晶系，是石英的一种紫色变体” (也就是紫水晶)。

或许你已经读过文档，写了几篇博客，突然你又看到朋友的博客多了一些新鲜玩意儿，比如“热力图”。
你想要给自己的博客也来点新家具，但发现已经忘了哪个房间是哪个房间。


如果你是完全没有代码经验的小白，但平时从事的也是和软件开发毫不相关的岗位，最多的经验就是在管理自己电脑上的文件夹，在我看来，这部分读者有可能反倒会仔细阅读文档，但也会遇见上述大脑宕机的状态。不过本教程的作者的确有一些代码基础，所以生成式人工智能聊天代理 （比如ChatGPT）可能是你的好帮手。事实上，我也经常需要它的帮助。

总的来说，我希望这篇文章能帮大家减轻一些装修负担，顺便分享我作为初级开发者的工作流程。

## 步骤详解


### 第一步 新建文件夹

此教程基于静态网页，我们只需要用到最简单的 HTML 以及嵌套的CSS, JavaScript。你熟悉（或者不熟悉的）[jsx](https://react.dev/learn/writing-markup-with-jsx),[tsx](https://react.dev/learn/typescript) 等并不会在这个教程里出现。当然，如果您有一定的基础并且愿意更好的组织你的文件夹，你可以把 JavaScript 放在一个更聚集的地方。<!--请参考本文 Enhancement。-->

#### 如果你也是 Blowfish

v2.92.0。

如果你需要在首页插入热力图 请在 layouts/partials 下新建一个 heatmap.html

如果你需要在文章内页插入热力图，请在layouts/shortcodes 下新建一个heatmap.html。但本教程将基于首页添加展开。

#### 如果你是其他基于HUGO的博客

<!-- todo --> 
请你 参考 Hugo 官方文档，把可以新建自定义页面代码的地方新建一个html文档。

### 第二步 复制代码

本热力图基于ECharts 的 Calendar Heatmap [^1]构建，你可以直接访问[这个](https://echarts.apache.org/examples/en/index.html#chart-type-heatmap)，如果链接失效，你也可以在搜索引擎输入 ECharts 找到它们的热力图部分。

正如Doja Cat，哦不，[Yibo Cat](https://yibocat.github.io/posts/jzrj/jzrj_4/#%e8%8e%b7%e5%8f%96) 在获取部分所写，我们会用到 [CDN](https://echarts.apache.org/handbook/zh/basics/download/#%E4%BB%8E-cdn-%E8%8E%B7%E5%8F%96) 来引用 EChart 这个 第三方库。简单来说，就是在你的 JavaScript 代码部分 添加**高亮行**代码。

现在, heatmap.html 长这样。

```javascript {linenos=inline hl_lines=[6]}
<div id="heatmap" style="
  width: 600px;
  height: 180px;
  padding: 2px;
  text-align: center;"></div>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.3.0/dist/echarts.min.js"></script>
```

### 第三步 构建你的自定义主页 (Blowfish)

如果你已经在layouts/partials/home/custom.html新建了文件，那么你可以直通下一步。

如果你还没有新建，请新建。主页自定义可以参考[Blowfish 官方首页文档](https://blowfish.page/zh-cn/docs/homepage-layout/)和[菜菜子的博客](https://nanako.icu/posts/hugo-blog-ui-change-log/#%E6%90%AD%E5%BB%BA%E9%A6%96%E9%A1%B5)。本博客的主页（还）没有出教程。构建首页道阻且长，但嵌入的道理大差不差。如果你想要先测试，就新建一个空白文档并且跳到下一步吧。

### 第四步 将 heatmap 嵌入到主页

找到你主页上想要嵌入的地方，加上下面这行高亮代码：

```go {linenos=inline hl_lines=[1]}  
{{ partial "heatmap.html" }}
```

请注意，不要放在**无论如何都不会显示**的代码区块里。你如何了解这一点？简单的输入 test 四个字符，运行 Hugo, 你应该看见它突兀的出现在那个你想放热力图的地方。

```go {hl_lines=[2]}  
<!-- 一些复杂的代码 -->
test
<!-- 一些复杂的代码 -->
```

依据我目前的前端经验，这也是任何代码无法显示时我会首先尝试的一件事。（另一件事是学会使用 [Ctrl+Shift+C ](https://developer.chrome.com/docs/devtools/inspect-mode?hl=zh-cn)和 F12）

{{< figure
  src="https://photos.gulugulurave.com/frontend-test.jpg"
  alt="咕噜咕庐测试中的页面"
  caption="测试中的页面"
>}}

###


## 知识点提醒

### ECharts

一个很大的开源图库，帮助网页前端开发不用从盘古开天辟地开始。你可以理解为它是一个高度定制化的ikea工厂。在这篇教程里，你只需要用到ECharts 的热力图 HeatMap,所以需要确保博客可以找到（引用）这整个工厂地址。

###

## Reference

[^1]: ECharts热力图还有另一种 Calendar Heatmap Vertical，可以用在相同的应用场景。