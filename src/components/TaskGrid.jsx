import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '250px',
}));

const TaskGrid = ({ children }) => {
    return (
        <div style={{ flexGrow: 1, margin: 20 }}>
            <Grid container spacing={3}>
                {React.Children.map(children, (child, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Item>{child}</Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default TaskGrid;