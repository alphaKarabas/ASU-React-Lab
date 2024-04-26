import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import LabLinks from '../components/LabLinks';

function MainPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{ marginTop: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Быстрые ссылки
                </Typography>
                <LabLinks />
            </Container>
        </React.Fragment>
    );
}

export default MainPage;
