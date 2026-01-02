# 555Mix Maung Calculator - Landing Page

A modern, responsive React landing page for the 555Mix Maung Calculator app built with Vite, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, glassmorphism UI with animated gradients
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Built with Vite for blazing-fast development and build times
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Bilingual**: Burmese and English content

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 🛠️ Installation

### Prerequisites

- Node.js 16+ and npm/yarn

### Steps

1. **Clone or extract the project**
```bash
cd landing-page
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The app will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
# or
yarn build
```

5. **Preview production build**
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
landing-page/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Screenshots.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── Download.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* Purple shades */ },
  accent: { /* Amber/Gold shades */ }
}
```

### Content

Edit the component files in `src/components/` to update:
- Hero section text and CTAs
- Features list
- Testimonials
- FAQ questions and answers
- Download links

### Images

Replace placeholder screenshots in the `Screenshots.jsx` component with actual app screenshots.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

### Custom Server

1. Build: `npm run build`
2. Upload the `dist` folder to your server
3. Point your web server to serve from the `dist` directory

## 🔧 Configuration

### Vite Config

Edit `vite.config.js` for build options:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Base public path
  server: {
    port: 3000,
    open: true
  }
})
```

### Tailwind Config

Customize Tailwind in `tailwind.config.js`:

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Your customizations
    }
  }
}
```

## 📱 Responsive Breakpoints

The landing page is responsive with these breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP format and lazy loading
2. **Code Splitting**: React lazy loading for heavy components
3. **Font Loading**: Use `font-display: swap` for custom fonts
4. **Bundle Analysis**: Run `npm run build -- --analyze`

## 🐛 Troubleshooting

### Dev server not starting

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
# Clear cache
rm -rf node_modules/.vite
npm run dev
```

### Styling issues

```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/index.css -o ./dist/output.css
```

## 📝 TODO

- [ ] Add actual app screenshots
- [ ] Connect download buttons to real app stores
- [ ] Add Google Analytics
- [ ] Implement newsletter signup
- [ ] Add more testimonials
- [ ] Create blog section
- [ ] Add video demo
- [ ] Set up A/B testing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons from React Icons
- Animations from Framer Motion

## 📞 Support

For issues or questions:
- Email: support@555mix.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)

---

Made with ❤️ for 555Mix users
