# Precious Metals Tracker

A frontend for displaying metal prices and related news.

This project provides a web interface to display real-time metal prices, such as gold, silver, and platinum. It also aggregates and presents relevant financial news articles. Users can utilize this project to stay informed about market fluctuations and economic events impacting precious metal values.

## Tech Stack

* **CSS Framework:** Tailwind CSS
* **JavaScript Libraries:** jQuery, Slick Carousel, Highcharts
* **Build Tools:** Tailwind CSS CLI

## Quick Start

1. **Install Dependencies:**
 ```bash
 npm install
 ```
2. **Run Development Server:**
 ```bash
 npm run dev
 ```
 This command will watch for changes in `./css/input.css` and compile them to `./css/output.css`, automatically rebuilding the CSS file as you make modifications.

## Project Structure

```
.
├── css/
│ ├── input.css
│ ├── output.css
│ └── slick.css
├── js/
│ ├── blogs.js
│ ├── chartSection.js
│ ├── contact-us-form.js
│ ├── faq.js
│ ├── script.js
│ └── slick.min.js
├── pages/
│ ├── about-us.html
│ ├── blogs.html
│ ├── chart.html
│ ├── contact-us.html
│ ├── faq.html
│ └── index.html
├── assets/
│ ├── fonts/
│ └── icons/
├── vendor/
│ └── highchartsJS/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vercel.json
```

## Key Concepts

* **Tailwind CSS Configuration (`css/input.css`):** This file imports Tailwind CSS and defines custom theme variables, fonts, and utility classes. It's the central point for styling and theming.
* **JavaScript for Interactivity (`js/script.js`):** This script handles core frontend functionalities like dark mode toggling, mobile menu interactions, and language direction changes.
* **Dynamic Content Loading (`js/blogs.js`, `js/chartSection.js`):** These files are responsible for fetching and displaying dynamic data, such as blog posts and metal prices, on their respective pages.
* **Third-Party Libraries (`vendor/`, `js/slick.min.js`):** This directory contains external libraries like Highcharts for charting and Slick Carousel for sliders, which are integrated into the project.

## License

This project is not currently associated with a LICENSE file.
