import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';


export default function ProductCard({ productId, productName, productImage, productAlt, productColor, productSizes, openBox,productPrice}) {

  return (
    <Card sx={{ width: '250px', height: '400px', textAlign: 'center' }}>
      <CardHeader
        title={productName}
      />
      <CardMedia
        component="img"
        height="200"
        image={productImage}
        alt={productAlt}
      />
      <CardContent>
        {/*<Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Color:
          {productColor.join(', ')}
          <br />
          {productSizes.join(', ')}
        </Typography>*/}
        <Typography variant='body2'>{productPrice}$</Typography>
      </CardContent>
      <CardActions sx={{ top: '5%' }}>
        <IconButton aria-label="product details" onClick={openBox}>
          <DescriptionIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
