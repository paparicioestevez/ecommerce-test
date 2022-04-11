import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Description = (props) => {
  const { productDetail } = props;

  const ItemsList = () => {
    const items = [];
    for (const key in productDetail) {
      items.push(<ListItemText
        primary={key}
        secondary={JSON.stringify(productDetail[key])}
      />)
    }
    return items;
  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Descripción
          </Typography>
          <Container>
            <List dense>
              {<ItemsList />}
            </List>
          </Container>
        </Grid>
      </Grid>

    </Box>
  );
}