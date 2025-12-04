# 🛒 README-SHOP

> **Your ultimate toolkit for creating beautiful, feature-rich GitHub README files**

Welcome to **README-SHOP** — a modern, intuitive web application for customizing and crafting stunning GitHub README files. Built with **React 18**, **Vite**, **Material UI**, and **Framer Motion**, this project is perfect for developers, learners, and open-source contributors who want to make their repositories stand out.

[![GitHub issues](https://img.shields.io/github/issues/narainkarthikv/readme-shop?style=flat-square)](https://github.com/narainkarthikv/readme-shop/issues)
[![GitHub forks](https://img.shields.io/github/forks/narainkarthikv/readme-shop?style=flat-square)](https://github.com/narainkarthikv/readme-shop/network)
[![GitHub stars](https://img.shields.io/github/stars/narainkarthikv/readme-shop?style=flat-square)](https://github.com/narainkarthikv/readme-shop/stargazers)
[![MIT License](https://img.shields.io/github/license/narainkarthikv/readme-shop?style=flat-square)](./LICENSE)
[![Version](https://img.shields.io/github/package-json/v/narainkarthikv/readme-shop?style=flat-square)](./package.json)

---

## 🌟 Why README-SHOP?

README-SHOP is a comprehensive README builder designed to help you **craft compelling documentation**, **showcase your projects**, and **improve repository visibility**. Whether you're a student, professional developer, or open-source maintainer, README-SHOP provides an intuitive interface for creating beautiful, feature-rich README files with zero friction.

✨ **Key Features:**

- 📝 **Live Preview** — See your markdown changes in real-time as you edit
- 🎨 **Customizable Templates** — Choose from professionally designed README templates
- 🏷️ **Badges & Icons** — Instantly add shields, badges, and skill icons
- 🎯 **Multiple Components** — Add GitHub stats, trophies, and interactive sections
- 📋 **Markdown Editor** — Powerful editor with syntax highlighting and formatting tools
- 💾 **Copy & Embed** — Easily copy markdown or embed widgets in your README
- ⚡ **Blazing Fast** — Powered by Vite for instant load times and hot reload
- 🌍 **Multi-Page Experience** — Features, Templates, Components, Help, and more
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile
- 🎨 **Dark/Light Themes** — Beautiful UI with customizable color schemes

---

## 📑 Table of Contents

- [Why README-SHOP?](#-why-readme-shop)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Development Standards](#-development-standards)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Contributors](#-contributors)
- [Support](#-support)
- [License](#-license)

---

## 🌐 Live Demo

👉 **[Live Preview](https://readme-shop.vercel.app/)** — Start building your perfect README now!

Experience the easiest way to create professional, eye-catching GitHub README files.

---

## 🛠️ Tech Stack

| Layer          | Technologies                                                   |
| -------------- | -------------------------------------------------------------- |
| **Frontend**   | React 18, Vite, Material UI (MUI), Framer Motion, React Router |
| **Markdown**   | Marked.js, DOMPurify                                           |
| **State**      | Zustand, Recoil                                                |
| **Styling**    | Emotion, Material UI, CSS-in-JS                                |
| **Tooling**    | ESLint, Semantic Release                                       |
| **Deployment** | Vercel                                                         |

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,materialui,javascript" />
</p>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) — [Download here](https://nodejs.org/)
- **npm** (v9.0.0 or higher) — Usually comes with Node.js
- **Git** — [Download here](https://git-scm.com/)

To check your versions:

```bash
node --version
npm --version
git --version
```

### Installation

1. **Fork the repository**

   Click the **Fork** button on the top-right corner of the [GitHub repository](https://github.com/narainkarthikv/readme-shop).

2. **Clone your fork**

   ```bash
   git clone https://github.com/<your-username>/readme-shop.git
   cd readme-shop
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Your app will be available at **[http://localhost:5173](http://localhost:5173)**

For production build:

```bash
npm run build
```

For preview build:

```bash
npm run preview
```

---

## 🗂️ Project Structure

```plaintext
readme-shop/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── data/
│   │       ├── iconsList.json        # Available icons collection
│   │       └── templates.json         # README templates
│   ├── components/
│   │   ├── CustomDrawer.jsx          # Navigation drawer
│   │   ├── EmbedButton.jsx           # Embed code button
│   │   ├── EmbedPanel.jsx            # Embed preview panel
│   │   ├── ErrorBoundary.jsx         # Error handling
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Icons.jsx                 # Icon display component
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── SvgBanners.jsx            # Banner components
│   │   ├── Templates.jsx             # Templates component
│   │   ├── common/                   # Reusable components
│   │   ├── Components/               # Component showcase
│   │   ├── Home/                     # Home page components
│   │   ├── Output/                   # Editor & preview
│   │   ├── Templates/                # Template components
│   │   └── ui/                       # UI primitives
│   ├── features/
│   │   ├── github/                   # GitHub stats features
│   │   ├── markdown/                 # Markdown editor features
│   │   └── templates/                # Template management
│   ├── hooks/
│   │   ├── common.js                 # Common hooks
│   │   ├── useClipboard.js           # Clipboard utility hook
│   │   └── useTemplates.js           # Template hooks
│   ├── pages/
│   │   ├── Components.jsx            # Components page
│   │   ├── Home.jsx                  # Home page
│   │   ├── Output.jsx                # Editor page
│   │   └── TemplatesPage.jsx         # Templates page
│   ├── routes/
│   │   └── index.js                  # Route configuration
│   ├── store/
│   │   └── useShopStore.jsx          # Global state management
│   ├── styles/
│   │   └── index.css                 # Global styles
│   ├── theme/
│   │   ├── index.js                  # Theme configuration
│   │   └── theme.js                  # Theme definitions
│   ├── utils/
│   │   ├── helpers.js                # Utility functions
│   │   ├── loadAndFilter.js          # Data filtering
│   │   └── config/
│   │       └── constants.js          # App constants
│   ├── App.jsx                       # Root component
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Global styles
├── index.html
├── package.json
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint configuration
├── README.md
└── LICENSE
```

---

## 📝 Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint to check code style
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Release

```bash
# Create a semantic version release
npm run release
```

---

## 🔧 Development Standards

### Code Style

- **Formatting & Linting:**
  - ESLint for code quality checks
  - 2-space indentation
  - Max line length: 100 characters
  - Use semicolons in all statements

- **React Best Practices:**
  - Use functional components with React Hooks
  - Keep components small and reusable
  - Proper error boundaries
  - Memoization for performance optimization
  - Use MUI components consistently

- **JavaScript/JSX:**
  - ES6+ syntax (arrow functions, destructuring, etc.)
  - Meaningful variable and function names
  - Avoid console.log() in production code
  - Comment complex logic with inline comments

- **Documentation:**
  - JSDoc comments for components and functions
  - Inline comments for complex logic
  - Keep README updated
  - Document component props and usage

### Git Workflow

- **Branch Naming:**
  - Features: `feature/description` (e.g., `feature/github-stats-widget`)
  - Bugs: `fix/description` (e.g., `fix/markdown-parsing`)
  - Docs: `docs/description` (e.g., `docs/update-readme`)
  - Chores: `chore/description` (e.g., `chore/update-dependencies`)

- **Commits:**
  - Follow [Conventional Commits](https://www.conventionalcommits.org/) specification
  - Examples:
    - `feat: add GitHub trophy widget component`
    - `fix: resolve markdown preview rendering issue`
    - `docs: update installation guide`
    - `refactor: optimize template loading`
    - `style: format code with eslint`

- **Pull Requests:**
  - Keep PRs small and focused on one feature/fix
  - Link related issues using `Closes #123`
  - Provide clear description and context
  - Request reviews from maintainers
  - Ensure all checks pass before merging

### Code Review Checklist

Before submitting a PR, ensure:

- [ ] Code follows project style guidelines
- [ ] Changes are well-documented with comments
- [ ] No console.log() statements in production code
- [ ] No breaking changes without documentation
- [ ] Performance impact has been considered
- [ ] Mobile responsiveness is maintained
- [ ] MUI components are used consistently
- [ ] State management is properly handled

---

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the correct URL.

```bash
# To find what's using port 5173
lsof -i :5173

# If needed, kill the process
kill -9 <PID>
```

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules

# Reinstall dependencies
npm install
```

### Build Errors

```bash
# Check Node.js version (should be 18+)
node --version

# Clear Vite cache
rm -rf node_modules/.vite

# Reinstall and rebuild
npm install
npm run build
```

### Hot Reload Not Working

```bash
# Ensure you're running the dev server correctly
npm run dev

# Check if file watchers are working
cat /proc/sys/fs/inotify/max_user_watches

# If limit is low, increase it (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Markdown Preview Issues

- Check that DOMPurify is properly configured for security
- Verify the Marked.js version is compatible
- Clear browser cache and reload the page

---

## 🤝 Contributing

We ❤️ contributions! Here's how to get started:

1. **Fork the repository**

   Click the **Fork** button on [GitHub](https://github.com/narainkarthikv/readme-shop).

2. **Clone your fork**

   ```bash
   git clone https://github.com/<your-username>/readme-shop.git
   cd readme-shop
   ```

3. **Create a feature branch**

   ```bash
   git switch -c feature/your-feature-name
   ```

4. **Make your changes**
   - Write clean, well-documented code
   - Follow the development standards above
   - Test your changes locally
   - Ensure your code passes linting: `npm run lint -- --fix`

5. **Stage and commit**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch and provide a clear description
   - Reference any related issues (e.g., "Closes #42")
   - Wait for maintainer review and feedback

### Types of Contributions We Welcome

- 🎯 **New Features** — Add functionality that improves README creation
- 🐛 **Bug Fixes** — Help us squash bugs and improve stability
- 📖 **Documentation** — Improve guides, comments, and examples
- 🎨 **UI/UX Improvements** — Make the interface more beautiful and intuitive
- ⚡ **Performance** — Optimize speed and efficiency
- 🧪 **Tests** — Add unit or integration tests
- 🌍 **New Templates** — Create amazing README templates for the community

---

## 👥 Contributors

Thanks to everyone who has helped make README-SHOP awesome! 💪

<a href="https://github.com/narainkarthikv/readme-shop/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=narainkarthikv/readme-shop" />
</a>

See the [Contributors Page](https://github.com/narainkarthikv/readme-shop/blob/main/Contributors.md) for the full list.

### How to Add Yourself

When your PR is merged, add yourself to the `Contributors.md` file following the format in that file.

---

## �� Support

If you find README-SHOP helpful:

- ⭐ **Star the repository** on GitHub
- 🐛 **Report bugs** through [Issues](https://github.com/narainkarthikv/readme-shop/issues)
- 💡 **Suggest features** in [Discussions](https://github.com/narainkarthikv/readme-shop/discussions)
- 📢 **Share** README-SHOP with your network
- 💬 **Participate** in community discussions

### Special Thanks

A heartfelt thank you to:

- [`Ileriayo`](https://github.com/Ileriayo) for the [Markdown Badges](https://github.com/Ileriayo/markdown-badges)
- [`tandpfun`](https://github.com/tandpfun) for the [Skill Icons](https://github.com/tandpfun/skill-icons)
- The React and Material UI communities for their amazing tools

---

## 📜 License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for full details.

**Summary:** You are free to use, modify, and distribute this software for any purpose, including commercial use.

---

## 🔗 Quick Links

- **Website:** [readme-shop.vercel.app](https://readme-shop.vercel.app/)
- **GitHub Repository:** [narainkarthikv/readme-shop](https://github.com/narainkarthikv/readme-shop)
- **Issues:** [Report a bug or request a feature](https://github.com/narainkarthikv/readme-shop/issues)
- **Discussions:** [Join the community](https://github.com/narainkarthikv/readme-shop/discussions)
- **Contributing Guide:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Code of Conduct:** [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- **Changelog:** [CHANGELOG.md](./CHANGELOG.md)

---

## 📚 Additional Resources

- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)
- [Shields.io - Badge Creation](https://shields.io/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Material UI Documentation](https://mui.com/)

---

## 💡 Final Thoughts

We're building **README-SHOP** as a community-driven tool to help developers create professional, engaging GitHub README files with ease. Your code, ideas, and feedback make it stronger every day.

Whether you're fixing a typo, improving performance, adding a new template, or building amazing features — **every contribution matters!** 🏗️💚

Let's build the best README builder together! 🚀

---

<p align="center">
  <strong>Made with ❤️ by the README-SHOP community</strong>
</p>

---
