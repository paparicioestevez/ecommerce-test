import React from 'react';
import Grid from '@mui/material/Grid';

// import { MenuDD } from "../components/MenuDD";
// import { RoutesDD } from "../routes/routesDD";
// import { useLocation, useNavigate } from "react-router-dom";
// import PersonOutlined from '@mui/icons-material/PersonOutlined';
// import ExitToAppOutlined from '@mui/icons-material/ExitToAppOutlined';
// import AdminPanelSettingsOutlined from '@mui/icons-material/AdminPanelSettingsOutlined';


// const styles = {
//   button: { borderRadius: 25, backgroundColor: 'aquamarine', minWidth: 0, marginRight: 8 }
// };

/**
 * 
 * RoutesDD tendra todas las rutas donde podamos navegar 
 */
export const Main = () => {
  // const contrato = JSON.parse(localStorage.getItem("contrato"));
  // const usuario = JSON.parse(localStorage.getItem("usuario") );

  // const location = useLocation();
  // const navigate = useNavigate();
  // const hideMenu = location.pathname === '/signin' ||
  //   location.pathname.includes('/admin') ||
  //   location.pathname.includes('/usuario') ||
  //   location.search.includes('passwordrecovery') ||
  //   location.pathname === '/perfil' ||
  //   location.pathname === '/signin'

  //   ? true : false;

  // const handleLogout = () => {
  //   localStorage.clear();
  //   navigate("/signin")
  // }

  return (
    <Grid>
      {/* {!hideMenu && <>
        <Grid container>
          <Grid item xs={8}>
            {contrato && <Typography variant="h6" component="div" gutterBottom>
              {`Empresa:  ${contrato.empresa.datosFiscales.nombreEmpresa}`}
            </Typography>}
            {contrato && <Typography variant="h6" component="div" gutterBottom>
              {`Número contrato:  ${contrato.contratoId}`}
            </Typography>}
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ height: '100%' }}
            >
              {usuario?.roleId === 1 && <Button style={styles.button} onClick={() => navigate("/admin")}><AdminPanelSettingsOutlined /> </Button>}
              <Button style={styles.button} onClick={() => navigate("/perfil")}><PersonOutlined /></Button>
              <Button style={styles.button} onClick={() => handleLogout()} ><ExitToAppOutlined /></Button>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid className="App-header">
            <MenuDD></MenuDD>
          </Grid>
        </Grid></>}
      <Grid item xs={hideMenu ? 12 : 10}>
        <Grid className="App-body">
          <RoutesDD />
        </Grid>
      </Grid>
      <Grid className="footer">
      </Grid> */}
    </Grid>
  )
}



