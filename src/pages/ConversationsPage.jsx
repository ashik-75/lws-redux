import {
  Alert,
  Avatar,
  List,
  ListItem,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import gravatarUrl from "gravatar-url";
import { useSelector } from "react-redux";
import { useConversationsQuery } from "../features/conversations/conversationsApi";
import { getPartnersInfo } from "../utils/getPartnersInfo";

const ConversationsPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { email } = user || {};

  const { isLoading, data, isError, error } = useConversationsQuery(email);

  console.log({ isLoading, data, isError, error });

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Alert status="error">{error?.data}</Alert>
      ) : data?.length === 0 ? (
        <Stack>No Conversation found</Stack>
      ) : (
        <List spacing={3}>
          {data?.map((conversation) => {
            const partner = getPartnersInfo(conversation.users, email);
            const { email: partnerEmail, name } = partner || {};
            return (
              <ListItem>
                <span>
                  {formatDistanceToNow(conversation?.timestamp, {
                    includeSeconds: true,
                    addSuffix: true,
                  })}
                </span>
                <br />
                {conversation?.message}
                <br />
                <span>{name}</span>
                <Avatar src={gravatarUrl(partnerEmail)} />
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default ConversationsPage;
