import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { BreadCrumbs } from './BreadCrumbs';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const Header = () => {
  const { isLoading, basketCount } = useSelector((state) => state.main)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BreadCrumbs />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Test e-commerce React - Izertis</Link>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2, padding: 2, backgroundColor: 'white' }}
          >
            <Badge badgeContent={basketCount} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>

      </AppBar>
      {isLoading && <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>}
    </Box>
  );
}