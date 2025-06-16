# 王继民个人简历网站

基于 VitePress 构建的现代化个人简历网站，展示IT技术经理的专业经历和项目经验。

## 🌟 项目特色

- **现代化设计**：基于 VitePress 静态站点生成器
- **响应式布局**：完美适配桌面端和移动端
- **快速加载**：静态文件，访问速度极快
- **SEO友好**：搜索引擎优化，提升曝光度
- **易于维护**：Markdown 编写，简单易更新

## 📋 网站内容

- **首页**：个人介绍和核心技能展示
- **简历页**：详细的工作经历和项目经验
- **项目页**：项目作品展示区域
- **联系页**：联系方式和求职意向

## 🛠️ 技术栈

- **框架**：VitePress (基于 Vue 3 + Vite)
- **语言**：TypeScript + Markdown
- **样式**：CSS3 + 响应式设计
- **部署**：GitHub Pages

## 🚀 本地开发

### 环境要求

- Node.js 16+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看网站

### 构建生产版本

```bash
npm run docs:build
```

构建文件将生成在 `docs/.vitepress/dist` 目录

## 🌐 部署到 GitHub Pages

### 自动部署（推荐）

项目已配置 GitHub Actions 自动部署，只需：

1. **启用 GitHub Pages**
   - 进入 GitHub 仓库设置页面
   - 找到 "Pages" 选项
   - 在 "Source" 中选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

3. **访问网站**
   - 部署完成后访问：`https://Jimin-github.github.io/website/`

### 手动部署

如需手动部署到 gh-pages 分支：

```bash
# 安装部署工具
npm install -D gh-pages

# 添加部署脚本到 package.json
"scripts": {
  "deploy": "npm run docs:build && gh-pages -d docs/.vitepress/dist"
}

# 执行部署
npm run deploy
```

## 📝 内容更新

- 编辑 `docs/` 目录下的 Markdown 文件
- 修改 `docs/.vitepress/config.mts` 配置网站设置
- 自定义样式在 `docs/.vitepress/theme/custom.css`

## 🔧 项目结构

```
website/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 配置
│   │   └── theme/
│   │       ├── index.ts        # 主题配置
│   │       └── custom.css      # 自定义样式
│   ├── index.md                # 首页
│   ├── resume.md               # 简历页
│   ├── projects.md             # 项目页
│   └── contact.md              # 联系页
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions 部署配置
├── package.json                # 项目依赖
└── README.md                   # 项目说明
```

## 📞 联系方式

- **手机**：13676961787
- **邮箱**：854973881@qq.com
- **期望城市**：上海

---

© 2024 王继民. All rights reserved. 