# Enlightenment Site 2 - Handoff Notes

Last updated: 2026-02-14

## 1) 项目目标
搭建一个“18世纪重大历史事件”双语（中文/英文）沉浸式展示站点，当前以可读性优先、展览型浏览体验为主。

## 2) 当前文件结构
- 页面结构: `index.html`
- 样式: `styles.css`
- 交互与数据: `script.js`
- 事件图片: `assets/images/events/*.jpg`

## 3) 已确认的产品决策
1. 交互模型
- 已取消“章节”概念，改为“单事件流”。
- 底部轨道与前后切换都是按事件顺序移动。

2. 标题层级
- 主标题使用标准事件名（`headline`）。
- 副标题使用解释性短句（`title`）。
- 卡片标题与详情大标题必须一致，避免“点进去像进错页”。

3. 中英文切换
- 语言切换需完整替换导航文案、标题、副标题、详情内容。
- 中文主标题使用: `十八世纪编年史`
- 左上角小字:
  - EN: `Enlightenment, Revolution, and Expansion`
  - ZH: `启蒙、革命与扩张`

4. 视觉与动画
- 粉色擦除动画已删除，不再恢复。
- 详情图可点击切换“标题+渐变层”的显示状态。
- 渐变目前偏弱，主要用于增强文字可读性。

5. 可读性策略
- 主标题尽量两行显示，不追求夸张断行。
- 背景图上文字要有足够对比度，避免与亮部/复杂纹理冲突。
- 底部卡片已加宽并提升字号，黑色标题底框已移除。

6. 底部信息
- 保留图片免责声明（历史教育与非商业展示）。
- 联系邮箱: `linkesnake@hotmail.com`

## 4) 数据与素材约定
- 新增了中国/日本相关18世纪事件（如享保改革、一口通商）。
- 每个事件应有独立且尽量准确的历史图片，避免重复图和错配图。
- 图片映射逻辑在 `script.js`，本地文件放在 `assets/images/events/`。

## 5) 下次对话怎么继续（直接复制）
把下面这段发给 Codex 即可：

```text
请先阅读这个交接文件，再继续修改：
/Users/fengwei/Library/Mobile Documents/com~apple~CloudDocs/ChatGPT Codex/enlightenment-site2/PROJECT_HANDOFF.md

项目目录：
/Users/fengwei/Library/Mobile Documents/com~apple~CloudDocs/ChatGPT Codex/enlightenment-site2

这次我要改的内容是：
【在这里写你的新需求】
```

## 6) 建议工作方式
- 每次改完都把关键变更追加到本文件，避免多轮后上下文丢失。
- 若改动较大，新增一个 `CHANGELOG.md` 记录“日期 + 改了什么 + 为什么改”。
