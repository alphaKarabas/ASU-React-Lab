import React from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import { useTheme } from './CustomThemeProvider';

function Footer() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    return (
        <Box sx={{
            width: '100%',
            mt: 3,
            py: 2,
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa', // изменён на светло-серый
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Typography variant="body1">© 2024 Capibara Company</Typography>
            <Button onClick={() => {}} variant="outlined" color="primary">
                Обратная связь
            </Button>
        </Box>
    );
}

export default Footer;
