import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { login } from '../store/UserSlice';

function LoginForm() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback(data => {
        dispatch(login({ email: data.email, password: data.password }));
    }, [dispatch]);

    return (
        <Box sx={{ maxWidth: 300, mx: "auto", my: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Вход</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Email"
                    {...register("email", {
                        required: "Это поле обязательно",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Неверный адрес электронной почты"
                        }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    type="password"
                    label="Пароль"
                    {...register("password", { required: "Это поле обязательно" })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Войти
                </Button>
            </form>
        </Box>
    );
}

export default LoginForm;
