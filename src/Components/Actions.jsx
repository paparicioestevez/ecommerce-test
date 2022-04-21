import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const Actions = (props) => {
  const { productDetail, onAddToShoppingBasket } = props;
  const [colorValue, setColorValue] = React.useState(props.productDetail.options.colors[0]);
  const [storageValue, setstorageValue] = React.useState(props.productDetail.options.storages[0]);

  const handleAddToShoppingBasket = () => {
    onAddToShoppingBasket(colorValue, storageValue);
  }

  const handleChangeColor = (colorCode) => {
    const color = props.productDetail.options.colors.find(color => color.code === +colorCode);
    setColorValue(color);
  }

  const handleChangeStorage = (storageCode) => {
    const storage = props.productDetail.options.storages.find(storage => storage.code === +storageCode);
    setstorageValue(storage);
  }

  return (
    <Grid container sx={{ borderLeft: '6px solid', backgroundColor: '#ddffff', borderColor: '#2196F3' }}>
      <Grid item xs={12} sx={{ paddingLeft: 4 }}>
        <Typography sx={{ mb: 2, textAlign: 'left' }} variant="h5" component="div">
          Actions
        </Typography>
        <FormControl>
          <FormLabel id="colors">Colors</FormLabel>
          <RadioGroup row aria-labelledby="colors" name="colors" value={colorValue.code} onChange={(e) =>  handleChangeColor(e.target.value)}>
            {productDetail.options.colors.map(color => {
              return <FormControlLabel value={color.code} control={<Radio />} key={color.code + color.name} label={color.name} />
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
      <FormControl>
          <FormLabel id="storage">Storage</FormLabel>
          <RadioGroup row aria-labelledby="storage" name="storage" value={storageValue.code} onChange={(e) =>  handleChangeStorage(e.target.value)}>
            {productDetail.options.storages.map(storage => {
              return <FormControlLabel value={storage.code} control={<Radio />} key={storage.code + storage.name} label={storage.name} />
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleAddToShoppingBasket}>Add to cart</Button>
      </Grid>
    </Grid>
  )
}