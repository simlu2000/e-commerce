import React, {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CartProductCard({ productId, productName, productImage, productAlt, productColor, productSize,productPrice }) {

  return (
    <Card sx={{ width: '250px', height: '400px', textAlign: 'center' }}>
      <CardHeader title={productName} />
      <CardMedia component="img" height="200" image={productImage} alt={productAlt} />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Color: {productColor}
          <br />
          Size: {productSize}
          <br/>
          Price: {productPrice}
        </Typography>
      </CardContent>
    </Card>
  );
}
