import React from "react";
import {Button} from "../../../elements";
import {PickUpCoinsStyle} from "./PickUpCoins.Styles";
import {connect} from "react-redux";
import {closeModal} from "../../../store/app/actions";
import {useTranslation} from "react-i18next";

interface Props {
  closeModal: () => void;
  title: string;
  amount: number;
}

const PickUpCoins: React.FC<Props> = (props: Props) => {
  const {closeModal, amount, title} = props;
  const { t } = useTranslation();

  return (
    <PickUpCoinsStyle>
      <span className="pickUpCoins-title">{title}</span>
      <div className="pickUpCoins-icon">
        <img alt="" src="/img/coin.png"/>
      </div>
      <span className="pickUpCoins-amount">{amount}</span>
      <div className="pickUpCoins-actions">
        <Button
          className="pickUpCoins-btn"
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          {t('tasks.btns.take_my_coins')}
        </Button>
      </div>
    </PickUpCoinsStyle>
  );
};

export default connect(null, {closeModal})(PickUpCoins);
