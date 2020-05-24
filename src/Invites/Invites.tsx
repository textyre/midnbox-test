import React, { FC, useState, useCallback, useEffect } from "react";
import InvitesList from "../InvitesList";

import "./style.css";

interface Props {
  invites: string[];
  onAdd: (name: string) => void;
}

export const Invites: FC<Props> = ({ invites, onAdd }) => {
  const [inviteName, setInviteName] = useState("");

  const onChange = useCallback(event => {
    const { value } = event.target;
    setInviteName(value);
  }, []);

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      if (!inviteName) {
        return;
      }
      onAdd(inviteName);
    },
    [inviteName, onAdd]
  );

  useEffect(() => {
    setInviteName("");
  }, [invites]);

  return (
    <div className="invites">
      <form className="invites--form" onSubmit={onSubmit}>
        <input
          placeholder="Enter event name*"
          className="invites--form-input"
          onChange={onChange}
          type="text"
          value={inviteName}
        />
        <button className="button invites--form-submit" type="submit">
          Invite
        </button>
      </form>
      <div className="invites--delimiter" />
      <InvitesList invites={invites} />
    </div>
  );
};
