# Deductour - 移动端应用

一个基于 React Native + Expo Router 构建的现代化移动端应用，采用文件路由系统和 Gluestack UI 组件库。

## 🚀 特性

- **文件路由系统**: 使用 Expo Router 实现直观的文件路由
- **现代化UI**: 基于 Gluestack UI 组件库，支持深色/浅色主题
- **类型安全**: 完整的 TypeScript 支持
- **跨平台**: 支持 iOS、Android 和 Web 平台
- **响应式设计**: 适配不同屏幕尺寸
- **组件化架构**: 可复用的UI组件系统

## 📱 应用结构

### 路由架构

```
app/
├── _layout.tsx              # 根布局
├── (auth)/                  # 认证相关路由
│   ├── _layout.tsx         # 认证布局
│   ├── login.tsx           # 登录页面
│   ├── register.tsx        # 注册页面
│   └── forgot-password.tsx # 忘记密码页面
├── (tabs)/                 # 主标签页路由
│   ├── _layout.tsx         # 标签页布局
│   ├── index.tsx           # 首页
│   ├── explore.tsx         # 发现页面
│   ├── favorites.tsx       # 收藏页面
│   └── profile.tsx         # 个人资料页面
├── (modals)/               # 模态框路由
│   ├── _layout.tsx         # 模态框布局
│   └── settings.tsx        # 设置页面
└── +not-found.tsx          # 404页面
```

### 组件结构

```
components/
├── ui/                     # UI组件库
│   ├── button/            # 按钮组件
│   ├── input/             # 输入框组件
│   ├── card/              # 卡片组件
│   ├── avatar/            # 头像组件
│   ├── badge/             # 徽章组件
│   ├── switch/            # 开关组件
│   └── ...                # 其他UI组件
├── Collapsible.tsx        # 可折叠组件
├── ExternalLink.tsx       # 外部链接组件
├── HapticTab.tsx          # 触觉反馈标签
├── HelloWave.tsx          # 动画组件
├── ParallaxScrollView.tsx # 视差滚动组件
├── ThemedText.tsx         # 主题文本组件
└── ThemedView.tsx         # 主题视图组件
```

## 🛠️ 技术栈

- **框架**: React Native 0.79.5
- **路由**: Expo Router 5.1.3
- **UI组件**: Gluestack UI
- **样式**: NativeWind (Tailwind CSS)
- **动画**: React Native Reanimated
- **图标**: Expo Symbols
- **字体**: Expo Font
- **状态管理**: React Hooks
- **类型检查**: TypeScript

## 📦 安装和运行

### 环境要求

- Node.js 18+
- npm 或 yarn
- Expo CLI
- iOS Simulator (macOS) 或 Android Emulator

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
# 启动所有平台
npm start

# 启动特定平台
npm run ios      # iOS
npm run android  # Android
npm run web      # Web
```

### 重置项目

```bash
npm run reset-project
```

## 🎨 设计系统

### 颜色主题

应用支持深色和浅色主题，主题颜色定义在 `constants/Colors.ts` 中：

```typescript
export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    tint: '#2f95dc',
    // ...
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    tint: '#fff',
    // ...
  },
};
```

### 组件使用

所有UI组件都基于 Gluestack UI，支持主题和响应式设计：

```tsx
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

<Button size="lg" variant="solid">
  <ButtonText>点击我</ButtonText>
</Button>
```

## 📱 页面功能

### 首页 (index.tsx)
- 用户欢迎区域
- 快捷功能入口
- 学习进度展示
- 推荐内容列表

### 发现页面 (explore.tsx)
- 搜索功能
- 分类筛选
- 内容推荐列表
- 收藏功能

### 收藏页面 (favorites.tsx)
- 收藏内容列表
- 内容管理
- 空状态处理

### 个人资料页面 (profile.tsx)
- 用户信息展示
- 统计数据
- 设置菜单
- 登出功能

### 认证页面
- 登录页面
- 注册页面
- 忘记密码页面

## 🔧 开发指南

### 添加新页面

1. 在 `app/` 目录下创建新的路由文件
2. 使用文件命名约定：
   - `page.tsx` - 页面组件
   - `_layout.tsx` - 布局组件
   - `+not-found.tsx` - 404页面

### 创建新组件

1. 在 `components/` 目录下创建组件文件
2. 使用 TypeScript 定义组件类型
3. 支持主题和响应式设计

### 样式指南

- 使用 NativeWind (Tailwind CSS) 进行样式设计
- 支持深色/浅色主题
- 响应式设计适配不同屏幕

### 状态管理

- 使用 React Hooks 进行状态管理
- 复杂状态考虑使用 Context API
- 异步操作使用 async/await

## 🚀 部署

### 构建生产版本

```bash
# 构建 iOS
expo build:ios

# 构建 Android
expo build:android

# 构建 Web
expo build:web
```

### 发布到应用商店

1. 配置应用信息 (`app.json`)
2. 构建生产版本
3. 提交到应用商店

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请创建 Issue 或联系开发团队。
