# dago-ideas

A minimalist static site for sharing ideas, built with Eleventy and optimized for performance.

## Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/) (11ty) v3.1.2
- **CSS Preprocessor**: [Sass](https://sass-lang.com/) v1.93.0
- **Markdown Processing**: [markdown-it](https://github.com/markdown-it/markdown-it) v14.1.0
- **Build Tools**: npm scripts for development and production

## Features

- **Inline CSS**: Automatically compiles and inlines minified Sass for optimal performance
- **Live Reload**: Development server with automatic rebuilds on file changes
- **Favicon Support**: Configured with proper passthrough copying
- **Environment-aware Caching**: CSS compilation caching in production, fresh rebuilds in development
- **Responsive Design**: Mobile-first approach with clean typography

## Project Structure

```
dago-ideas/
├── _includes/           # Eleventy layouts and partials
│   ├── base.html       # Main HTML layout
│   └── idejos.md       # Ideas content partial
├── _site/              # Generated static site (build output)
├── assets/
│   ├── icons/          # Favicon and icon assets
│   │   └── dago-icon.png
│   ├── img/            # Images
│   └── styles/         # Sass partials
│       ├── _reset.scss
│       ├── _theme.scss
│       └── _variables.scss
├── bundle.scss         # Main Sass entry point
├── index.md            # Homepage content
├── .eleventy.js        # Eleventy configuration
└── package.json        # Dependencies and scripts
```

## How It Works

### CSS Pipeline
1. **Sass Compilation**: `bundle.scss` imports all style partials from `assets/styles/`
2. **Inline Optimization**: Eleventy shortcode compiles Sass and inlines it as `<style>` tags
3. **Minification**: CSS is compressed using Sass's built-in compression
4. **Caching**: Smart caching system - cached in production, invalidated on changes during development

### Development Workflow
1. **Watch Mode**: `npm start` runs both Eleventy server and Sass watcher in parallel
2. **Auto-rebuild**: Changes to `.md`, `.html`, or `.scss` files trigger automatic rebuilds
3. **Live Reload**: Browser automatically refreshes when files change

### Build Process
- Eleventy processes Markdown content using the `base.html` layout
- Sass files are compiled and inlined directly into HTML
- Assets (favicon, images) are copied to the output directory
- Final static site is generated in `_site/` directory

## Development

### Prerequisites
- Node.js (recent version)
- npm

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```
   This runs:
   - Eleventy dev server with live reload at `http://localhost:8080`
   - Sass watcher for CSS compilation

3. **Build for production**:
   ```bash
   npx @11ty/eleventy
   ```

### Available Scripts

- `npm start` - Start development server with live reload and Sass watching
- `npm run watch:eleventy` - Run only Eleventy dev server
- `npm run watch:sass` - Run only Sass watcher (outputs to `_site/bundle.css`)

## Configuration

### Eleventy (`.eleventy.js`)
- Custom Sass compilation with inline CSS shortcode
- Watch targets for automatic rebuilds
- Passthrough copy for static assets
- Environment-aware caching system

### Sass (`bundle.scss`)
- Modular architecture with partial imports
- Compressed output for production
- Mobile-first responsive design patterns

## Content Management

### Adding Ideas
Edit `_includes/idejos.md` to add new ideas or content. The file is automatically included in the homepage.

### Styling
Modify Sass files in `assets/styles/`:
- `_variables.scss` - Colors, fonts, spacing variables
- `_reset.scss` - CSS reset and base styles  
- `_theme.scss` - Component and layout styles

### Layout Changes
Edit `_includes/base.html` for structural HTML changes or `index.md` for homepage content.

## Deployment

The site generates static files in `_site/` that can be deployed to any static hosting service:

- **GitHub Pages**: Push to `gh-pages` branch or configure Pages to build from main
- **Netlify**: Connect repository and set build command to `npx @11ty/eleventy`
- **Vercel**: Import project with auto-detected Eleventy settings
- **Traditional hosting**: Upload `_site/` contents to web server

## Performance Optimizations

- **Inline CSS**: Eliminates render-blocking external stylesheets
- **Minified output**: Compressed CSS and optimized HTML
- **Minimal dependencies**: Lightweight build with essential tools only
- **Fast builds**: Incremental compilation and smart caching

## License

ISC