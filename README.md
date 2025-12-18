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

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select the main branch as the source
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect your Git repository
- **Vercel**: Import your Git repository
- **Any static hosting service**: Upload all files to your hosting provider

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

