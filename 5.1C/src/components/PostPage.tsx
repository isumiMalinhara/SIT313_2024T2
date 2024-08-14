import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const PostPage: React.FC = () => {
  const [postType, setPostType] = useState<"question" | "article">("question");

  return (
    <Container>
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      {postType === "question" ? <QuestionPost /> : <ArticlePost />}
    </Container>
  );
};

const PostTypeSelector: React.FC<{
  postType: "question" | "article";
  setPostType: React.Dispatch<React.SetStateAction<"question" | "article">>;
}> = ({ postType, setPostType }) => {
  const handlePostTypeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newPostType: "question" | "article"
  ) => {
    if (newPostType !== null) {
      setPostType(newPostType);
    }
  };

  return (
    <Box my={2}>
      <ToggleButtonGroup
        value={postType}
        exclusive
        onChange={handlePostTypeChange}
        aria-label="post type"
      >
        <ToggleButton value="question" aria-label="question">
          Question
        </ToggleButton>
        <ToggleButton value="article" aria-label="article">
          Article
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

const QuestionPost: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField fullWidth label="Title" margin="normal" variant="outlined" />
      <TextField
        fullWidth
        label="Describe your problem"
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
      />
      <TextField fullWidth label="Tags" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary">
        Post
      </Button>
    </Box>
  );
};

const ArticlePost: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField fullWidth label="Title" margin="normal" variant="outlined" />
      <TextField
        fullWidth
        label="Abstract"
        margin="normal"
        variant="outlined"
        multiline
        rows={2}
      />
      <TextField
        fullWidth
        label="Article Text"
        margin="normal"
        variant="outlined"
        multiline
        rows={6}
      />
      <TextField fullWidth label="Tags" margin="normal" variant="outlined" />
      <Button variant="contained" color="primary">
        Post
      </Button>
    </Box>
  );
};

export default PostPage;
