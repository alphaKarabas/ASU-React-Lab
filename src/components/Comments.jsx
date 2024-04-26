import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import TaskGrid from "../components/TaskGrid";
import { getUserComments } from '../store/CommentsSlice';

export default function Comments() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.UserSlice.isAuth);
    const currentUser = useSelector((state) => state.UserSlice.currentUser);
    const comments = useSelector((state) => state.CommentsSlice.comments);

    useEffect(() => {
        if (isAuth) {
            dispatch(getUserComments());
        }
    }, [isAuth, currentUser]);

    return (
        <>
            {isAuth &&
                <TaskGrid>
                    {comments.map(comment => comment.text)}
                </TaskGrid>}
        </>
    );
}