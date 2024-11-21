//BUILDING
import Building1SVG from "../../assets/images/cards/building/1.png";
import Building2SVG from "../../assets/images/cards/building/2.png";
import Building3SVG from "../../assets/images/cards/building/3.png";
import Building4SVG from "../../assets/images/cards/building/4.png";
import Building5SVG from "../../assets/images/cards/building/5.png";
import Building6SVG from "../../assets/images/cards/building/6.png";

// WORKERS
import Workers1SVG from "../../assets/images/cards/workers/1.png";
import Workers2SVG from "../../assets/images/cards/workers/2.png";
import Workers3SVG from "../../assets/images/cards/workers/3.png";
import Workers4SVG from "../../assets/images/cards/workers/4.png";
import Workers5SVG from "../../assets/images/cards/workers/5.png";
import Workers6SVG from "../../assets/images/cards/workers/6.png";

// ARMY
import Army1SVG from "../../assets/images/cards/army/1.png";
import Army2SVG from "../../assets/images/cards/army/2.png";
import Army3SVG from "../../assets/images/cards/army/3.png";
import Army4SVG from "../../assets/images/cards/army/4.png";
import Army5SVG from "../../assets/images/cards/army/5.png";
import Army6SVG from "../../assets/images/cards/army/6.png";

export const cardsData = (cardName: string): {
  image: any,
  name: string,
  description: string
} => {
  switch (cardName) {
    //BUILDING
    case 'ml_card_building_1':
      return {
        image: Building1SVG,
        name: 'FARM_TITLE',
        description: 'FARM_DESCRIPTION'
      };

    case 'ml_card_building_2':
      return {
        image: Building2SVG,
        name: 'MINE_TITLE',
        description: 'MINE_DESCRIPTION'
      };

    case 'ml_card_building_3':
      return {
        image: Building3SVG,
        name: 'GARDEN_TITLE',
        description: 'GARDEN_DESCRIPTION'
      };

    case 'ml_card_building_4':
      return {
        image: Building4SVG,
        name: 'HUNTER_CABIN_TITLE',
        description: 'HUNTER_CABIN_DESCRIPTION'
      };

    case 'ml_card_building_5':
      return {
        image: Building5SVG,
        name: 'FISHER_CABIN_TITLE',
        description: 'FISHER_CABIN_DESCRIPTION'
      };

    case 'ml_card_building_6':
      return {
        image: Building6SVG,
        name: 'CHICKEN_HOUSE_TITLE',
        description: 'CHICKEN_HOUSE_DESCRIPTION'
      };

    // WORKERS
    case 'ml_card_workers_1':
      return {
        image: Workers1SVG,
        name: 'SHIBA_TITLE',
        description: 'SHIBA_DESCRIPTION'
      };

    case 'ml_card_workers_2':
      return {
        image: Workers2SVG,
        name: 'MINER_TITLE',
        description: 'MINER_DESCRIPTION'
      };

    case 'ml_card_workers_3':
      return {
        image: Workers3SVG,
        name: 'FARMER_TITLE',
        description: 'FARMER_DESCRIPTION'
      };

    case 'ml_card_workers_4':
      return {
        image: Workers4SVG,
        name: 'HUNTER_TITLE',
        description: 'HUNTER_DESCRIPTION'
      };

    case 'ml_card_workers_5':
      return {
        image: Workers5SVG,
        name: 'FISHER_TITLE',
        description: 'FISHER_DESCRIPTION'
      };

    case 'ml_card_workers_6':
      return {
        image: Workers6SVG,
        name: 'EGGSMAN_TITLE',
        description: 'EGGSMAN_DESCRIPTION'
      };

    // ARMY
    case 'ml_card_army_1':
      return {
        image: Army1SVG,
        name: 'CAT_PEASANT_TITLE',
        description: 'CAT_PEASANT_DESCRIPTION'
      };

    case 'ml_card_army_2':
      return {
        image: Army2SVG,
        name: 'ARCHER_TITLE',
        description: 'ARCHER_DESCRIPTION'
      };

    case 'ml_card_army_3':
      return {
        image: Army3SVG,
        name: 'CAT_SWORD_TITLE',
        description: 'CAT_SWORD_DESCRIPTION'
      };

    case 'ml_card_army_4':
      return {
        image: Army4SVG,
        name: 'SPERMAN_TITLE',
        description: 'SPERMAN_DESCRIPTION'
      };

    case 'ml_card_army_5':
      return {
        image: Army5SVG,
        name: 'CAT_SCOUT_TITLE',
        description: 'CAT_SCOUT_DESCRIPTION'
      };

    case 'ml_card_army_6':
      return {
        image: Army6SVG,
        name: 'CAT_PEPEHORSE_TITLE',
        description: 'CAT_PEPEHORSE_DESCRIPTION'
      };

    default:
      return {
        image: '',
        name: '',
        description: ''
      };
  };
};

