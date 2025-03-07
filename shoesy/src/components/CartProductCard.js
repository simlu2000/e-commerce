import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useCart } from './CartContext'; // Importa useCart

export default function CartProductCard({ product }) {

    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <Card sx={{ width: '250px', height: '400px', textAlign: 'center' }}>
            <CardHeader title={product.name} />
            <CardMedia component="img" height="200" image={product.image} alt={product.alt} /> {/* Usa product.image, product.alt */}
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Color: {product.color} 
                    <br />
                    Size: {product.sizes} 
                    <br />
                    Price: {product.price} 
                </Typography>
            </CardContent>
        </Card>
    );
}