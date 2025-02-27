import * as React from 'react';
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
/*other*/
import products from '../utils/products';

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

export default function ProductsPage(props) {
  const { window } = props;

  const router = useDemoRouter('/productspage');

  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        /*logo: <img/>*/
        title: 'Shoesy',
      }}
    >
      <DashboardLayout>

        <PageContainer sx={{
          height: '100vh',
          width: '100vw',
          padding: '0',
        }}>
          <SearchBar  />
          <Container maxWidth="lg">
            <Grid2 container spacing={7}>
              {products.map((product) => (
                <Grid2 item xs={12} sm={6} md={2.4} lg={2.4} sx={{ flexBasis: '20%' }} key={product.id}>
                  <ProductCard
                    productId={product.id}
                    productImage={product.image}
                    productName={product.name}
                    productAlt={product.alt}
                    productColor={product.color}
                    productSizes={product.sizes}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}