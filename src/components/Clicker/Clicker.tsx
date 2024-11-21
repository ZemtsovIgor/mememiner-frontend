import React, {FC, useMemo, useState, useEffect, useRef} from 'react';
import {animated, useTransition} from '@react-spring/web';
import useWebApp from "../../hooks/useWebApp";
import {WebApp} from "../../types/twa-types";
import {ClickerContainer, ClickerSparkText, ItemImg} from './Clicker.Styles';
import {wojak} from '../../assets/images/wojak';
import {
  ITEMS_TYPES,
  RARITY_TYPES,
  websocketRarityToItemRarity,
  websocketTypeToItemType
} from "../../types/items.d";
import useWebSocket from "../../hooks/useWebSocket";
import {inventoryImages} from "../../const/inventory.constants";

interface Props {
}

const Clicker: FC<Props> = (props: Props) => {
  const webApp: WebApp = useWebApp();
  const {
    sendTap,
    wallet: {
      availableEnergy,
      totalPointsPerTap,
      item1Collection,
      item2Collection,
      item3Collection,
      item4Collection,
      item5Collection,
      item1Id,
      item2Id,
      item3Id,
      item4Id,
      item5Id
    }
  } = useWebSocket();
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [sparks, setSparks] = useState<any[]>([]);
  const timer = useRef<number>();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    if (sparks.length) {
      timer.current = window.setTimeout(() => {
        removeOldSparks();
      }, 1000)
    }

    return () => {
      clearTimeout(timer.current)
    }
    // eslint-disable-next-line
  }, [sparks.length]);

  const transition = useTransition(sparks, {
    from: {
      opacity: 1,
      marginTop: 0
    },
    enter: { opacity: 0, marginTop: -100},
    trail: 150
  });

  const removeOldSparks = () => {
    const currentTime: number = Date.now();
    const newSparks = [...sparks].filter((spark: any) => {
      return currentTime < (spark.timeStamp + 1000)
    });

    setSparks(newSparks);

    if (newSparks.length) {
      timer.current = window.setTimeout(() => {
        removeOldSparks();
      }, 1000)
    }
  };

  const onTouchEvent = (event: any) => {
    const touch = event.changedTouches[0];
    clickOnClicker({clientX: touch.clientX, clientY: touch.clientY});
  };

  const onTouchStartEvent = (event: any) => {
    event.preventDefault();
    if (!isTouched) {
      setIsTouched(true);
    }
  };

  const onClickEvent = (event: any) => {
    event.preventDefault();
    if (isTouched) return false;
    clickOnClicker({clientX: event.clientX, clientY: event.clientY});
  };

  const clickOnClicker = ({clientX, clientY}: {clientX: number, clientY: number}) => {
    if (availableEnergy >= totalPointsPerTap) {
      webApp.HapticFeedback?.impactOccurred("soft");
      sendTap(Date.now());

      const newItem = {
        text: `+${totalPointsPerTap}`,
        x: clientX,
        y: clientY,
        timeStamp: Date.now()
      };

      setSparks((prevSparks) => ([...prevSparks, newItem]));
    }
  };

  const dressedObj = useMemo(
    () => {
      const headdressData: string[] = item1Collection.split('_');
      const outerwearData: string[] = item2Collection.split('_');
      const pantsData: string[] = item3Collection.split('_');
      const shoesData: string[] = item4Collection.split('_');
      const weaponData: string[] = item5Collection.split('_');

      // @ts-ignore
      const headdressType: ITEMS_TYPES = websocketTypeToItemType[headdressData[2]];
      // @ts-ignore
      const outerwearType: ITEMS_TYPES = websocketTypeToItemType[outerwearData[2]];
      // @ts-ignore
      const pantsType: ITEMS_TYPES = websocketTypeToItemType[pantsData[2]];
      // @ts-ignore
      const shoesType: ITEMS_TYPES = websocketTypeToItemType[shoesData[2]];
      // @ts-ignore
      const weaponType: ITEMS_TYPES = websocketTypeToItemType[weaponData[2]];

      // @ts-ignore
      const headdressRarity: RARITY_TYPES =  websocketRarityToItemRarity[headdressData[1]];
      // @ts-ignore
      const outerwearRarity: RARITY_TYPES =  websocketRarityToItemRarity[outerwearData[1]];
      // @ts-ignore
      const pantsRarity: RARITY_TYPES =  websocketRarityToItemRarity[pantsData[1]];
      // @ts-ignore
      const shoesRarity: RARITY_TYPES =  websocketRarityToItemRarity[shoesData[1]];
      // @ts-ignore
      const weaponRarity: RARITY_TYPES =  websocketRarityToItemRarity[weaponData[1]];

      const headdressCollection: number = Number(headdressData[3] || 0);
      const outerwearCollection: number = Number(outerwearData[3] || 0);
      const pantsCollection: number = Number(pantsData[3] || 0);
      const shoesCollection: number = Number(shoesData[3] || 0);
      const weaponCollection: number = Number(weaponData[3] || 0);

      return {
        [ITEMS_TYPES.HEADDRESS]: `inventory_${headdressRarity}_${headdressType}_${headdressCollection}_${item1Id}`,
        [ITEMS_TYPES.OUTERWEAR]: `inventory_${outerwearRarity}_${outerwearType}_${outerwearCollection}_${item2Id}`,
        [ITEMS_TYPES.PANTS]: `inventory_${pantsRarity}_${pantsType}_${pantsCollection}_${item3Id}`,
        [ITEMS_TYPES.SHOES]: `inventory_${shoesRarity}_${shoesType}_${shoesCollection}_${item4Id}`,
        [ITEMS_TYPES.WEAPON]: `inventory_${weaponRarity}_${weaponType}_${weaponCollection}_${item5Id}`,
        [ITEMS_TYPES.WOJAK]: wojak
      };
    },
    [
      item1Collection,
      item2Collection,
      item3Collection,
      item4Collection,
      item5Collection,
      item1Id,
      item2Id,
      item3Id,
      item4Id,
      item5Id
    ]
  );

  return (
    <ClickerContainer>
      <div
        className="clicker-area"
        onTouchEnd={(event: any) => onTouchEvent(event)}
        onTouchStart={(event: any) => onTouchStartEvent(event)}
        onClick={(event: any) => onClickEvent(event)}
      >
        <div className="clicker-img__wrap">
          {
            // @ts-ignore
            dressedObj.weapon ? <ItemImg icon={inventoryImages[dressedObj.weapon]} /> : null
          }

          {
            // @ts-ignore
            dressedObj.wojak ? <ItemImg className="clicker-img" icon={dressedObj.wojak}/> : null
          }

          {
            // @ts-ignore
            dressedObj.headdress ? <ItemImg icon={inventoryImages[dressedObj.headdress]} /> : null
          }

          {
            // @ts-ignore
            dressedObj.pants ? <ItemImg icon={inventoryImages[dressedObj.pants]} /> : null
          }

          {
            // @ts-ignore
            dressedObj.outerwear ? <ItemImg icon={inventoryImages[dressedObj.outerwear]} /> : null
          }

          {
            // @ts-ignore
            dressedObj.shoes ? <ItemImg icon={inventoryImages[dressedObj.shoes]} /> : null
          }
        </div>

        <div
          aria-hidden
          className="clicker-sparks"
        >
          {transition(
            (style, item) =>
              item ? (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: item.y,
                    left: item.x
                  }}
                >
                  <ClickerSparkText>{item.text}</ClickerSparkText>
                </animated.div>
              ) : null
          )}
        </div>
      </div>
    </ClickerContainer>
  );
};
export default Clicker;
