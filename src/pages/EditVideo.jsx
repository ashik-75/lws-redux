import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditVideoMutation,
  useGetVideoQuery,
} from "../features/apiSlice/apiSlice";

const EditPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [editVideo, { isSuccess: editSuccess }] = useEditVideoMutation();

  const { data, isLoading, isError, isSuccess, error } =
    useGetVideoQuery(videoId);

  const [videoInfo, setVideoInfo] = useState({
    title: "",
    description: "",
    author: "",
    views: "",
    link: "",
    date: "",
  });
  const { title, description, author, views, link, date } = videoInfo;

  const handleChange = (e) => {
    setVideoInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (isSuccess) {
      setVideoInfo(data);
    }

    if (editSuccess) {
      navigate(`/video/${videoId}`);
    }
  }, [isSuccess, editSuccess]);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    editVideo({ videoId, info: videoInfo });
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

        <Button type="submit" colorScheme={"teal"} mt={5}>
          Edit Video
        </Button>
      </form>
    </Box>
  );
};

export default EditPage;
