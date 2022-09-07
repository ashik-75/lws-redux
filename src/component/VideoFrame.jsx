import { AspectRatio } from "@chakra-ui/react";

const VideoFrame = ({ link }) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src={link} alt="demo" />
    </AspectRatio>
  );
};

export default VideoFrame;
