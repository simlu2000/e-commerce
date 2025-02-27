import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ProductCard({productId,productName,productImage,productAlt,productColor,productSizes}) {

  return (
    <Card sx={{ width:'250px',height:'450px',textAlign:'center'}}>
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
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Color: 
          {productColor.join(', ')}
          <br/>
          {productSizes.join(', ')}
        </Typography>
      </CardContent>
      <CardActions ableSpacing sx={{top:'5%'}}>
        <IconButton aria-label="add to cart">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <DescriptionIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
