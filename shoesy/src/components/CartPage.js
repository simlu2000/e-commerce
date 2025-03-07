import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import CartProductCard from './CartProductCard';
import { Grid2 } from '@mui/material';
import Container from '@mui/material/Container';
import allproducts from '../utils/products'; 

function CartPage() {
    const { cartItems } = useCart();
    const [totPrice, setTotPrice] = useState(0);

    const handleCheckout = async () => {
        try {
            const cartItemsStripe = cartItems.map(item => ({
                priceId: item.priceId,
                quantity: item.quantity, // Usa la quantità corretta
            }));
            console.log('cartItemsStripe:', cartItemsStripe);

            const response = await fetch('http://localhost:3001/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cartItemsStripe }),
            });

            if (response.ok) {
                const { url } = await response.json();
                window.location.href = url;
            } else {
                const errorData = await response.json();
                console.error('Errore durante la richiesta di checkout:', errorData);
                alert('Checkout failed. Please try again.');
            }
        } catch (error) {
            console.error('Errore durante la richiesta di checkout:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    useEffect(() => {
      if (cartItems && cartItems.length > 0) {
          const total = cartItems.reduce((acc, item) => {
              const itemPrice = parseFloat(item.price);
              return acc + (isNaN(itemPrice) ? 0 : itemPrice * item.quantity);
          }, 0);
          setTotPrice(total);
          console.log("Cart Items: ", cartItems);
      } else {
          setTotPrice(0);
      }
  }, [cartItems]);

    return (
        <Container maxWidth="lg" sx={{ marginTop: '5%' }}>
            <Grid2 container spacing={7}>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item, index) => {
                        const product = allproducts.find(p => p.id === item.id); 
                        return (
                            <Grid2 item xs={12} sm={6} md={2.4} lg={2.4} sx={{ flexBasis: '20%' }} key={index}>
                                <CartProductCard product={product} /> 
                            </Grid2>
                        );
                    })
                ) : (
                    <p>Empty cart!</p>
                )}
            </Grid2>
            <div>
                <p>Total: ${totPrice.toFixed(2)}</p>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </Container>
    );
}

export default CartPage;