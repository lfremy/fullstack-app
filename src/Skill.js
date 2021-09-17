import React from "react";
import { Votes } from './element'

function Skill({ votes, title }) {
  return (
    <li>
      {title}
      <Votes>{votes}</Votes>
    </li>
  );
}

export default Skill;
