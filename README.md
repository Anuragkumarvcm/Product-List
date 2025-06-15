# Angular Product Catalog

This is a simple Angular project that displays a catalog of products. The project demonstrates how to use Angular components, services, and models, and how to import and use JSON data in an Angular application.

## Features
- Product listing with images
- Product details using a model
- Responsive UI with basic styles
- Static product data loaded from a JSON file

## Project Structure
```
products/
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── src/
    ├── favicon.ico
    ├── index.html
    ├── main.ts
    ├── styles.css
    ├── app/
    │   ├── app.component.css
    │   ├── app.component.html
    │   ├── app.component.spec.ts
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   ├── data/
    │   │   └── products.json
    │   └── model/
    │       └── product.model.ts
    └── assets/
        └── images/
            ├── analog-watch.jpg
            ├── black-bag.jpg
            ├── bluetooth-speaker.jpg
            ├── laptop-stand.jpg
            ├── led-monitor.jpg
            ├── running-shoes.jpg
            ├── smartphone.jpg
            ├── sunglasses.webp
            ├── wireless-mouse.jpg
            └── yoga-mat.webp
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)
- Angular CLI (v12 or above)

### Installation
1. Clone the repository or download the project files.
2. Navigate to the `products` directory:
   ```sh
   cd products
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application
Start the development server:
```sh
ng serve
```
Open your browser and go to `http://localhost:4200/` to view the app.

## Usage
- Browse the list of products on the main page.
- Each product displays an image, name, and other details.
- Product data is loaded from `src/app/data/products.json`.

## Project Details
- **Framework:** Angular
- **Language:** TypeScript
- **Data Source:** Static JSON file
- **Images:** Located in `src/assets/images/`

## License
This project is for educational purposes.
