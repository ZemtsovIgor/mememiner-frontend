import React from "react";
import {ClueStyle} from "./Clue.Styles";

interface Props {
  title: string;
  text: string;
}

const Clue: React.FC<Props> = (props: Props) => {
  const {title, text} = props;

  return (
    <ClueStyle>
      <span className="clue-title">{title}</span>
      <div className="clue-icon">
        <img alt="" src="/img/coin.png"/>
      </div>
      <span className="clue-text">{text}</span>
    </ClueStyle>
  );
};

export default Clue;
