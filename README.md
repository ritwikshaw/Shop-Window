# Product Showcase App

Product Showcase App is a React-based application designed to advertise different products available in stores, malls, or shopping centers. This application includes features for displaying products with images and videos, an auto-scrolling carousel, and an admin interface for managing products.

## Features

- Display products with images or videos.
- Auto-scrolling carousel for product display.
- Admin interface to add, modify, and delete products.
- Image upload and storage in Firebase.
- Responsive design using Material-UI.
- State management using Redux and Saga.
- Animations using Framer Motion.

## Technologies Used

- React
- Firebase (Firestore and Storage)
- Redux
- Redux-Saga
- Material-UI
- Framer Motion
- react-responsive-carousel
- react-video-player

## Screens

### User Screens

1. **Screen 1**: Displays products in a grid layout with fade-in and fade-out animations.
2. **Screen 2**: Contains a video player and a vertical carousel for displaying product details.

### Admin Screens

1. **Product List**: Displays a list of products with options to edit or delete each product.
2. **Product Form**: Allows the admin to add or modify products, including uploading images.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/product-showcase-app.git
   cd product-showcase-app
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Configure Firebase:

   - Create a Firebase project in the Firebase console.
   - Enable Firestore and Storage.
   - Copy your Firebase config and paste it into a new file `src/firebaseConfig.js`:

     ```js
     const firebaseConfig = {
     	apiKey: 'YOUR_API_KEY',
     	authDomain: 'YOUR_AUTH_DOMAIN',
     	projectId: 'YOUR_PROJECT_ID',
     	storageBucket: 'YOUR_STORAGE_BUCKET',
     	messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     	appId: 'YOUR_APP_ID',
     }

     export default firebaseConfig
     ```

4. Start the development server:
   ```sh
   npm start
   ```

## Usage

### Admin Interface

1. Navigate to the Admin section.
2. Use the form to add new products by providing the product name, price, media type, and images.
3. Edit or delete existing products from the product list.

### User Interface

1. The main screen will display products in a grid layout.
2. Navigate between screens to view more details about the products, including images and videos.

## Code Structure

- `src/components`: Contains the React components for the application.
  - `Admin`: Components for the admin interface.
  - `Carousel`: Component for the auto-scrolling carousel.
  - `ProductCard`: Component to display individual product details.
  - `VideoPlayer`: Component to play product videos.
- `src/redux`: Contains Redux setup and Saga middleware.
- `src/firebaseConfig.js`: Firebase configuration.
- `src/App.js`: Main application component.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

Developed by Ritwik.
