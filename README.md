# Noah Mathew - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and professional information.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase**: Display projects with links to GitHub repositories, demos, and PDFs
- **Easy to Customize**: Simple structure makes it easy to add your own projects and content

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required

### Adding Projects

To add your projects, edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        title: "My Awesome Project",
        description: "A brief description of what the project does and technologies used.",
        tags: ["JavaScript", "React", "Node.js"],
        links: {
            github: "https://github.com/username/repo",
            demo: "https://demo-url.com",
            pdf: "path/to/document.pdf"  // Optional
        }
    },
    // Add more projects here...
];
```

### Project Object Structure

Each project object can have the following properties:

- **title** (required): The name of your project
- **description** (required): A description of the project
- **tags** (optional): Array of technology tags (e.g., ["React", "Python", "IoT"])
- **links** (optional): Object containing:
  - `github`: Link to GitHub repository
  - `demo`: Link to live demo
  - `pdf`: Path to PDF document

### Updating Contact Information

Edit the contact links in `index.html`:

- Update the `href` attribute of `#githubLink` with your GitHub profile URL
- Update the `href` attribute of `#emailLink` with your email address
- Update the `href` attribute of `#linkedinLink` with your LinkedIn profile URL

### Adding PDFs

1. Create a `docs` or `pdfs` folder in the project root
2. Place your PDF files in that folder
3. Reference them in project links as `"docs/filename.pdf"` or `"pdfs/filename.pdf"`

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Colors

Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --secondary-color: #64748b;
    /* ... more variables */
}
```

### Fonts

The site uses Google Fonts (Inter). To change the font, update the `<link>` tag in `index.html` and the `font-family` in `styles.css`.

## Deployment (Free Hosting Options)

### Option 1: GitHub Pages (Recommended - 100% Free)

**Step-by-step instructions:**

1. **Create a GitHub repository:**
   - Go to [GitHub.com](https://github.com) and sign in
   - Click the "+" icon in the top right → "New repository"
   - Name it `portfolio` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - **Don't** initialize with README (we already have one)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   # Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   
   # Rename branch to main (GitHub Pages prefers 'main')
   git branch -M main
   
   # Push your code
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** (top menu)
   - Scroll down to **Pages** (left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 1-2 minutes for deployment

4. **Your site is live!**
   - Visit: `https://YOUR_USERNAME.github.io/portfolio`
   - It may take a few minutes to go live initially

**Note:** After making changes, just commit and push:
```bash
git add .
git commit -m "Update portfolio"
git push
```

### Option 2: Netlify (Free - Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com) and sign up (free)
2. Drag and drop your `portfolio` folder onto Netlify
3. Your site is instantly live with a random URL
4. You can customize the domain name in settings

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Import your GitHub repository
3. Vercel automatically detects it's a static site
4. Click deploy - your site is live!

### Option 4: Cloudflare Pages (Free)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Select the repository and branch
4. Deploy - your site is live!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

