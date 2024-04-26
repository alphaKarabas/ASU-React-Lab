import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import hooksImage from '../../images/hooks.png';
import formsImage from '../../images/forms.png';

function LabLinks() {
    const cards = [
        { title: "Примеры хуков", image: hooksImage, link: "/Lab_4" },
        { title: "Формы", image: formsImage, link: "/Lab_5-6" }
    ];

    return (
        <Grid container spacing={2}>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Link to={card.link} style={{ textDecoration: 'none' }}>
                        <Card>
                            <CardMedia
                                component="img"
                                sx={{ height: 140, objectFit: 'cover', objectPosition: 'center' }}
                                image={card.image}
                                alt={card.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

export default LabLinks;
