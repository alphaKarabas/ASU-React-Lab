import { useSelector } from 'react-redux';
import React from 'react';
import LabTitle from "../components/LabTitle";
import TaskSection from "../components/TaskSection";
import LoginForm from "../components/LoginForm";
import CommentSection from '../components/CommentSection';

export default function Lab_5() {
    const isAuth = useSelector((state) => state.UserSlice.isAuth);
    return (
        <>
            <LabTitle title='Таблицы' />
            {!isAuth && <TaskSection title='Авторизуйтесь чтобы видеть таблицу сообщения'>
                <LoginForm />
            </TaskSection>}
            <TaskSection title='Сообщения'>
                <CommentSection />
            </TaskSection>
        </>
    );
}