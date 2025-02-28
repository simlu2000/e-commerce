import React, { useState, useEffect } from 'react';
/*mui*/
import { extendTheme, styled, Container } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Grid2 } from '@mui/material';
/*components*/
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Filters from './Filters';
import ProductDetailsBox from './ProductDetailsBox';
/*other*/
import allproducts from '../utils/products';
import App from '../App';
import logo from "../utils/shoesylogo.png";

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'ProductsPage',
    title: 'Products',
    icon: <InventoryIcon />,
  },
  {
    segment: 'CartPage',
    title: 'Cart',
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function ProductsPage({ openDetailsBox, setOpenDetailsBox, onProductClick, selectedProduct }) {

  const router = useDemoRouter('/productspage');
  const demoWindow = undefined;

  const [searchedProduct, setSearchedProduct] = useState();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allproducts);
  const [brandFilter, setBrandFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');


  const handleSearch = (prod) => {
    setSearchedProduct(prod);
  }

  const handleBrandFilterChange = (brand) => {
    setBrandFilter(brand ? brand.brand : '');
  };

  const handleColorFilterChange = (color) => {
    setColorFilter(color ? color.color : '');
  };

  const handleSizeFilterChange = (size) => {
    setSizeFilter(size ? size.size : '');
  };

  const listSearchedProducts = products.filter((product) => {
    return searchedProduct
      ? product.name?.toLowerCase().includes(searchedProduct.toLowerCase())
      : true;
  })

  useEffect(() => {
    let filteredList = allproducts.filter((product) => {
      const nameMatch = product.name
        ? product.name.toLowerCase().includes(searchedProduct?.toLowerCase() || '')
        : true;

      const brandMatch = !brandFilter || (product.brand && product.brand.toLowerCase() === brandFilter.toLowerCase());

      const colorMatch = !colorFilter || (product.color && product.color.some((col) => col.toLowerCase() === colorFilter.toLowerCase()));

      const sizeMatch = !sizeFilter || (product.sizes && product.sizes.includes(parseInt(sizeFilter)));

      return nameMatch && brandMatch && colorMatch && sizeMatch;
    });
    setFilteredProducts(filteredList);
  }, [searchedProduct, brandFilter, colorFilter, sizeFilter]);

  useEffect(() => {
    setProducts(allproducts);
  }, []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <img src={logo} />,
        title: 'Shoesy',
      }}
    >
      <DashboardLayout>
        <PageContainer
          sx={{
            height: '100vh',
            width: '100vw',
            padding: '0',
          }}
        >
          {router.pathname === '/ProductsPage' && (
            <>
              <SearchBar onSearch={handleSearch} />
              <Filters
                onBrandFilterChange={handleBrandFilterChange}
                onColorFilterChange={handleColorFilterChange}
                onSizeFilterChange={handleSizeFilterChange}
              />
              <Container maxWidth="lg" sx={{ marginTop: '5%' }}>
                <Grid2 container spacing={7}>
                  {filteredProducts.map((product) => (
                    <Grid2 item xs={12} sm={6} md={2.4} lg={2.4} sx={{ flexBasis: '20%' }} key={product.id}>
                      <ProductCard
                        productId={product.id}
                        productImage={product.image}
                        productName={product.name}
                        productAlt={product.alt}
                        productColor={product.color}
                        productSizes={product.sizes}
                        openBox={() => onProductClick(product)}
                      />
                    </Grid2>
                  ))}
                  {openDetailsBox && selectedProduct && (
                    <ProductDetailsBox
                      open={openDetailsBox}
                      onClose={() => setOpenDetailsBox(false)}
                      product={selectedProduct}
                    />
                  )}
                </Grid2>
              </Container>
            </>
          )}

          {router.pathname === '/CartPage' && (
            <h1>CART</h1>
          )}

        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}