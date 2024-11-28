import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import TicketIcon from '@mui/icons-material/ConfirmationNumber';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const genres = ['کمدی', 'جنایی', 'اکشن', 'درام', 'ترسناک'];
export default function Header() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
     <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', fontFamily:"Vazirmatn" }}>
      <Toolbar sx={{fontFamily:"Vazirmatn"}}>
        <Box display="flex" gap={6} flexGrow={1}>
          <Button color="inherit" endIcon={<LoginIcon />}>ورود / ثبت نام</Button>
          <Button color="inherit" endIcon={<TicketIcon />}>بلیط‌های من</Button>
          <Button color="inherit" endIcon={<LocationOnIcon />}>انتخاب شهر</Button>
        </Box>
        <Typography variant="h6" style={{ marginRight: '16px'}}>
           سینما
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="جست‌وجو..."
          style={{ marginLeft: '16px', marginRight: '16px' }}
          InputProps={{
            endAdornment: <SearchIcon />
          }}
        />
        <Button size="large" variant="text" color="warning" font-size="16px" >سینما تیکت</Button>
        <img src="/logo.svg" alt="" style={{ width: '30px', height: '30px' }} />
        
      </Toolbar>
      <Box display="flex" justifyContent="center" padding="8px">
        {genres.map((genre) => (
          <Button key={genre} color="inherit">
            {genre}
          </Button>
        ))}
      </Box>
    </AppBar>
    </>
  );
}
