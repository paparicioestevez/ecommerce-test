import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const BreadCrumbs = () => {

  const location = useLocation();
  const [routes, setRoutes] = useState();

  useEffect(() => {
    const locations = location.pathname.split('/');
    locations[0] = '/';
    locations.splice(-1);
    setRoutes(locations);
  }, [location.pathname]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {routes && routes.map((route,index) => <Link to={route} key={index}> {route === '/' ? 'main' : route}</Link>)}
    </Breadcrumbs>
  )
}
