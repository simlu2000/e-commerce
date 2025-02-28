import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ProductsPage from './ProductsPage';
import CartButton from './CartButton';
import {CartContext} from './CartContext';
import {useCart} from './CartContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDetailsBox({ open, onClose, product }) {
    const [selectedBrand, setSelectedBrand] = useState(product.brand);
    const [selectedName, setSelectedName] = useState(product.name);
    const [selectedCololors, setSelectedColors] = useState(product.color);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useCart(); //accedo a contesto carrello

    const handleSelectShoesSize = (event) => {
        setSelectedSize(event.target.value);
    }

    const handleSendToCart=()=>{
        if(!selectedSize){
            alert('Please select a size');
            return;
        }

        const selectedProduct = { //array di oggetti per prodotto selezionato
            id: product.id,
            brand: product.brand,
            name: product.name,
            color: product.color.join(', '),
            size: selectedSize,
            image: product.image,
            price:product.price,
        };

        addToCart(selectedProduct); //aggiorniamo\
        console.log('Product added to cart');
        alert('Product added to cart');
        onClose(); //chiudiamo dialog
    }

    if (!product) {
        return null; // or a loading state, or an empty component
    }

    return (

        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {product.name}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={onClose}>
                        close
                    </Button>
                </Toolbar>
            </AppBar>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                <img style={{ width: '40%', marginLeft: '1%', marginTop: '1%' }} src={product.image} alt={product.name}></img>

                <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <ListItemButton sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '2%', marginTop: '0' }}>
                        <ListItemText primary="Brand" secondary={product.brand} primaryTypographyProps={{ fontSize: '1.5rem' }} />
                        <ListItemText primary="Name" secondary={product.name} primaryTypographyProps={{ fontSize: '1.5rem' }} />
                        <ListItemText primary="Color" secondary={product.color.join(', ')} primaryTypographyProps={{ fontSize: '1.5rem' }} />
                        <ListItemText primary="Price" secondary={product.price} primaryTypographyProps={{ fontSize: '1.5rem' }} />

                        <select style={{ fontSize: '1.2rem', padding: '8px' }} onChange={(event)=>handleSelectShoesSize(event)}>
                            {product.sizes.map((size, index) => (
                                <option key={index} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </ListItemButton> 
                    <CartButton onClick={handleSendToCart}/>
                </List>                       
            </div>
        </Dialog>
    );
}