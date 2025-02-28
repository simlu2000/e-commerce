import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import CartProductCard from './CartProductCard';
import { Grid2 } from '@mui/material';
import Container from '@mui/material/Container';

function CartPage() {
  const { cartItems } = useCart();
  const [totPrice, setTotPrice] = useState(0);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price); //verifico che il prezzo sia un numero
        return acc + (isNaN(itemPrice) ? 0 : itemPrice); 
      }, 0);
      setTotPrice(total);
    } else {
      setTotPrice(0); 
    }
  }, [cartItems]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: '5%' }}>
      <Grid2 container spacing={7}>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Grid2 item xs={12} sm={6} md={2.4} lg={2.4} sx={{ flexBasis: '20%' }} key={index}>
              <CartProductCard
                productId={item.id}
                productImage={item.image}
                productName={item.name}
                productAlt={item.alt}
                productColor={item.color}
                productSize={item.size}
                productPrice={item.price}
              />
            </Grid2>
          ))
        ) : (
          <p>Empty cart!</p>
        )}
      </Grid2>
      <h2>Total Price: ${totPrice.toFixed(2)}</h2>
    </Container>
  );
}

export default CartPage;
