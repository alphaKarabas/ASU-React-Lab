import React from 'react';
import LabTitle from "../components/LabTitle";
import TaskSection from "../components/TaskSection";
import LoginForm from "../components/LoginForm";
import CommentSection from '../components/CommentSection';

export default function Lab_5() {
    return (
        <>
            <LabTitle title='Таблицы' />
            <TaskSection title='Внедрить в проект  таблицы react-table.'>
                <LoginForm />
            </TaskSection>
            <TaskSection title='Авторизуйтесь чтобы писать сообщения'>
                <CommentSection />
            </TaskSection>
        </>
    );
}