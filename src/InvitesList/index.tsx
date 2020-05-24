import React from "react";

interface Props {
  invites: string[];
}

const InvitesList: React.FC<Props> = ({ invites }) =>
  invites.length ? (
    <ul className="invites--items">
      {invites.map((name, index) => {
        const uniqueKey = `${name}—${index}`;
        return (
          <li className="invites--item" key={uniqueKey}>
            {name}
          </li>
        );
      })}
    </ul>
  ) : null;

export default InvitesList;
