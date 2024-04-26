import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function AboutPage() {
  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            О проекте
          </Typography>
          <Typography variant="body1" paragraph>
            Данный сайт является финальным проектом в рамках обучающей программы. Он создан для демонстрации навыков разработки веб-приложений с использованием React и Material-UI.
          </Typography>
          <Typography variant="body1" paragraph>
            На странице "О проекте" размещены лабораторные работы, выполненные в ходе обучения. Каждая лабораторная работа отражает определённые аспекты изучаемых технологий и методик программирования.
          </Typography>
          <Typography variant="body1" paragraph>
            Сайт представляет собой комплексное приложение, включающее в себя несколько разделов, каждый из которых демонстрирует определённые функции и возможности современных веб-технологий.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default AboutPage;
