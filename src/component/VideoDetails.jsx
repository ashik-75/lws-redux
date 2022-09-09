import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineLike,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  useAddReactionMutation,
  useDeleteVideoMutation,
} from "../features/apiSlice/apiSlice";
import VideoFrame from "./VideoFrame";

const VideoDetails = ({ video }) => {
  const navigate = useNavigate();

  const {
    link,
    title,
    date,
    duration,
    views,
    likes,
    unlikes,
    avatar,
    author,
    id,
  } = video;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    updateReaction,
    { isLoading: updateLoading, isSuccess: reactionSuccess },
  ] = useAddReactionMutation();

  const [deleteVideo, { isLoading, isError, isSuccess }] =
    useDeleteVideoMutation();

  const handleDeleteVideo = () => {
    deleteVideo(id);
  };

  const hanldeLikeReaction = () => {
    updateReaction({
      videoId: id,
      info: { likes: likes + 1 },
    });
  };

  const hanldeUnlikeReaction = () => {
    updateReaction({
      videoId: id,
      info: { unlikes: unlikes + 1 },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      onClose();
      console.log("Called after video deleting");
    }
  }, [isSuccess]);

  return (
    <Box>
      <VideoFrame link={video?.link} />

      <br />

      <HStack mb={5}>
        <Text
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
          fontWeight="bold"
        >
          {title}
        </Text>

        <Spacer />

        <HStack spacing={5}>
          <IconButton onClick={() => navigate(`/video/${id}/edit`)}>
            <AiOutlineEdit />
          </IconButton>

          <IconButton onClick={onOpen}>
            <AiOutlineDelete />
          </IconButton>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Are you sure,you want to delete video?</ModalHeader>

              <ModalBody>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                ipsam ea provident rem animi, magnam repudiandae. Explicabo
                autem architecto quas!
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  onClick={handleDeleteVideo}
                  colorScheme={"pink"}
                  isLoading={isLoading}
                  loadingText="Deleting.."
                >
                  Delete
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </HStack>

      <Stack direction={"row"}>
        <Text fontWeight={"bold"} color="gray.600">
          {date} . {views}
        </Text>

        <Spacer />

        <Stack direction={"row"} spacing={10}>
          <HStack>
            <AiOutlineLike
              cursor={"pointer"}
              onClick={hanldeLikeReaction}
              size={30}
            />{" "}
            <span>{likes}</span>
          </HStack>
          <HStack>
            <AiOutlineDislike
              cursor={"pointer"}
              onClick={hanldeUnlikeReaction}
              size={30}
            />{" "}
            <span>{unlikes}</span>
          </HStack>
        </Stack>
      </Stack>

      <Stack mt={15} direction="row" spacing={5}>
        <Avatar src={avatar} />
        <Stack>
          <Text fontWeight={"bolder"} fontSize="xl">
            {author}
          </Text>
          <Text color={"gray.500"} mt={-10}>
            100k subscribe
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
