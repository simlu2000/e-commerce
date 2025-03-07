import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
//dispatch invia azione a store
//quando invio azione, redux chiama i reducer con l'azione e stato corrente
//i reducer aggiornano lo stato in base all'azione e restituiscono nuovo stato
/*mui*/
import { extendTheme, styled, Container, Typography } from '@mui/material';
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
import WelcomeText from './WelcomeText';
import CtaButton from './CtaButton';
/*other*/
import allproducts from '../utils/products';
import App from '../App';
import logo from "../utils/shoesylogo.png";
import CartPage from './CartPage';
import '../App.css';

/*redux*/
import { setSearchedProduct, setFilteredProducts, setSelectedProduct, closeDetailsBox, setDiscover, toggleDiscover } from '../redux/actions/productActions';
import { setBrandFilter, setColorFilter, setSizeFilter } from '../redux/actions/filterActions';

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

function ProductsPage() {
  const dispatch = useDispatch();
  const router = useDemoRouter('/');
  const demoWindow = undefined;


  // accesso a stato redux usando useSelector
  const { allProducts, filteredProducts, selectedProduct, openDetailsBox } = useSelector((state) => state.products);
  const { brandFilter, colorFilter, sizeFilter } = useSelector((state) => state.filters);
  const { searchedProduct } = useSelector((state) => state.products); //recupero searchedProduct dallo store

  //stato animazione
  const [welcomeAnimation, setWelcomeAnimation] = useState(true);

  //stato click su discover
  const {discover} = useSelector((state) => state.products);

  const handleSearch = (prod) => {
    dispatch(setSearchedProduct(prod));
  };

  const handleBrandFilterChange = (brand) => {
    dispatch(setBrandFilter(brand ? brand.brand : ''));
  };

  const handleColorFilterChange = (color) => {
    dispatch(setColorFilter(color ? color.color : ''));
  };

  const handleSizeFilterChange = (size) => {
    dispatch(setSizeFilter(size ? size.size : ''));
  };

  const onProductClick = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const handleDiscover = (param) =>{
    dispatch(toggleDiscover());
  }

  useEffect(() => {
    console.log('searchedProduct:', searchedProduct, 'brandFilter:', brandFilter, 'colorFilter:', colorFilter, 'sizeFilter:', sizeFilter);

    const filteredList = allProducts.filter((product) => {
      const nameMatch = !searchedProduct || (product.name && product.name.toLowerCase().includes(searchedProduct.toLowerCase()));

      const brandMatch = !brandFilter || (product.brand && product.brand.toLowerCase() === brandFilter.toLowerCase());

      const colorMatch = !colorFilter || (product.color && product.color.some(col => col.toLowerCase() === colorFilter.toLowerCase()));

      const sizeMatch = !sizeFilter || (product.sizes && product.sizes.includes(parseInt(sizeFilter)));
      console.log('product:', product.name, 'nameMatch:', nameMatch, 'brandMatch:', brandMatch, 'colorMatch:', colorMatch, 'sizeMatch:', sizeMatch);

      return nameMatch && brandMatch && colorMatch && sizeMatch;
    });
    console.log('PRODOTTI FILTRATI:')
    console.log('filteredList:', filteredList)
    dispatch(setFilteredProducts(filteredList));
  }, [searchedProduct, brandFilter, colorFilter, sizeFilter, allProducts, dispatch]);

  useEffect(() => {
    if (router.pathname === '/') { setWelcomeAnimation(true); }
    else { setWelcomeAnimation(false); }
  }, [router.pathname]);

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
          {router.pathname === '/' && welcomeAnimation && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <WelcomeText infoText={"Welcome in Shoesy"} isWelcome={welcomeAnimation} />
              <CtaButton ctaText={"Discover Shoesy"} onClick={handleDiscover(true)}/>
            </div>
          )}
          {router.pathname === '/ProductsPage' && discover &&(
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
                        productPrice={product.price}
                      />
                    </Grid2>
                  ))}
                  {openDetailsBox && selectedProduct && (
                    <ProductDetailsBox
                      open={openDetailsBox}
                      onClose={() => dispatch(closeDetailsBox())}
                      product={selectedProduct}
                    />
                  )}
                </Grid2>
              </Container>
            </>
          )}

          {router.pathname === '/CartPage' && <CartPage />}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

export default ProductsPage; 