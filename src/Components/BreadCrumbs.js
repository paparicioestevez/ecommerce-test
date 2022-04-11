import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

export const BreadCrumbs = () => {

  const location = useLocation();
  const [routes, setRoutes] = useState();

  useEffect(() => {
    const locations = location.pathname.split('/');
    locations[0] = '/';
    setRoutes(locations);
  }, []);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {routes && routes.map((route,index) => {
        return (<Link underline="hover" color="inherit" key={index} href={route}>
          {route === '/' ? 'main' : route}
        </Link>)
      })}
    </Breadcrumbs>
  )
}
