import React from 'react';
import { useCart } from './CartContext';
import CartProductCard from './CartProductCard';

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartProductCard
            key={index}
            productId={item.id}
            productImage={item.image}
            productName={item.name}
            productAlt={item.alt}
            productColor={item.color}
            productSize={item.size}
          />
        ))
      ) : (
        <p>Empty cart!</p>
      )}
    </div>
  );
}

export default CartPage;