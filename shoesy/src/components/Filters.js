import React from 'react';
import { useDispatch } from 'react-redux';
import { setBrandFilter, setColorFilter, setSizeFilter } from '../redux/actions/filterActions';
import brands from '../utils/brands';
import sizes from '../utils/sizes';
import colors from '../utils/colors';

function Filters() {
  const dispatch = useDispatch();

  const handleChangeBrand = (event) => {
    dispatch(setBrandFilter(event.target.value));
  };

  const handleChangeColor = (event) => {
    dispatch(setColorFilter(event.target.value));
  };

  const handleChangeSize = (event) => {
    dispatch(setSizeFilter(event.target.value));
  };

  return (
    <div style={{ display: 'flex', gap: '20px', width: '30%' }}>
      <select onChange={handleChangeBrand} style={{borderRadius:'25px', border:'3px solid #5271ff'}}>
        <option value="">Choose a brand</option>
        {brands.map((brand) => (
          <option key={brand.brand} value={brand.brand}>
            {brand.brand}
          </option>
        ))}
      </select>

      <select onChange={handleChangeColor} style={{borderRadius:'25px', border:'3px solid #5271ff'}}>
        <option value="">Choose a color</option>
        {colors.map((color) => (
          <option key={color.color} value={color.color}>
            {color.color}
          </option>
        ))}
      </select>

      <select onChange={handleChangeSize} style={{borderRadius:'25px', border:'3px solid #5271ff'}}>
        <option value="">Choose a size</option>
        {sizes.map((size) => (
          <option key={size.size} value={size.size}>
            {size.size}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;