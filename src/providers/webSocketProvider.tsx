import React, {FC, useEffect, useState} from 'react'
import {DEFAULT_PIZZA, PizzaContext, WebSocketContext} from "../contexts/webSocketContext";
import {API_URL, K_ID, K_PRIVATE, K_PUBLIC, WS_API_URL, WS_URL} from "../const/general.constants";
import {DEFAULT_FRIENDS_LOADING_LIMIT, DEFAULT_RESTORE_ENERGY_PER_SECOND} from "../const/app.constants";
import {
  IBonus,
  IClient,
  IInventory,
  IMLCard,
  ITask,
  PIZZA_STATUS_TYPES,
  WebSocketPaginator,
  WebSocketProfile,
  WebSocketWallet
} from "../types/webSocketTypes.d";
import {LOADING_TYPES} from "../types/app.d";
import {FRIEND} from "../types/friends.d";
import {clientStateToProfileState} from "../common/utils/formatters";
import {
  ITEM_TYPE,
  ITEMS_TYPES,
  RARITY_TYPES,
  rarityToSortIndex,
  websocketRarityToItemRarity,
  websocketTypeToItemType
} from "../types/items.d";
import {CARD, CARD_TYPES, websocketTypeToMLCardType} from "../types/cards.d";
import {DAILY_BONUS, REWARD_TYPES, TASK} from "../types/tasks.d";
import {STORAGE_KEYS} from "../const/storage_keys.constants";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: FC<Props> = ({ children }: Props) => {
  const [timer, setTimer] = useState<number>(0);
  // @ts-ignore
  const webApp = window.Telegram?.WebApp;
  const [profile, setProfile] = useState<WebSocketProfile>({
    uid: null,
    firstname: '',
    lastname: ''
  })
  const [wallet, setWallet] = useState<WebSocketWallet>({
    points: 0,
    pointsHourlyRate: 0,
    totalPointsHourlyRate: 0,
    rank: 0,
    rankThreshold: 100000,
    energyLevel: 1,
    tapThreshold: 1,
    totalPointsPerTap: 1,
    tapLevel: 0,
    energyThreshold: 0,
    totalEnergy: 0,
    availableEnergy: 0,
    refPointsToParent: 0,
    refPointsToParentIfPremium: 0,
    refPointsToInvitee: 0,
    pointsBonusHourlyRate: 0,
    item1Collection: 'Items_Base_1_0',
    item1Id: 0,
    item2Collection: 'Items_Base_2_0',
    item2Id: 0,
    item3Collection: 'Items_Base_3_0',
    item3Id: 0,
    item4Collection: 'Items_Base_4_0',
    item4Id: 0,
    item5Collection: 'Items_Base_5_0',
    item5Id: 0,
  });
  const [pizzaState, setPizzaState] = useState<PIZZA_STATUS_TYPES>(PIZZA_STATUS_TYPES.NOT_LOADED);
  const [pizzaInit, setPizzaInit] = useState<boolean>(true);
  const [friends, setFriends] = useState<{
    loaded: LOADING_TYPES;
    meta: WebSocketPaginator;
    list: FRIEND[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    meta: {
      limit: DEFAULT_FRIENDS_LOADING_LIMIT
    },
    list: []
  });

  const [inventory, setInventory] = useState<{
    loaded: LOADING_TYPES;
    list: ITEM_TYPE[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    list: [
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.HEADDRESS}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.HEADDRESS}_0_0`,
        collectionId: 'Items_Base_1_0',
        type: ITEMS_TYPES.HEADDRESS,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0,
        bought: true
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.OUTERWEAR}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.OUTERWEAR}_0_0`,
        collectionId: 'Items_Base_2_0',
        type: ITEMS_TYPES.OUTERWEAR,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0,
        bought: true
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.PANTS}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.PANTS}_0_0`,
        collectionId: 'Items_Base_3_0',
        type: ITEMS_TYPES.PANTS,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0,
        bought: true
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.SHOES}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.SHOES}_0_0`,
        collectionId: 'Items_Base_4_0',
        type: ITEMS_TYPES.SHOES,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0,
        bought: true
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.WEAPON}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.WEAPON}_0_0`,
        collectionId: 'Items_Base_5_0',
        type: ITEMS_TYPES.WEAPON,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0,
        bought: true
      },
    ]
  });


  const [cards, setCards] = useState<{
    loaded: LOADING_TYPES;
    list: CARD[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    list: []
  });

  const [tasks, setTasks] = useState<{
    loaded: LOADING_TYPES;
    list: TASK[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    list: []
  });

  const [dailyBonuses, setDailyBonuses] = useState<{
    loaded: LOADING_TYPES;
    bonuses: DAILY_BONUS[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    bonuses: []
  });

  const init = () => {
    if (DEFAULT_PIZZA) {
      setPizzaState(PIZZA_STATUS_TYPES.INITIALIZING);
      if (!DEFAULT_PIZZA.Initialized && pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
        DEFAULT_PIZZA.Init({
          wsURL: WS_URL,
          apiURL: API_URL,
          wsapiURL: WS_API_URL,
          kID: K_ID,
          kPublic: K_PUBLIC,
          kPrivate: K_PRIVATE,
          onWSOpen: onWSOpenCallback,
          onWSClose: onWSCloseCallback,
        });
      }
    }
  }

  const onWSOpenCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_OPENED);
    auth();
  }

  const onWSCloseCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_DISCONNECTED);
  }

  const getProfile = () => {
    DEFAULT_PIZZA.WSMe((envelope, WSMeMessage) => {
      setProfile({
        uid: WSMeMessage.client?.uid || null,
        firstname: WSMeMessage.client?.firstname || '',
        lastname: WSMeMessage.client?.lastname || ''
      })
    });
  }

  const getInvitees = (paginator: WebSocketPaginator) => {
    setFriends(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSInvitees(paginator, (envelope, WSInviteesMessage) => {
      const newFriends: FRIEND[] = WSInviteesMessage.clients?.map((client: IClient) => {
        return {
          uid: client.uid || null,
          firstname: client.firstname || '',
          lastname: client.lastname || '',
          state: clientStateToProfileState(client.state, envelope.id || '0')
        }
      }) || [];
      setFriends(prev => ({
        loaded: LOADING_TYPES.LOADED,
        meta: WSInviteesMessage.meta || {limit: DEFAULT_FRIENDS_LOADING_LIMIT},
        list: [...prev.list, ...newFriends]
      }));
    });
  }

  const getInventory = () => {
    setInventory(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSInventoryItemsParams((envelope, WSInventoryItemsParamsMessage) => {
      const newInventory: ITEM_TYPE[] = [];
      const newMLCards: CARD[] = [];
      console.log('WSInventoryItemsParams message', WSInventoryItemsParamsMessage);
      Object.keys(WSInventoryItemsParamsMessage).forEach((mes: string) => {
        if (mes.includes('Items')) {
          const tempItemArray: IInventory[] = WSInventoryItemsParamsMessage[mes];
          const itemData: string[] = mes.split('_');
          // @ts-ignore
          const itemType: ITEMS_TYPES = websocketTypeToItemType[itemData[2]];
          // @ts-ignore
          const itemRarity: RARITY_TYPES =  websocketRarityToItemRarity[itemData[1]];
          const itemCollection: number = Number(itemData[3] || 0);
          // @ts-ignore
          const sortIndex: number = rarityToSortIndex[itemRarity];

          if (tempItemArray.length) {
            tempItemArray.forEach((tempItem: IInventory) => {
              newInventory.push({
                icon: `inventory_${itemRarity}_${itemType}_${itemCollection}_${tempItem.ID}`,
                image: `inventory_${itemRarity}_${itemType}_${itemCollection}_${tempItem.ID}`,
                type: itemType,
                rarity: itemRarity,
                collection: itemCollection,
                energyBonus: tempItem.EnergyBonus || 0,
                id: tempItem.ID || 0,
                incomeBonus: tempItem.IncomeBonus || 0,
                pointsBonusHourlyRate: tempItem.PointsHourlyRate || 0,
                pointsHourlyRate: tempItem.PointsHourlyRate || 0,
                price: tempItem.Price || 0,
                tapBonus: tempItem.TapBonus || 0,
                sortIndex: sortIndex,
                collectionId: mes,
                bought: false,
              })
            })
          }
        }

        if (mes.includes('MLCard')) {
          const tempMLCardArray: IInventory[] = WSInventoryItemsParamsMessage[mes];
          const mlCardData: string[] = mes.split('_');
          // @ts-ignore
          const cardType: CARD_TYPES = websocketTypeToMLCardType[mlCardData[1]];
          const cardCollection: number = Number(mlCardData[2] || 0);

          if (tempMLCardArray.length) {
            const newMLCard: CARD = {
              id: mes,
              image: `ml_card_${cardType}_${cardCollection}`,
              type: cardType,
              name: '',
              description: '',
              level: 0,
              nextLevel: 1,
              price: 0,
              collection: cardCollection,
              energyBonus: 0,
              incomeBonus: 0,
              pointsBonusHourlyRate: 0,
              pointsHourlyRate: 0,
              tapBonus: 0,
              levels: [],
              bought: false,
            };

            tempMLCardArray.forEach((tempCard: IMLCard) => {
              newMLCard.levels.push({
                id: tempCard.ID || 0,
                energyBonus: tempCard.EnergyBonus || 0,
                incomeBonus: tempCard.IncomeBonus || 0,
                pointsBonusHourlyRate: tempCard.PointsHourlyRate || 0,
                pointsHourlyRate: tempCard.PointsHourlyRate || 0,
                price: tempCard.Price || 0,
                tapBonus: tempCard.TapBonus || 0,
              });

              if (tempCard.ID === 1) {
                newMLCard.nextEnergyBonus = tempCard.EnergyBonus || 0;
                newMLCard.nextIncomeBonus = tempCard.IncomeBonus || 0;
                newMLCard.nextPointsBonusHourlyRate = tempCard.PointsHourlyRate || 0;
                newMLCard.nextPointsHourlyRate = tempCard.PointsHourlyRate || 0;
                newMLCard.price = tempCard.Price || 0;
                newMLCard.nextTapBonus = tempCard.TapBonus || 0;
              }
            });

            newMLCards.push(newMLCard);
          }
        }
      });

      newInventory.sort((a,b) => (a.sortIndex || 0) -  (b.sortIndex || 0));
      newMLCards.sort((a,b) => (a.collection || 0) -  (b.collection || 0));

      getUserInventory(newInventory, newMLCards);
    });
  };

  const getUserInventory = (allInventory: ITEM_TYPE[], allCards: CARD[]) => {
    DEFAULT_PIZZA.WSInventory((envelope, WSInventoryMessage) => {
      console.log('WSInventory envelope', envelope);
      console.log('WSInventory WSInventoryMessage', WSInventoryMessage);
      if (WSInventoryMessage.items) {
        if (Object.keys(WSInventoryMessage.items).length) {
          Object.keys(WSInventoryMessage.items).forEach((mes: string) => {
            if (mes.includes('Items')) {
              const tempUserItemArray: number[] = WSInventoryMessage.items[mes];

              if (tempUserItemArray.length) {
                allInventory.map((inventory: ITEM_TYPE) => {
                  if (inventory.collectionId === mes && tempUserItemArray.includes(inventory.id || 0)) {
                    inventory.bought = true;
                  }

                  return inventory
                })
              }
            }

            if (mes.includes('MLCard')) {
              const tempUserMLCard: number = WSInventoryMessage.items[mes];

              if (tempUserMLCard) {
                allCards.map((card: CARD) => {
                  if (card.id === mes) {
                    card.bought = true;

                    const currentLevel: any = card.levels.filter((currentL: any) => currentL.id === tempUserMLCard)[0] || null;
                    const nextLevel: any = card.levels.filter((currentL: any) => currentL.id === tempUserMLCard + 1)[0] || null;

                    if (currentLevel) {
                      card.level = currentLevel.id || 0;
                      card.energyBonus = currentLevel.energyBonus || 0;
                      card.incomeBonus = currentLevel.incomeBonus || 0;
                      card.pointsBonusHourlyRate = currentLevel.pointsBonusHourlyRate || 0;
                      card.pointsHourlyRate = currentLevel.pointsHourlyRate || 0;
                      card.tapBonus = currentLevel.tapBonus || 0;
                    }

                    if (nextLevel) {
                      card.nextLevel = nextLevel.id || 0;
                      card.nextEnergyBonus = nextLevel.energyBonus || 0;
                      card.nextIncomeBonus = nextLevel.incomeBonus || 0;
                      card.nextPointsBonusHourlyRate = nextLevel.pointsBonusHourlyRate || 0;
                      card.nextPointsHourlyRate = nextLevel.pointsHourlyRate || 0;
                      card.nextTapBonus = nextLevel.tapBonus || 0;
                      card.price = nextLevel.price || 0;
                    }
                  }

                  return inventory
                })
              }
            }
          });
        }
      }

      setInventory(prev => ({
        loaded: LOADING_TYPES.LOADED,
        list: [...inventory.list, ...allInventory]
      }));
      setCards(prev => ({
        loaded: LOADING_TYPES.LOADED,
        list: allCards
      }));
      setPizzaState(PIZZA_STATUS_TYPES.INVENTORY_RECEIVED);
    });
  };

  const sendTap = (timeStamp: number) => {
    const newPoints = wallet.points + 1;

    setWallet(prev => {
      const availableEnergy =  prev.availableEnergy - prev.totalPointsPerTap;
      const lastTap = (prev.lastTap || 0) > timeStamp ? prev.lastTap : timeStamp;
      localStorage.setItem(STORAGE_KEYS.ENERGY, JSON.stringify({availableEnergy, lastTap}));
      console.log('SPENT_ENERGY', availableEnergy);
      return {
        ...prev,
        points: prev.points + prev.totalPointsPerTap,
        availableEnergy,
        lastTap
      }
    });

    if (newPoints >= wallet.rankThreshold) {
      getState('TAP');
    }

    DEFAULT_PIZZA.WSTap();
  }

  const auth = () => {
    if (!webApp.initDataUnsafe || !webApp.initData) return;
    try {
      DEFAULT_PIZZA.WSAuth({
        provider: "tg",
        username: String(webApp.initDataUnsafe.user.id),
        password: String(webApp.initData),
      }, (envelope, WSAuthMessage) => {
        if (WSAuthMessage.client) {
          setPizzaState(PIZZA_STATUS_TYPES.USER_AUTHORIZED);
          getState('AUTH');
          getProfile();
          getInventory();
          getTasks();
        } else {
          setPizzaState(PIZZA_STATUS_TYPES.FAILED_AUTHORIZATION);
        }
      });
    } catch (e) {
      console.log('WSAuth error', e);
    }
  }

  const getState = (source: string) => {
    if (!DEFAULT_PIZZA) return;
    console.log('GET PIZZA STATE ON', source)

    DEFAULT_PIZZA.WSState();
  }

  const setWalletParams = (params: WebSocketWallet) => {
    let refillEnergy = 0;
    let refillCoins = 0;
    // @ts-ignore
    const availableEnergyObj: any = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENERGY));
    let newAvailableEnergy: number = availableEnergyObj ? availableEnergyObj.availableEnergy : 0;
    console.log('SET_ENERGY', availableEnergyObj);

    if (availableEnergyObj && availableEnergyObj.lastTap) {
      // @ts-ignore
      refillEnergy = ((Date.now() - availableEnergyObj.lastTap) / 1000).toFixed(0) * DEFAULT_RESTORE_ENERGY_PER_SECOND;
      console.log('refillEnergy', refillEnergy);
      newAvailableEnergy += refillEnergy;

      if (newAvailableEnergy > params.totalEnergy) {
        localStorage.removeItem(STORAGE_KEYS.ENERGY);
        newAvailableEnergy = params.totalEnergy;
      }
    }

    // @ts-ignore
    const memoryPointsObj: any = JSON.parse(localStorage.getItem(STORAGE_KEYS.POINTS));
    if (memoryPointsObj && memoryPointsObj.lastUpdate) {
      if (((Date.now() - memoryPointsObj.lastUpdate) / 1000) > 10) {
        refillCoins = params.points - memoryPointsObj.points;
      }
    }
    localStorage.setItem(STORAGE_KEYS.POINTS, JSON.stringify({points: params.points, lastUpdate: Date.now()}));

    setWallet(prev => ({
      ...prev,
      points: (params.lastUpdate || 0) > (params.lastTap || 0) ? params.points : prev.points,
      pointsHourlyRate: params.pointsHourlyRate,
      totalPointsHourlyRate: params.totalPointsHourlyRate,
      rank: params.rank,
      rankThreshold: params.rankThreshold,
      energyLevel: params.energyLevel,
      tapThreshold: params.tapThreshold,
      totalPointsPerTap: params.totalPointsPerTap,
      tapLevel: params.tapLevel,
      energyThreshold: params.energyThreshold,
      totalEnergy: params.totalEnergy,
      availableEnergy: newAvailableEnergy ? newAvailableEnergy :  params.totalEnergy,
      refPointsToParent: params.refPointsToParent,
      refPointsToParentIfPremium: params.refPointsToParentIfPremium,
      refPointsToInvitee: params.refPointsToInvitee,
      pointsBonusHourlyRate: params.pointsBonusHourlyRate,
      item1Collection: params.item1Collection,
      item1Id: params.item1Id,
      item2Collection: params.item2Collection,
      item2Id: params.item2Id,
      item3Collection: params.item3Collection,
      item3Id: params.item3Id,
      item4Collection: params.item4Collection,
      item4Id: params.item4Id,
      item5Collection: params.item5Collection,
      item5Id: params.item5Id,
      lastUpdate: params.lastUpdate,
      lastBonusedDay: params.lastBonusedDay,
      forParentPointsBonusHourlyRate: params.forParentPointsBonusHourlyRate,
      refillEnergy,
      refillCoins
    }));
  }

  const buyInventoryItem = (item: string, id: number) => {
    DEFAULT_PIZZA.WSBuyInventoryItem({item, id}, (envelope, message) => {
      setInventoryItem(item, id);
    });
  };

  const setInventoryItem = (collection: string, id: number) => {
    DEFAULT_PIZZA.WSSetStateInventoryItem({Collection: collection, ID: id}, (WSSetStateInventoryItemEnvelope, WSSetStateInventoryItemMessage) => {
      getState('SETTING INVENTORY');

      if (collection.includes('Items')) {
        const newInventory: ITEM_TYPE[] = inventory.list.map((inv: ITEM_TYPE) => {
          inv.selected = false;

          if (inv.collectionId === collection && inv.id === id) {
            inv.bought = true;
            inv.selected = true;
          }

          return inv;
        });

        setInventory(prev => ({
          loaded: LOADING_TYPES.LOADED,
          list: newInventory
        }));
      }

      if (collection.includes('MLCard')) {
        const newMLCards: CARD[] = cards.list.map((card: CARD) => {
          if (card.id === collection) {
            card.bought = true;

            const currentLevel: any = card.levels.filter((currentL: any) => currentL.id === id)[0] || null;
            const nextLevel: any = card.levels.filter((currentL: any) => currentL.id === id + 1)[0] || null;

            if (currentLevel) {
              card.level = currentLevel.id || 0;
              card.energyBonus = currentLevel.energyBonus || 0;
              card.incomeBonus = currentLevel.incomeBonus || 0;
              card.pointsBonusHourlyRate = currentLevel.pointsBonusHourlyRate || 0;
              card.pointsHourlyRate = currentLevel.pointsHourlyRate || 0;
              card.tapBonus = currentLevel.tapBonus || 0;
            }

            if (nextLevel) {
              card.nextLevel = nextLevel.id || 0;
              card.nextEnergyBonus = nextLevel.energyBonus || 0;
              card.nextIncomeBonus = nextLevel.incomeBonus || 0;
              card.nextPointsBonusHourlyRate = nextLevel.pointsBonusHourlyRate || 0;
              card.nextPointsHourlyRate = nextLevel.pointsHourlyRate || 0;
              card.nextTapBonus = nextLevel.tapBonus || 0;
              card.price = nextLevel.price || 0;
            }
          }

          return card;
        });

        setCards(prev => ({
          loaded: LOADING_TYPES.LOADED,
          list: newMLCards
        }));
      }
    });
  };

  const getTasks = () => {
    setTasks(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSTasks((envelope, WSTasksMessage) => {
      const newTasks: TASK[] = WSTasksMessage.tasks?.map((task: ITask) => {
        return {
          name: task.name,
          icon: task.name,
          reward: task.reward,
          completed: !!task.completed,
          kind: task.kind,
          value: task.value,
        }
      }) || [];

      setTasks(() => ({
        loaded: LOADING_TYPES.LOADED,
        list: newTasks
      }));
    });
  };

  const getDailyBonuses = () => {
    setDailyBonuses(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSDailyBonuses((envelope, WSDailyBonusesMessage) => {
      const newBonuses: DAILY_BONUS[] = WSDailyBonusesMessage.bonuses?.map((bonus: IBonus) => {
        return {
          day: bonus.Day,
          amount: bonus.Amount,
          claimable: !!bonus.Claimable,
          type: REWARD_TYPES.COINS
        };
      }) || [];

      setDailyBonuses(() => ({
        loaded: LOADING_TYPES.LOADED,
        bonuses: newBonuses
      }));
    });
  };

  const claimDailyBonus = () => {
    DEFAULT_PIZZA.WSClaimDailyBonuses((envelope, WSClaimDailyBonusesMessage) => {
      const newBonuses: DAILY_BONUS[] = WSClaimDailyBonusesMessage.bonuses?.map((bonus: IBonus) => {
        return {
          day: bonus.Day,
          amount: bonus.Amount,
          claimable: !!bonus.Claimable,
          type: REWARD_TYPES.COINS
        };
      }) || [];

      setDailyBonuses(() => ({
        loaded: LOADING_TYPES.LOADED,
        bonuses: newBonuses
      }));
    });
  };

  useEffect(() => {
    const s = timer + 1;

    if (s >= 10) {
      setTimer(0);
      getState('EVERY 10 SECONDS');
      return () => {};
    }

    const intervalId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTimer(s);
      setWallet(prev => {
        const newAvailableEnergy: number = prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND;
        if (newAvailableEnergy <= (prev.totalEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND - 1)) {
          if (newAvailableEnergy < prev.totalEnergy) {
            const lastTap = Date.now();
            console.log('INCREASE_ENERGY', newAvailableEnergy);
            localStorage.setItem(STORAGE_KEYS.ENERGY, JSON.stringify({availableEnergy: newAvailableEnergy, lastTap}));
          } else {
            console.log('REMOVE_ENERGY');
            localStorage.removeItem(STORAGE_KEYS.ENERGY);
          }
        }
        return {
          ...prev,
          availableEnergy: prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND <= prev.totalEnergy ? prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND : prev.totalEnergy
        }
      });
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [timer]);

  return (
    <WebSocketContext.Provider
      value={{
        pizzaInit,
        pizzaState,
        profile,
        wallet,
        friends,
        init,
        setPizzaInit,
        setPizzaState,
        setWalletParams,
        sendTap,
        getInvitees,
        getInventory,
        inventory,
        cards,
        buyInventoryItem,
        setInventoryItem,
        tasks,
        dailyBonuses,
        getDailyBonuses,
        claimDailyBonus,
    }}
    >
      <PizzaContext.Provider value={DEFAULT_PIZZA}>
        {children}
      </PizzaContext.Provider>
    </WebSocketContext.Provider>
)
}
