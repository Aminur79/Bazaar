const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle CORS
app.use(cors());

// URL for Fake Store API
const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products';

// Route to get men's products
app.get('/api/men/products', async (req, res) => {
    try {
        // Fetch data from Fake Store API
        const response = await axios.get(FAKE_STORE_API_URL);
        const products = response.data;

        // Log categories for debugging
        console.log('Categories from API:', products.map(product => product.category));

        // Filter products to include only those in the "Men\'s Clothing" category
        const menProducts = products.filter(product =>
            product.category.toLowerCase() === 'men\'s clothing'
        );

        // Send filtered products as the response
        res.json(menProducts);
    } catch (error) {
        // Log and handle any errors that occur
        console.error('Error fetching products:', error.message);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
