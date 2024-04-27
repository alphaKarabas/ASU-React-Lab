import React from 'react';
import LabTitle from "../components/LabTitle";
import TaskSection from "../components/TaskSection";
import TaskGrid from "../components/TaskGrid";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import CommentForm from "../components/CommentForm";

export default function Lab_5() {
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
            </TaskSection>
        </>
    );
}