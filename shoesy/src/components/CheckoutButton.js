import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Payment from '@mui/icons-material/Payment';

export default function CheckoutButton({ tot, onClick }) {
    return (
        <Stack spacing={2} direction="row" sx={{ marginTop: '5%' }}>
            <Button type="submit" variant="contained" onClick={onClick}>
                <Payment />
                Pay ${tot !== undefined && tot !== null ? tot : '0'}
            </Button>
        </Stack>
    );
}