import { Alert, Box } from '@mui/material';
import CommentsTable from './CommentsTable';
import { useGetCommentsQuery } from '../store/CommentsApi';

const CommentSection = () => {
  const {
    data = {},
    isFetching,
    isError,
    error,
  } = useGetCommentsQuery();

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
