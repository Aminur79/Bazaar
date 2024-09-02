const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');  // Import axios
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// URL for Fake Store API
const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
