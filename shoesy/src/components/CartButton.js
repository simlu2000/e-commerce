import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

export default function CartButton({ onClick }) {
    return (
        <Stack spacing={2} direction="row" sx={{ marginTop: '15%' }}>
            <Button variant="contained" onClick={onClick}>
                Add to cart
                <ShoppingCartIcon />
            </Button>
        </Stack>
    );
}