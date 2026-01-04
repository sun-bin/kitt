# K.I.T.T. 系统界面

一个基于 Deno 构建的 K.I.T.T.（霹雳游侠车载 AI）系统界面，采用现代化的科技蓝配色方案。

## 功能特性

- 🤖 **AI 系统界面**：模拟 K.I.T.T. 车载 AI 的终端界面
- 🔵 **科技蓝配色**：现代化的蓝色系配色方案，增强科技感
- 📡 **扫描动画效果**：顶部动态扫描线，营造未来感
- 📱 **响应式设计**：适配不同屏幕尺寸
- ⚡ **快速部署**：支持直接部署到 Deno Deploy
- 🔒 **安全可靠**：使用 Deno 内置 HTTP 服务器，无需外部依赖

## 技术栈

- **运行环境**：Deno
- **语言**：TypeScript
- **框架**：无外部框架依赖
- **样式**：纯 CSS
- **部署平台**：Deno Deploy

## 快速开始

### 前提条件

- 安装 [Deno](https://deno.land/)（版本 1.30+）

### 本地运行

1. 克隆仓库：
   ```bash
   git clone https://github.com/sun-bin/kitt.git
   cd kitt
   ```

2. 启动服务器（需要读取文件权限）：
   ```bash
   deno run --allow-net --allow-read server.ts
   ```

3. 访问界面：
   ```
   http://localhost:8000
   ```

### 直接预览

您可以直接打开 `index.html` 文件在浏览器中预览界面效果：
```bash
open index.html  # macOS
```

## 部署到 Deno Deploy

1. 访问 [Deno Deploy](https://deno.com/deploy)
2. 点击 "New Project" 按钮
3. 选择 "Connect to GitHub"
4. 选择仓库 `sun-bin/kitt`
5. 设置部署配置：
   - 入口文件：`server.ts`
   - 分支：`main`
6. 点击 "Deploy"

## 项目结构

```
kitt/
├── server.ts          # Deno 服务器主文件
├── index.html         # HTML 模板文件
├── kitt.config.json   # K.I.T.T. 配置文件（JSON格式）
├── .gitignore         # Git 忽略配置
└── README.md          # 项目说明文档
```

## 自定义配置

### 修改配置文件

在 `kitt.config.json` 文件中，可以修改 K.I.T.T. 的配置数据：

```json
{
  "name": "K.I.T.T.",
  "fullName": "Knight Industries Two Thousand",
  "identity": "霹雳游侠车载 AI",
  "vehicle": "1982 Pontiac Trans Am",
  "capabilities": [
    "微处理器控制的自动驾驶系统",
    "分子结合外壳 (刀枪不入)",
    // 添加更多功能...
    "新功能描述"
  ],
  "motto": "One man can make a difference."
}
```

### 修改配色方案

在 `index.html` 文件中，可以修改 CSS 样式来自定义配色：

```css
/* 修改主色调 */
body, html {
  color: #00bfff; /* 科技蓝 */
}

/* 修改扫描线颜色 */
.scanner-light {
  background: linear-gradient(90deg, transparent, #00bfff, #66d9ff, #00bfff, transparent);
  box-shadow: 0 0 15px #00bfff;
}
```

### 修改HTML模板

在 `index.html` 文件中，可以修改HTML结构和内容，使用模板占位符动态填充数据：

```html
<!-- 添加新的信息字段 -->
<p><span class="label">FULL NAME:</span> {{fullName}}</p>
<p><span class="label">IDENTITY:</span> {{identity}}</p>
```

### 扩展模板功能

可以在 `server.ts` 文件中添加更多模板占位符的替换逻辑：

```javascript
html = html
  .replace('{{name}}', kittProfile.name)
  .replace('{{fullName}}', kittProfile.fullName) // 添加新的替换逻辑
  .replace('{{identity}}', kittProfile.identity) // 添加新的替换逻辑
  .replace('{{vehicle}}', kittProfile.vehicle);
```

## 许可证

MIT License

## 致谢

- 灵感来源于经典电视剧《霹雳游侠》(Knight Rider)
- 感谢 Deno 提供的现代化运行环境

## 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

---

**K.I.T.T.**: "One man can make a difference."
