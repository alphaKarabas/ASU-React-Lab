import { useState } from 'react';
import { Container, Typography, Stack } from "@mui/material";
import ButtonComponent from "../components/ButtonComponent";
import UserSlider from "../components/UserSlider";
import Pointer from "../components/Pointer";
import LabTitle from "../components/LabTitle";
import TaskSection from "../components/TaskSection";
import TaskGrid from "../components/TaskGrid";
import GlobalCounter from "../components/GlobalCounter";

export default function Lab_4() {
    const [pointerIsActive, setPointerIsActive] = useState(true);
    const [pointerX, setPointerX] = useState(true);
    const [pointerY, setPointerY] = useState(true);

    const switchPointer = (x, y) => {
        setPointerX(x)
        setPointerY(y)
        setPointerIsActive(!pointerIsActive)
    }

    return (
        <>
            <LabTitle title='LAB 4' />
            <TaskSection title='useState и useEffect - простые примеры'>
                <TaskGrid>
                    <Container>
                        <ButtonComponent
                            color="primary"
                            variant="contained"
                            onClick={(e) => switchPointer(e.pageX, e.pageY)}
                        >
                            {pointerIsActive ? 'Выключить' : 'Включить'} подсветку курсора
                        </ButtonComponent>
                    </Container>
                    <UserSlider userId={5} />
                    <UserSlider userId={1} />
                </TaskGrid>
            </TaskSection>
            <TaskSection title='Реализовать несколько action и reducer, например increment/ decrement счетчика'>
                <TaskGrid>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>На: 1</Typography>
                        <GlobalCounter by={1} />
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>На: 3</Typography>
                        <GlobalCounter by={3} />
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>На: 7</Typography>
                        <GlobalCounter by={7} />
                    </Stack>
                </TaskGrid>
            </TaskSection>
            {pointerIsActive && <Pointer x={pointerX} y={pointerY} />}
        </>
    );
}