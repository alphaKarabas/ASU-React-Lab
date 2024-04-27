import { useState, useEffect } from "react";
import { Alert, Box } from '@mui/material';
import CommentsTable from './CommentsTable';
import { useGetCommentsQuery } from '../store/CommentsApi';
import { useSelector } from 'react-redux';

const CommentSection = () => {
  const isAuth = useSelector((state) => state.UserSlice.isAuth);
  const currentUser = useSelector((state) => state.UserSlice.currentUser);

  const {
    data = [],
    isFetching,
    isError,
    error,
    refetch,
  } = useGetCommentsQuery(undefined, {
    skip: !isAuth,
  });

  useEffect(() => {
    if (isAuth) {
      refetch();
    }
  }, [currentUser]);

  return (
    <Box padding={6}>
      {isError && <Alert severity="error">{error?.data?.message || error.error}</Alert>}
      <CommentsTable
        data={data.comments || []}
        isFetching={isFetching}
        isError={isError}
      />
    </Box>
  );
};

export default CommentSection;
