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
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `docs/.vitepress/dist` 目录

## 🌐 GitHub Pages 部署指南

### 方法一：GitHub Actions 自动部署（推荐）

#### 1. 启用 GitHub Pages

1. 进入 GitHub 仓库设置页面
2. 找到 "Pages" 选项
3. 在 "Source" 中选择 "GitHub Actions"
4. 保存设置

#### 2. 配置 VitePress 基础路径

更新 `docs/.vitepress/config.mts` 文件：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "王继民 - IT技术经理",
  description: "王继民个人简历网站",
  
  // 设置基础路径
  base: '/website/',
  
  themeConfig: {
    // ... 其他配置
  }
})
```

#### 3. 推送代码触发部署

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

部署完成后，网站将在 `https://your-username.github.io/website/` 访问

### 方法二：手动部署到 gh-pages 分支

#### 1. 安装部署工具

```bash
npm install -D gh-pages
```

#### 2. 添加部署脚本

在 `package.json` 中添加部署脚本：

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d docs/.vitepress/dist"
  }
}
```

#### 3. 执行部署

```bash
npm run deploy
```

#### 4. 配置 GitHub Pages

1. 进入仓库设置
2. 在 "Pages" 中选择 "Deploy from a branch"
3. 选择 "gh-pages" 分支
4. 选择 "/ (root)" 目录

### 自定义域名配置

如果你有自定义域名：

#### 1. 添加 CNAME 文件

在 `docs/public/` 目录下创建 `CNAME` 文件：

```
your-domain.com
```

#### 2. 配置 DNS

在域名提供商处添加 CNAME 记录：

```
Type: CNAME
Name: www (或 @)
Value: your-username.github.io
```

#### 3. 更新 VitePress 配置

```typescript
export default defineConfig({
  // 如果使用自定义域名，base 设置为 '/'
  base: '/',
  // ... 其他配置
})
```

## 🔄 更新部署

只需推送代码到 main 分支，GitHub Actions 会自动部署：

```bash
git add .
git commit -m "Update content"
git push origin main
```

## 🔧 故障排除

### 常见问题

1. **404 错误**
   - 检查 `base` 配置是否正确
   - 确认仓库名和配置一致

2. **资源加载失败**
   - 检查静态资源路径
   - 确认 `base` 路径设置

3. **构建失败**
   - 检查 Node.js 版本兼容性
   - 查看 Actions 日志排查错误

### 查看部署状态

- 在仓库的 "Actions" 标签页查看工作流状态
- 在 "Settings" > "Pages" 查看部署状态

## 📞 联系方式

- **姓名**：王继民
- **职位**：IT技术经理
- **手机**：13676961787
- **邮箱**：854973881@qq.com
- **期望城市**：上海

## 📄 许可证

本项目仅用于个人简历展示，请勿用于商业用途。 