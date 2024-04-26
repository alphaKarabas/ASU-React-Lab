import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LabTitle from "../components/LabTitle";
import TaskSection from "../components/TaskSection";
import TaskGrid from "../components/TaskGrid";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import CommentForm from "../components/CommentForm";
import { auth } from '../store/UserSlice';
import Comments from '../components/Comments';

export default function Lab_5() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);

    return (
        <>
            <LabTitle title='Формы' />
            <TaskSection title='Реализовать форму регистрации или форму обратной связи с помощью React-hook-forms или Formik. Обработать submit через useCallback функции.'>
                <TaskGrid>
                    <RegistrationForm />
                    <LoginForm />
                    <CommentForm />
                </TaskGrid>
            </TaskSection>
            <TaskSection title='Комментарии пользователя'>
                <Comments />
            </TaskSection>
        </>
    );
}