import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { createComment } from '../store/CommentsSlice';

function CommentForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback(data => {
        dispatch(createComment({text: data.text}));
      }, [dispatch]);

    return (
        <Box sx={{ maxWidth: 300, mx: "auto", my: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Отправить комментарий</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Сообщение"
                    multiline
                    rows={4}
                    {...register("text", { required: "Это поле обязательно" })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Отправить
                </Button>
            </form>
        </Box>
    );
}

export default CommentForm;
