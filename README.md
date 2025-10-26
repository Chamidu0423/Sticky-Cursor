# Sticky Cursor Effect

A smooth, interactive sticky cursor animation built with GSAP and JavaScript. This demo features elastic cursor tracking and hover effects on menu icons, creating a modern, engaging user interface.

## ✨ Features

- **Elastic Cursor Tracking**: Smooth, physics-based cursor movement with GSAP animations
- **Interactive Menu Icons**: Icons that react elastically to mouse proximity and movement
- **Custom Bubble Cursor**: A white bubble cursor that scales and rotates based on interaction
- **Responsive Design**: Grid-based layout with clean, minimal styling
- **Dark Theme**: Modern dark color scheme with subtle grid overlays

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and SVG icons
- **CSS3**: Custom properties, flexbox, and mix-blend-mode
- **JavaScript (ES6)**: Class-based architecture with event handling
- **GSAP**: High-performance animations and easing
- **Vecteur**: Vector mathematics for smooth cursor calculations

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for loading external libraries (GSAP, Vecteur)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sticky-cursor.git
   cd sticky-cursor
   ```

2. Open `index.html` in VS Code and right-click on the file, then select "Open with Live Server" (requires the Live Server extension installed).

## 📖 Usage

- Move your mouse around the page to see the elastic cursor effect
- Hover over the menu icons to trigger the sticky animations
- The cursor bubble scales and rotates based on distance from interactive elements

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --background-color: hsla(230, 55%, 4%, 1);
  --toggle-color: hsla(230, 25%, 75%, 1);
  --line-color: hsla(230, 25%, 15%, .75);
  --dot-color: hsla(230, 25%, 90%, 1);
}
```

### Adjusting Animation Parameters
Modify the `ElasticCursor` class in `script.js`:
- `ease`: Controls animation smoothness (0.1 = smooth, higher = snappier)
- `duration`: Animation duration in GSAP tweens
- Scale multipliers: Adjust the `0.15`, `0.2` values for different elastic behaviors

### Adding More Icons
Add new icon buttons in `index.html` with the `data-sticky` attribute:
```html
<div class="icon-btn" data-sticky>
  <svg>...</svg>
  <div data-sticky-area></div>
</div>
```

## 📁 Project Structure

```
sticky-cursor/
├── index.html      # Main HTML file
├── styles.css      # CSS styles and animations
├── script.js       # JavaScript logic and GSAP animations
└── README.md       # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Professional-grade JavaScript animation
- [Vecteur](https://github.com/davidfig/vecteur) - 2D vector math library
- Icons from [Feather Icons](https://feathericons.com/)

---

**Demo**: [Live Demo Link] | **Tutorial**: [YouTube Tutorial Link]</content>
<filePath>c:\Users\User\Desktop\Sticky-Cursor\README.md