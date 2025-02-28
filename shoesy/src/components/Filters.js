import React, { useState } from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import brands from '../utils/brands';
import sizes from '../utils/sizes';
import colors from '../utils/colors';
// Theme.ts
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: (props, option, state, ownerState) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                sx={{
                  borderRadius: '8px',
                  margin: '5px',
                  [`&.${autocompleteClasses.option}`]: {
                    padding: '8px',
                  },
                }}
                component="li"
                {...optionProps}
              >
                {ownerState.getOptionLabel(option)}
              </Box>
            );
          },
        },
      },
    },
  });

export default function Filters({ onBrandFilterChange, onColorFilterChange, onSizeFilterChange }) {
  // useTheme is used to determine the dark or light mode of the docs to maintain the Autocomplete component default styles.
  const outerTheme = useTheme();
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const handleChangeBrand = (event, value) => {
    setSelectedBrand(value);
    onBrandFilterChange(value);
  }

  const handleChangeColor = (event, value) => {
    setSelectedColor(value);
    onColorFilterChange(value);
  }

  const handleChangeSize = (event, value) => {
    const sizeValue = value ? parseInt(value.size) : '';
    setSelectedSize(sizeValue);
    onSizeFilterChange(sizeValue);
  }

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Stack sx={{ width: '30%' }}>
        <Box sx={{
          display: 'flex',
          gap: '20px',
          width: '100%',
        }}>
          <Box sx={{ flexGrow: 1 }}>
            <BrandSelect onChange={handleChangeBrand} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <ColorSelect onChange={handleChangeColor} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SizeSelect onChange={handleChangeSize} />
          </Box>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

function BrandSelect({ onChange }) {
  return (
    <Autocomplete
      options={brands}
      getOptionLabel={(option) => `${option.brand}`}
      disableCloseOnSelect
      onChange={(event, value) => onChange(value)}
      renderInput={(params) => (
        <TextField {...params} label="Choose a brand" variant="standard" sx={{ width: '100%' }} />
      )}
    />
  );
}
function ColorSelect({ onChange}) {
  return (
    <Autocomplete
      options={colors}
      getOptionLabel={(option) => `${option.color}`}
      disableCloseOnSelect
      onChange={(event, value) => onChange(value)}
      renderInput={(params) => (
        <TextField {...params} label="Choose a color" variant="standard" sx={{ width: '100%' }} />
      )}
    />
  );
}

function SizeSelect({ onChange }) {
  return (
    <Autocomplete
      options={sizes}
      getOptionLabel={(option) => `${option.size}`}
      disableCloseOnSelect
      onChange={(event, value) => onChange(value)}      
      renderInput={(params) => (
        <TextField {...params} label="Choose a size" variant="standard" sx={{ width: '100%' }} />
      )}
    />
  );
}

