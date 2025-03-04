import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import brands from '../utils/brands';
import sizes from '../utils/sizes';
import colors from '../utils/colors';
import { setBrandFilter, setColorFilter, setSizeFilter } from '../redux/actions/filterActions';

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

function Filters() {
  const dispatch = useDispatch();
  const outerTheme = useTheme();

  const handleChangeBrand = (event, value) => {
    dispatch(setBrandFilter(value ? value.brand : ''));
  };

  const handleChangeColor = (event, value) => {
    dispatch(setColorFilter(value ? value.color : ''));
  };

  const handleChangeSize = (event, value) => {
    const sizeValue = value ? parseInt(value.size) : '';
    dispatch(setSizeFilter(sizeValue));
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Stack sx={{ width: '30%' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            width: '100%',
          }}
        >
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

function ColorSelect({ onChange }) {
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

export default connect()(Filters); 