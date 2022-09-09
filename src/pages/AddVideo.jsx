import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddVideoMutation } from "../features/apiSlice/apiSlice";

const AddVideo = () => {
  const navigate = useNavigate();
  const [addVideo, { isSuccess, isLoading, isError, error }] =
    useAddVideoMutation();
  const [videoInfo, setVideoInfo] = useState({
    title: "",
    description: "",
    author: "",
    views: "",
    link: "",
    date: "",
    thumbnail: "",
    avatar: "",
  });
  const { title, description, author, views, link, date, thumbnail, avatar } =
    videoInfo;

  const handleChange = (e) => {
    setVideoInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/`);
    }
  }, [isSuccess]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    addVideo(videoInfo);
  };

  return (
    <Box
      w={{
        base: "95%",
        md: "50%",
      }}
      margin="50px auto"
    >
      <form onSubmit={handleEditSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <Input
              name="title"
              onChange={handleChange}
              value={title}
              placeholder="Enter title"
            />
          </FormControl>

          <FormControl>
            <Input
              name="link"
              onChange={handleChange}
              value={link}
              placeholder="Enter Link"
            />
          </FormControl>
          <FormControl>
            <Input
              name="thumbnail"
              onChange={handleChange}
              value={thumbnail}
              placeholder="Video thumbnail link"
            />
          </FormControl>
          <FormControl>
            <Input
              name="author"
              onChange={handleChange}
              value={author}
              placeholder="@author name"
            />
          </FormControl>
          <FormControl>
            <Input
              name="avatar"
              onChange={handleChange}
              value={avatar}
              placeholder="@avatar image"
            />
          </FormControl>
          <FormControl>
            <Input
              name="views"
              onChange={handleChange}
              value={views}
              placeholder=" Views"
            />
          </FormControl>
          <FormControl>
            <Input
              name="date"
              onChange={handleChange}
              value={date}
              placeholder="Date"
            />
          </FormControl>

          <FormControl>
            <Textarea
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="Enter Description"
            />
          </FormControl>
        </Stack>

        <Button
          isLoading={isLoading}
          loadingText="Adding Video ..."
          type="submit"
          colorScheme={"teal"}
          mt={5}
        >
          Add Video
        </Button>
      </form>
    </Box>
  );
};

export default AddVideo;
