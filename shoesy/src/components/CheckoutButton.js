import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Payment from '@mui/icons-material/Payment';

export default function CheckoutButton({ onClick, priceToPay }) {
    return (
        <Stack spacing={2} direction="row" sx={{ marginTop: '5%' }}>
            <Button variant="contained" onClick={onClick}>
                <Payment />
                Pay ${priceToPay}
            </Button>
        </Stack>
    );
}