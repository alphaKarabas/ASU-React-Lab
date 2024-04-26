import React from 'react';
import ContainerComponent from './ContainerComponent';
import ButtonComponent from './ButtonComponent';

const MainPage = () => (
    <>
        <ContainerComponent>
            <h1>Добро пожаловать!</h1>
            <ButtonComponent>Hello World!</ButtonComponent>
        </ContainerComponent>
    </>
);

export default MainPage;
