import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <SideBar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}

Dashboard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
};
