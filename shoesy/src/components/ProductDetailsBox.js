import * as React from 'react';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDetailsBox({ open, onClose, product }) {

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
            <List sx={{display:'flex',flexDirection:'row',alignItems:'flex-start'}}>
                <img style={{ width: '40%', marginLeft:'1%', marginTop:'1%'}} src={product.image}></img>
                <ListItemButton sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginLeft:'2%', marginTop:'0'}}>
                    <ListItemText primary="Brand" secondary={product.brand} />
                    <ListItemText primary="Name" secondary={product.name} />
                    <ListItemText primary="Color" secondary={product.color.join(', ')} />
                    <ListItemText primary="Sizes" secondary={product.sizes.join(', ')} />
                </ListItemButton>

                <Divider />
            </List>
        </Dialog>
    );
}