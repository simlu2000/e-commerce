import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CtaButton({ctaText,onClick}) {
  return (
    <Stack spacing={2} direction="row" >
      <Button variant="outlined" onClick={onClick}>{ctaText}</Button>
    </Stack>
  );
}