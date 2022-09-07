import { Stack } from "@chakra-ui/react";
import { useGetRelatedVideosQuery } from "../features/apiSlice/apiSlice";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ videoId, title }) => {
  const { isLoading, isError, error, data } = useGetRelatedVideosQuery({
    videoId,
    title,
  });

  return (
    <Stack direction={"column"} spacing={3}>
      {data &&
        data.length > 0 &&
        data.map((video) => <RelatedVideo key={video.id} video={video} />)}
    </Stack>
  );
};

export default RelatedVideos;
