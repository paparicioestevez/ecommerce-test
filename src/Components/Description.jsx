import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const validKeys = ['brand', 'model', 'cpu', 'price', 'ram', 'os', 'battery', 'displayResolution', 'camera', 'weight', 'primaryCamera', 'secondaryCmera'];

export const Description = (props) => {
  const { productDetail } = props;

  const ItemsList = () => {
    const items = [];
    for (const key in productDetail) {
      if (validKeys.includes(key)) {
        const value = JSON.stringify(productDetail[key]);
        items.push(<Grid container key={key} sx={{ marginBottom: 1 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: 'left', }}>
            {key.charAt(0).toUpperCase() + key.slice(1) + ' :'}
          </Grid >
          <Grid item xs={12} md={8} sx={{ textAlign: 'left', color: 'gray' }}>
            {value.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')}
          </Grid>
        </Grid>
        )
      }
    }
    return items;
  }
  return (
    <Grid container spacing={2} sx={{ borderLeft: '6px solid #ccc', backgroundColor: '#ddffff', borderColor: '#2196F3' }}>
      <Grid item xs={12}>
        <Typography sx={{ mb: 2, textAlign: 'left' }} variant="h5" component="div">
          Description
        </Typography>
        <ItemsList />
      </Grid>
    </Grid>
  );
}