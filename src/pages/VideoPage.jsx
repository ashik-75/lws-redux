import { Alert, Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import RelatedVideos from "../component/RelatedVideos";
import VideoDetails from "../component/VideoDetails";
import { useGetVideoQuery } from "../features/apiSlice/apiSlice";

const VideoPage = () => {
  const { videoId } = useParams();
  const { isLoading, isError, error, data } = useGetVideoQuery(videoId);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Alert>{error}</Alert>
      ) : !data?.id ? (
        <Text>Nothing found</Text>
      ) : (
        <>
          <Flex
            flexDirection={{
              base: "column",
              md: "row",
            }}
            p={5}
            gap={10}
          >
            <Box
              w={{
                base: "100%",
                md: "75%",
              }}
            >
              <VideoDetails video={data} />
            </Box>
            <Box
              w={{
                md: "25%",
                base: "100%",
              }}
            >
              <RelatedVideos videoId={data.id} title={data?.title} />
            </Box>
          </Flex>
        </>
      )}
    </>
  );
};

export default VideoPage;
