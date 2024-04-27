import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import darkHooksImage from '../../images/dark_hooks.png';
import darkFormsImage from '../../images/dark_forms.png';
import darkTableImage from '../../images/dark_table.png';
import lightHooksImage from '../../images/light_hooks.png';
import lightFormsImage from '../../images/light_forms.png';
import lightTableImage from '../../images/light_table.png';
import { useTheme } from '../components/CustomThemeProvider';

function LabLinks() {
    const { theme } = useTheme();
    const lightCards = [
        { title: "Примеры хуков", image: lightHooksImage, link: "/Lab_4" },
        { title: "Формы", image: lightFormsImage, link: "/Lab_5-6" },
        { title: "Таблица", image: lightTableImage, link: "/Lab_8" },
    ];

    const darkCards = [
        { title: "Примеры хуков", image: darkHooksImage, link: "/Lab_4" },
        { title: "Формы", image: darkFormsImage, link: "/Lab_5-6" },
        { title: "Таблица", image: darkTableImage, link: "/Lab_8" },
    ];

    return (
        <Grid container spacing={2}>
            {(theme === 'dark' ? darkCards : lightCards).map((card, index) => (
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
