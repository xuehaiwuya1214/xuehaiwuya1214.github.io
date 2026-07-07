---
title: Markdown 样式速览
date: 2026-07-06
category: 站务
tags: [Markdown, 博客]
description: 本站支持的全部 Markdown 语法效果演示：标题、代码、表格、公式、脚注等。
---

这篇文章演示本站支持的所有 Markdown 元素的渲染效果，写作时可以随时回来对照。

## 文字样式

**加粗**、*斜体*、~~删除线~~、`行内代码`、[链接](https://github.com/xuehaiwuya1214)，还有 <kbd>Ctrl</kbd> + <kbd>C</kbd> 这样的按键提示。

## 引用

> 书山有路勤为径，学海无涯苦作舟。
>
> —— 《增广贤文》

## 代码块

Python：

```python
import torch

def train_step(model, batch, optimizer):
    """单步训练"""
    optimizer.zero_grad()
    loss = model(**batch).loss
    loss.backward()
    optimizer.step()
    return loss.item()
```

JavaScript：

```js
const posts = await getPosts();
console.log(`共 ${posts.length} 篇文章`);
```

鼠标悬停在代码块上会出现「复制」按钮。

## 数学公式

行内公式：质能方程 $E = mc^2$，注意力机制 $\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$。

块级公式：

$$
\mathcal{L}(\theta) = -\frac{1}{N}\sum_{i=1}^{N} \log p_\theta(y_i \mid x_i)
$$

## 列表

无序列表：

- 机器学习
  - 监督学习
  - 无监督学习
- 深度学习

有序列表：

1. 提出问题
2. 建立模型
3. 求解验证

## 表格

| 模型 | 参数量 | 发布年份 |
| --- | --- | --- |
| GPT-2 | 1.5B | 2019 |
| GPT-3 | 175B | 2020 |
| LLaMA 2 | 70B | 2023 |

## 脚注

学而不思则罔[^1]。

[^1]: 出自《论语·为政》。

## 分割线

---

以上就是全部常用元素的效果。
