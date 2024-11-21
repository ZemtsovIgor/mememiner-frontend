import React from 'react';
import {renderToStaticMarkup} from "react-dom/server";

// Icons
//Base
import { ReactComponent as HeaddressBasicIconSVG } from "../../assets/images/inventory/icons/base/headdress.svg";
import { ReactComponent as OuterwearBasicIconSVG } from "../../assets/images/inventory/icons/base/outerwear.svg";
import { ReactComponent as PantsBasicIconSVG } from "../../assets/images/inventory/icons/base/pants.svg";
import { ReactComponent as ShoesBasicIconSVG } from "../../assets/images/inventory/icons/base/shoes.svg";
import { ReactComponent as WeaponBasicIconSVG } from "../../assets/images/inventory/icons/base/weapon.svg";
// Common
// Coomer
import { ReactComponent as HeaddressCoomerIconSVG } from "../../assets/images/inventory/icons/common/coomer/headdress.svg";
import { ReactComponent as OuterwearCoomerIconSVG } from "../../assets/images/inventory/icons/common/coomer/outerwear.svg";
import { ReactComponent as PantsCoomerIconSVG } from "../../assets/images/inventory/icons/common/coomer/pants.svg";
import { ReactComponent as ShoesCoomerIconSVG } from "../../assets/images/inventory/icons/common/coomer/shoes.svg";
import { ReactComponent as WeaponCoomerIconSVG } from "../../assets/images/inventory/icons/common/coomer/weapon.svg";
// Cryptobro
import { ReactComponent as HeaddressCryptobroIconSVG } from "../../assets/images/inventory/icons/common/cryptobro/headdress.svg";
import { ReactComponent as OuterwearCryptobroIconSVG } from "../../assets/images/inventory/icons/common/cryptobro/outerwear.svg";
import { ReactComponent as PantsCryptobroIconSVG } from "../../assets/images/inventory/icons/common/cryptobro/pants.svg";
import { ReactComponent as ShoesCryptobroIconSVG } from "../../assets/images/inventory/icons/common/cryptobro/shoes.svg";
import { ReactComponent as WeaponCryptobroIconSVG } from "../../assets/images/inventory/icons/common/cryptobro/weapon.svg";
// Wagey
import { ReactComponent as HeaddressWageyIconSVG } from "../../assets/images/inventory/icons/common/wagey/headdress.svg";
import { ReactComponent as OuterwearWageyIconSVG } from "../../assets/images/inventory/icons/common/wagey/outerwear.svg";
import { ReactComponent as PantsWageyIconSVG } from "../../assets/images/inventory/icons/common/wagey/pants.svg";
import { ReactComponent as ShoesWageyIconSVG } from "../../assets/images/inventory/icons/common/wagey/shoes.svg";
import { ReactComponent as WeaponWageyIconSVG } from "../../assets/images/inventory/icons/common/wagey/weapon.svg";
// Uncommon
// Boomer
import { ReactComponent as HeaddressBoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/boomer/headdress.svg";
import { ReactComponent as OuterwearBoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/boomer/outerwear.svg";
import { ReactComponent as PantsBoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/boomer/pants.svg";
import { ReactComponent as ShoesBoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/boomer/shoes.svg";
import { ReactComponent as WeaponBoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/boomer/weapon.svg";
// Classic Meme #1
import { ReactComponent as HeaddressClassicMeme1IconSVG } from "../../assets/images/inventory/icons/uncommon/classic_meme_1/headdress.svg";
import { ReactComponent as OuterwearClassicMeme1IconSVG } from "../../assets/images/inventory/icons/uncommon/classic_meme_1/outerwear.svg";
import { ReactComponent as PantsClassicMeme1IconSVG } from "../../assets/images/inventory/icons/uncommon/classic_meme_1/pants.svg";
import { ReactComponent as ShoesClassicMeme1IconSVG } from "../../assets/images/inventory/icons/uncommon/classic_meme_1/shoes.svg";
import { ReactComponent as WeaponClassicMeme1IconSVG } from "../../assets/images/inventory/icons/uncommon/classic_meme_1/weapon.svg";
// Doomer
import { ReactComponent as HeaddressDoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/doomer/headdress.svg";
import { ReactComponent as OuterwearDoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/doomer/outerwear.svg";
import { ReactComponent as PantsDoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/doomer/pants.svg";
import { ReactComponent as ShoesDoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/doomer/shoes.svg";
import { ReactComponent as WeaponDoomerIconSVG } from "../../assets/images/inventory/icons/uncommon/doomer/weapon.svg";
// Rare
// Centurion
import { ReactComponent as HeaddressCenturionIconSVG } from "../../assets/images/inventory/icons/rare/centurion/headdress.svg";
import { ReactComponent as OuterwearCenturionIconSVG } from "../../assets/images/inventory/icons/rare/centurion/outerwear.svg";
import { ReactComponent as PantsCenturionIconSVG } from "../../assets/images/inventory/icons/rare/centurion/pants.svg";
import { ReactComponent as ShoesCenturionIconSVG } from "../../assets/images/inventory/icons/rare/centurion/shoes.svg";
import { ReactComponent as WeaponCenturionIconSVG } from "../../assets/images/inventory/icons/rare/centurion/weapon.svg";
// Npc
import { ReactComponent as HeaddressNpcIconSVG } from "../../assets/images/inventory/icons/rare/npc/headdress.svg";
import { ReactComponent as OuterwearNpcIconSVG } from "../../assets/images/inventory/icons/rare/npc/outerwear.svg";
import { ReactComponent as PantsNpcIconSVG } from "../../assets/images/inventory/icons/rare/npc/pants.svg";
import { ReactComponent as ShoesNpcIconSVG } from "../../assets/images/inventory/icons/rare/npc/shoes.svg";
import { ReactComponent as WeaponNpcIconSVG } from "../../assets/images/inventory/icons/rare/npc/weapon.svg";
// Stonks
import { ReactComponent as HeaddressStonksIconSVG } from "../../assets/images/inventory/icons/rare/stonks/headdress.svg";
import { ReactComponent as OuterwearStonksIconSVG } from "../../assets/images/inventory/icons/rare/stonks/outerwear.svg";
import { ReactComponent as PantsStonksIconSVG } from "../../assets/images/inventory/icons/rare/stonks/pants.svg";
import { ReactComponent as ShoesStonksIconSVG } from "../../assets/images/inventory/icons/rare/stonks/shoes.svg";
import { ReactComponent as WeaponStonksIconSVG } from "../../assets/images/inventory/icons/rare/stonks/weapon.svg";
// Epic
// Doge Pyjamas
import { ReactComponent as HeaddressDogePyjamasIconSVG } from "../../assets/images/inventory/icons/epic/doge_pyjamas/headdress.svg";
import { ReactComponent as OuterwearDogePyjamasIconSVG } from "../../assets/images/inventory/icons/epic/doge_pyjamas/outerwear.svg";
import { ReactComponent as PantsDogePyjamasIconSVG } from "../../assets/images/inventory/icons/epic/doge_pyjamas/pants.svg";
import { ReactComponent as ShoesDogePyjamasIconSVG } from "../../assets/images/inventory/icons/epic/doge_pyjamas/shoes.svg";
import { ReactComponent as WeaponDogePyjamasIconSVG } from "../../assets/images/inventory/icons/epic/doge_pyjamas/weapon.svg";
// Shadow Wizard Purple
import { ReactComponent as HeaddressShadowWizardPurpleIconSVG } from "../../assets/images/inventory/icons/epic/shadow_wizard_purple/headdress.svg";
import { ReactComponent as OuterwearShadowWizardPurpleIconSVG } from "../../assets/images/inventory/icons/epic/shadow_wizard_purple/outerwear.svg";
import { ReactComponent as PantsShadowWizardPurpleIconSVG } from "../../assets/images/inventory/icons/epic/shadow_wizard_purple/pants.svg";
import { ReactComponent as ShoesShadowWizardPurpleIconSVG } from "../../assets/images/inventory/icons/epic/shadow_wizard_purple/shoes.svg";
import { ReactComponent as WeaponShadowWizardPurpleIconSVG } from "../../assets/images/inventory/icons/epic/shadow_wizard_purple/weapon.svg";
// Legendary
// The Pasha
import { ReactComponent as HeaddressThePashaIconSVG } from "../../assets/images/inventory/icons/legendary/the_pasha/headdress.svg";
import { ReactComponent as OuterwearThePashaIconSVG } from "../../assets/images/inventory/icons/legendary/the_pasha/outerwear.svg";
import { ReactComponent as PantsThePashaIconSVG } from "../../assets/images/inventory/icons/legendary/the_pasha/pants.svg";
import { ReactComponent as ShoesThePashaIconSVG } from "../../assets/images/inventory/icons/legendary/the_pasha/shoes.svg";
import { ReactComponent as WeaponThePashaIconSVG } from "../../assets/images/inventory/icons/legendary/the_pasha/weapon.svg";
// The President
import { ReactComponent as HeaddressThePresidentIconSVG } from "../../assets/images/inventory/icons/legendary/the_president/headdress.svg";
import { ReactComponent as OuterwearThePresidentIconSVG } from "../../assets/images/inventory/icons/legendary/the_president/outerwear.svg";
import { ReactComponent as PantsThePresidentIconSVG } from "../../assets/images/inventory/icons/legendary/the_president/pants.svg";
import { ReactComponent as ShoesThePresidentIconSVG } from "../../assets/images/inventory/icons/legendary/the_president/shoes.svg";
import { ReactComponent as WeaponThePresidentIconSVG } from "../../assets/images/inventory/icons/legendary/the_president/weapon.svg";


// Images
//Base
import { ReactComponent as HeaddressBasicSVG } from "../../assets/images/inventory/images/base/headdress.svg";
import { ReactComponent as OuterwearBasicSVG } from "../../assets/images/inventory/images/base/outerwear.svg";
import { ReactComponent as PantsBasicSVG } from "../../assets/images/inventory/images/base/pants.svg";
import { ReactComponent as ShoesBasicSVG } from "../../assets/images/inventory/images/base/shoes.svg";
import { ReactComponent as WeaponBasicSVG } from "../../assets/images/inventory/images/base/weapon.svg";
// Common
// Coomer
import { ReactComponent as HeaddressCoomerSVG } from "../../assets/images/inventory/images/common/coomer/headdress.svg";
import { ReactComponent as OuterwearCoomerSVG } from "../../assets/images/inventory/images/common/coomer/outerwear.svg";
import { ReactComponent as PantsCoomerSVG } from "../../assets/images/inventory/images/common/coomer/pants.svg";
import { ReactComponent as ShoesCoomerSVG } from "../../assets/images/inventory/images/common/coomer/shoes.svg";
import { ReactComponent as WeaponCoomerSVG } from "../../assets/images/inventory/images/common/coomer/weapon.svg";
// Cryptobro
import { ReactComponent as HeaddressCryptobroSVG } from "../../assets/images/inventory/images/common/cryptobro/headdress.svg";
import { ReactComponent as OuterwearCryptobroSVG } from "../../assets/images/inventory/images/common/cryptobro/outerwear.svg";
import { ReactComponent as PantsCryptobroSVG } from "../../assets/images/inventory/images/common/cryptobro/pants.svg";
import { ReactComponent as ShoesCryptobroSVG } from "../../assets/images/inventory/images/common/cryptobro/shoes.svg";
import { ReactComponent as WeaponCryptobroSVG } from "../../assets/images/inventory/images/common/cryptobro/weapon.svg";
// Wagey
import { ReactComponent as HeaddressWageySVG } from "../../assets/images/inventory/images/common/wagey/headdress.svg";
import { ReactComponent as OuterwearWageySVG } from "../../assets/images/inventory/images/common/wagey/outerwear.svg";
import { ReactComponent as PantsWageySVG } from "../../assets/images/inventory/images/common/wagey/pants.svg";
import { ReactComponent as ShoesWageySVG } from "../../assets/images/inventory/images/common/wagey/shoes.svg";
import { ReactComponent as WeaponWageySVG } from "../../assets/images/inventory/images/common/wagey/weapon.svg";
// Uncommon
// Boomer
import { ReactComponent as HeaddressBoomerSVG } from "../../assets/images/inventory/images/uncommon/boomer/headdress.svg";
import { ReactComponent as OuterwearBoomerSVG } from "../../assets/images/inventory/images/uncommon/boomer/outerwear.svg";
import { ReactComponent as PantsBoomerSVG } from "../../assets/images/inventory/images/uncommon/boomer/pants.svg";
import { ReactComponent as ShoesBoomerSVG } from "../../assets/images/inventory/images/uncommon/boomer/shoes.svg";
import { ReactComponent as WeaponBoomerSVG } from "../../assets/images/inventory/images/uncommon/boomer/weapon.svg";
// Classic Meme #1
import { ReactComponent as HeaddressClassicMeme1SVG } from "../../assets/images/inventory/images/uncommon/classic_meme_1/headdress.svg";
import { ReactComponent as OuterwearClassicMeme1SVG } from "../../assets/images/inventory/images/uncommon/classic_meme_1/outerwear.svg";
import { ReactComponent as PantsClassicMeme1SVG } from "../../assets/images/inventory/images/uncommon/classic_meme_1/pants.svg";
import { ReactComponent as ShoesClassicMeme1SVG } from "../../assets/images/inventory/images/uncommon/classic_meme_1/shoes.svg";
import { ReactComponent as WeaponClassicMeme1SVG } from "../../assets/images/inventory/images/uncommon/classic_meme_1/weapon.svg";
// Doomer
import { ReactComponent as HeaddressDoomerSVG } from "../../assets/images/inventory/images/uncommon/doomer/headdress.svg";
import { ReactComponent as OuterwearDoomerSVG } from "../../assets/images/inventory/images/uncommon/doomer/outerwear.svg";
import { ReactComponent as PantsDoomerSVG } from "../../assets/images/inventory/images/uncommon/doomer/pants.svg";
import { ReactComponent as ShoesDoomerSVG } from "../../assets/images/inventory/images/uncommon/doomer/shoes.svg";
import { ReactComponent as WeaponDoomerSVG } from "../../assets/images/inventory/images/uncommon/doomer/weapon.svg";
// Rare
// Centurion
import { ReactComponent as HeaddressCenturionSVG } from "../../assets/images/inventory/images/rare/centurion/headdress.svg";
import { ReactComponent as OuterwearCenturionSVG } from "../../assets/images/inventory/images/rare/centurion/outerwear.svg";
import { ReactComponent as PantsCenturionSVG } from "../../assets/images/inventory/images/rare/centurion/pants.svg";
import { ReactComponent as ShoesCenturionSVG } from "../../assets/images/inventory/images/rare/centurion/shoes.svg";
import { ReactComponent as WeaponCenturionSVG } from "../../assets/images/inventory/images/rare/centurion/weapon.svg";
// Npc
import { ReactComponent as HeaddressNpcSVG } from "../../assets/images/inventory/images/rare/npc/headdress.svg";
import { ReactComponent as OuterwearNpcSVG } from "../../assets/images/inventory/images/rare/npc/outerwear.svg";
import { ReactComponent as PantsNpcSVG } from "../../assets/images/inventory/images/rare/npc/pants.svg";
import { ReactComponent as ShoesNpcSVG } from "../../assets/images/inventory/images/rare/npc/shoes.svg";
import { ReactComponent as WeaponNpcSVG } from "../../assets/images/inventory/images/rare/npc/weapon.svg";
// Stonks
import { ReactComponent as HeaddressStonksSVG } from "../../assets/images/inventory/images/rare/stonks/headdress.svg";
import { ReactComponent as OuterwearStonksSVG } from "../../assets/images/inventory/images/rare/stonks/outerwear.svg";
import { ReactComponent as PantsStonksSVG } from "../../assets/images/inventory/images/rare/stonks/pants.svg";
import { ReactComponent as ShoesStonksSVG } from "../../assets/images/inventory/images/rare/stonks/shoes.svg";
import { ReactComponent as WeaponStonksSVG } from "../../assets/images/inventory/images/rare/stonks/weapon.svg";
// Epic
// Doge Pyjamas
import { ReactComponent as HeaddressDogePyjamasSVG } from "../../assets/images/inventory/images/epic/doge_pyjamas/headdress.svg";
import { ReactComponent as OuterwearDogePyjamasSVG } from "../../assets/images/inventory/images/epic/doge_pyjamas/outerwear.svg";
import { ReactComponent as PantsDogePyjamasSVG } from "../../assets/images/inventory/images/epic/doge_pyjamas/pants.svg";
import { ReactComponent as ShoesDogePyjamasSVG } from "../../assets/images/inventory/images/epic/doge_pyjamas/shoes.svg";
import { ReactComponent as WeaponDogePyjamasSVG } from "../../assets/images/inventory/images/epic/doge_pyjamas/weapon.svg";
// Shadow Wizard Purple
import { ReactComponent as HeaddressShadowWizardPurpleSVG } from "../../assets/images/inventory/images/epic/shadow_wizard_purple/headdress.svg";
import { ReactComponent as OuterwearShadowWizardPurpleSVG } from "../../assets/images/inventory/images/epic/shadow_wizard_purple/outerwear.svg";
import { ReactComponent as PantsShadowWizardPurpleSVG } from "../../assets/images/inventory/images/epic/shadow_wizard_purple/pants.svg";
import { ReactComponent as ShoesShadowWizardPurpleSVG } from "../../assets/images/inventory/images/epic/shadow_wizard_purple/shoes.svg";
import { ReactComponent as WeaponShadowWizardPurpleSVG } from "../../assets/images/inventory/images/epic/shadow_wizard_purple/weapon.svg";
// Legendary
// The Pasha
import { ReactComponent as HeaddressThePashaSVG } from "../../assets/images/inventory/images/legendary/the_pasha/headdress.svg";
import { ReactComponent as OuterwearThePashaSVG } from "../../assets/images/inventory/images/legendary/the_pasha/outerwear.svg";
import { ReactComponent as PantsThePashaSVG } from "../../assets/images/inventory/images/legendary/the_pasha/pants.svg";
import { ReactComponent as ShoesThePashaSVG } from "../../assets/images/inventory/images/legendary/the_pasha/shoes.svg";
import { ReactComponent as WeaponThePashaSVG } from "../../assets/images/inventory/images/legendary/the_pasha/weapon.svg";
// The President
import { ReactComponent as HeaddressThePresidentSVG } from "../../assets/images/inventory/images/legendary/the_president/headdress.svg";
import { ReactComponent as OuterwearThePresidentSVG } from "../../assets/images/inventory/images/legendary/the_president/outerwear.svg";
import { ReactComponent as PantsThePresidentSVG } from "../../assets/images/inventory/images/legendary/the_president/pants.svg";
import { ReactComponent as ShoesThePresidentSVG } from "../../assets/images/inventory/images/legendary/the_president/shoes.svg";
import { ReactComponent as WeaponThePresidentSVG } from "../../assets/images/inventory/images/legendary/the_president/weapon.svg";


export const inventoryIcon = (inventoryName: string): string => {
  switch (inventoryName) {
    //Base
    case 'inventory_base_headdress_0_0':
      return renderToStaticMarkup(<HeaddressBasicIconSVG />);

    case 'inventory_base_outerwear_0_0':
      return renderToStaticMarkup(<OuterwearBasicIconSVG />);

    case 'inventory_base_pants_0_0':
      return renderToStaticMarkup(<PantsBasicIconSVG />);

    case 'inventory_base_shoes_0_0':
      return renderToStaticMarkup(<ShoesBasicIconSVG />);

    case 'inventory_base_weapon_0_0':
      return renderToStaticMarkup(<WeaponBasicIconSVG />);

    // Common
    // Coomer
    case 'inventory_common_headdress_1_1':
      return renderToStaticMarkup(<HeaddressCoomerIconSVG />);

    case 'inventory_common_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearCoomerIconSVG />);

    case 'inventory_common_pants_1_1':
      return renderToStaticMarkup(<PantsCoomerIconSVG />);

    case 'inventory_common_shoes_1_1':
      return renderToStaticMarkup(<ShoesCoomerIconSVG />);

    case 'inventory_common_weapon_1_1':
      return renderToStaticMarkup(<WeaponCoomerIconSVG />);
    // Cryptobro
    case 'inventory_common_headdress_2_1':
      return renderToStaticMarkup(<HeaddressCryptobroIconSVG />);

    case 'inventory_common_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearCryptobroIconSVG />);

    case 'inventory_common_pants_2_1':
      return renderToStaticMarkup(<PantsCryptobroIconSVG />);

    case 'inventory_common_shoes_2_1':
      return renderToStaticMarkup(<ShoesCryptobroIconSVG />);

    case 'inventory_common_weapon_2_1':
      return renderToStaticMarkup(<WeaponCryptobroIconSVG />);
    // Wagey
    case 'inventory_common_headdress_3_1':
      return renderToStaticMarkup(<HeaddressWageyIconSVG />);

    case 'inventory_common_outerwear_3_1':
      return renderToStaticMarkup(<OuterwearWageyIconSVG />);

    case 'inventory_common_pants_3_1':
      return renderToStaticMarkup(<PantsWageyIconSVG />);

    case 'inventory_common_shoes_3_1':
      return renderToStaticMarkup(<ShoesWageyIconSVG />);

    case 'inventory_common_weapon_3_1':
      return renderToStaticMarkup(<WeaponWageyIconSVG />);
    // Uncommon
    // Boomer
    case 'inventory_uncommon_headdress_1_1':
      return renderToStaticMarkup(<HeaddressBoomerIconSVG />);

    case 'inventory_uncommon_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearBoomerIconSVG />);

    case 'inventory_uncommon_pants_1_1':
      return renderToStaticMarkup(<PantsBoomerIconSVG />);

    case 'inventory_uncommon_shoes_1_1':
      return renderToStaticMarkup(<ShoesBoomerIconSVG />);

    case 'inventory_uncommon_weapon_1_1':
      return renderToStaticMarkup(<WeaponBoomerIconSVG />);
    // Classic Meme #1
    case 'inventory_uncommon_headdress_2_1':
      return renderToStaticMarkup(<HeaddressClassicMeme1IconSVG />);

    case 'inventory_uncommon_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearClassicMeme1IconSVG />);

    case 'inventory_uncommon_pants_2_1':
      return renderToStaticMarkup(<PantsClassicMeme1IconSVG />);

    case 'inventory_uncommon_shoes_2_1':
      return renderToStaticMarkup(<ShoesClassicMeme1IconSVG />);

    case 'inventory_uncommon_weapon_2_1':
      return renderToStaticMarkup(<WeaponClassicMeme1IconSVG />);
    // Doomer
    case 'inventory_uncommon_headdress_3_1':
      return renderToStaticMarkup(<HeaddressDoomerIconSVG />);

    case 'inventory_uncommon_outerwear_3_1':
      return renderToStaticMarkup(<OuterwearDoomerIconSVG />);

    case 'inventory_uncommon_pants_3_1':
      return renderToStaticMarkup(<PantsDoomerIconSVG />);

    case 'inventory_uncommon_shoes_3_1':
      return renderToStaticMarkup(<ShoesDoomerIconSVG />);

    case 'inventory_uncommon_weapon_3_1':
      return renderToStaticMarkup(<WeaponDoomerIconSVG />);
    // Rare
    // Centurion
    case 'inventory_rare_headdress_1_1':
      return renderToStaticMarkup(<HeaddressCenturionIconSVG />);

    case 'inventory_rare_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearCenturionIconSVG />);

    case 'inventory_rare_pants_1_1':
      return renderToStaticMarkup(<PantsCenturionIconSVG />);

    case 'inventory_rare_shoes_1_1':
      return renderToStaticMarkup(<ShoesCenturionIconSVG />);

    case 'inventory_rare_weapon_1_1':
      return renderToStaticMarkup(<WeaponCenturionIconSVG />);
    // Npc
    case 'inventory_rare_headdress_2_1':
      return renderToStaticMarkup(<HeaddressNpcIconSVG />);

    case 'inventory_rare_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearNpcIconSVG />);

    case 'inventory_rare_pants_2_1':
      return renderToStaticMarkup(<PantsNpcIconSVG />);

    case 'inventory_rare_shoes_2_1':
      return renderToStaticMarkup(<ShoesNpcIconSVG />);

    case 'inventory_rare_weapon_2_1':
      return renderToStaticMarkup(<WeaponNpcIconSVG />);
    // Stonks
    case 'inventory_rare_headdress_3_1':
      return renderToStaticMarkup(<HeaddressStonksIconSVG />);

    case 'inventory_rare_outerwear_3_1':
      return renderToStaticMarkup(<OuterwearStonksIconSVG />);

    case 'inventory_rare_pants_3_1':
      return renderToStaticMarkup(<PantsStonksIconSVG />);

    case 'inventory_rare_shoes_3_1':
      return renderToStaticMarkup(<ShoesStonksIconSVG />);

    case 'inventory_rare_weapon_3_1':
      return renderToStaticMarkup(<WeaponStonksIconSVG />);
    // Epic
    // Doge Pyjamas
    case 'inventory_epic_headdress_1_1':
      return renderToStaticMarkup(<HeaddressDogePyjamasIconSVG />);

    case 'inventory_epic_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearDogePyjamasIconSVG />);

    case 'inventory_epic_pants_1_1':
      return renderToStaticMarkup(<PantsDogePyjamasIconSVG />);

    case 'inventory_epic_shoes_1_1':
      return renderToStaticMarkup(<ShoesDogePyjamasIconSVG />);

    case 'inventory_epic_weapon_1_1':
      return renderToStaticMarkup(<WeaponDogePyjamasIconSVG />);
    // Shadow Wizard Purple
    case 'inventory_epic_headdress_2_1':
      return renderToStaticMarkup(<HeaddressShadowWizardPurpleIconSVG />);

    case 'inventory_epic_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearShadowWizardPurpleIconSVG />);

    case 'inventory_epic_pants_2_1':
      return renderToStaticMarkup(<PantsShadowWizardPurpleIconSVG />);

    case 'inventory_epic_shoes_2_1':
      return renderToStaticMarkup(<ShoesShadowWizardPurpleIconSVG />);

    case 'inventory_epic_weapon_2_1':
      return renderToStaticMarkup(<WeaponShadowWizardPurpleIconSVG />);
    // Legendary
    // The Pasha
    case 'inventory_legendary_headdress_1_1':
      return renderToStaticMarkup(<HeaddressThePashaIconSVG />);

    case 'inventory_legendary_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearThePashaIconSVG />);

    case 'inventory_legendary_pants_1_1':
      return renderToStaticMarkup(<PantsThePashaIconSVG />);

    case 'inventory_legendary_shoes_1_1':
      return renderToStaticMarkup(<ShoesThePashaIconSVG />);

    case 'inventory_legendary_weapon_1_1':
      return renderToStaticMarkup(<WeaponThePashaIconSVG />);
    // The President
    case 'inventory_legendary_headdress_2_1':
      return renderToStaticMarkup(<HeaddressThePresidentIconSVG />);

    case 'inventory_legendary_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearThePresidentIconSVG />);

    case 'inventory_legendary_pants_2_1':
      return renderToStaticMarkup(<PantsThePresidentIconSVG />);

    case 'inventory_legendary_shoes_2_1':
      return renderToStaticMarkup(<ShoesThePresidentIconSVG />);

    case 'inventory_legendary_weapon_2_1':
      return renderToStaticMarkup(<WeaponThePresidentIconSVG />);

    default:
      return '';
  };
};

export const inventoryImage = (inventoryName: string): string => {
  switch (inventoryName) {
    // Base
    case 'inventory_base_headdress_0_0':
      return renderToStaticMarkup(<HeaddressBasicSVG />);

    case 'inventory_base_outerwear_0_0':
      return renderToStaticMarkup(<OuterwearBasicSVG />);

    case 'inventory_base_pants_0_0':
      return renderToStaticMarkup(<PantsBasicSVG />);

    case 'inventory_base_shoes_0_0':
      return renderToStaticMarkup(<ShoesBasicSVG />);

    case 'inventory_base_weapon_0_0':
      return renderToStaticMarkup(<WeaponBasicSVG />);

    // Common
    // Coomer
    case 'inventory_common_headdress_1_1':
      return renderToStaticMarkup(<HeaddressCoomerSVG />);

    case 'inventory_common_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearCoomerSVG />);

    case 'inventory_common_pants_1_1':
      return renderToStaticMarkup(<PantsCoomerSVG />);

    case 'inventory_common_shoes_1_1':
      return renderToStaticMarkup(<ShoesCoomerSVG />);

    case 'inventory_common_weapon_1_1':
      return renderToStaticMarkup(<WeaponCoomerSVG />);
    // Cryptobro
    case 'inventory_common_headdress_2_1':
      return renderToStaticMarkup(<HeaddressCryptobroSVG />);

    case 'inventory_common_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearCryptobroSVG />);

    case 'inventory_common_pants_2_1':
      return renderToStaticMarkup(<PantsCryptobroSVG />);

    case 'inventory_common_shoes_2_1':
      return renderToStaticMarkup(<ShoesCryptobroSVG />);

    case 'inventory_common_weapon_2_1':
      return renderToStaticMarkup(<WeaponCryptobroSVG />);
    // Wagey
    case 'inventory_common_headdress_3_1':
      return renderToStaticMarkup(<HeaddressWageySVG />);

    case 'inventory_common_outerwear_3_1':
      return renderToStaticMarkup(<OuterwearWageySVG />);

    case 'inventory_common_pants_3_1':
      return renderToStaticMarkup(<PantsWageySVG />);

    case 'inventory_common_shoes_3_1':
      return renderToStaticMarkup(<ShoesWageySVG />);

    case 'inventory_common_weapon_3_1':
      return renderToStaticMarkup(<WeaponWageySVG />);
    // Uncommon
    // Boomer
    case 'inventory_uncommon_headdress_1_1':
      return renderToStaticMarkup(<HeaddressBoomerSVG />);

    case 'inventory_uncommon_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearBoomerSVG />);

    case 'inventory_uncommon_pants_1_1':
      return renderToStaticMarkup(<PantsBoomerSVG />);

    case 'inventory_uncommon_shoes_1_1':
      return renderToStaticMarkup(<ShoesBoomerSVG />);

    case 'inventory_uncommon_weapon_1_1':
      return renderToStaticMarkup(<WeaponBoomerSVG />);
    // Classic Meme #1
    case 'inventory_uncommon_headdress_2_1':
      return renderToStaticMarkup(<HeaddressClassicMeme1SVG />);

    case 'inventory_uncommon_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearClassicMeme1SVG />);

    case 'inventory_uncommon_pants_2_1':
      return renderToStaticMarkup(<PantsClassicMeme1SVG />);

    case 'inventory_uncommon_shoes_2_1':
      return renderToStaticMarkup(<ShoesClassicMeme1SVG />);

    case 'inventory_uncommon_weapon_2_1':
      return renderToStaticMarkup(<WeaponClassicMeme1SVG />);
    // Doomer
    case 'inventory_uncommon_headdress_3_1':
      return renderToStaticMarkup(<HeaddressDoomerSVG />);

    case 'inventory_uncommon_outerwear_3_1':
      return renderToStaticMarkup(<OuterwearDoomerSVG />);

    case 'inventory_uncommon_pants_3_1':
      return renderToStaticMarkup(<PantsDoomerSVG />);

    case 'inventory_uncommon_shoes_3_1':
      return renderToStaticMarkup(<ShoesDoomerSVG />);

    case 'inventory_uncommon_weapon_3_1':
      return renderToStaticMarkup(<WeaponDoomerSVG />);
    // Rare
    // Centurion
    case 'inventory_rare_headdress_1_1':
      return renderToStaticMarkup(<HeaddressCenturionSVG />);

    case 'inventory_rare_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearCenturionSVG />);

    case 'inventory_rare_pants_1_1':
      return renderToStaticMarkup(<PantsCenturionSVG />);

    case 'inventory_rare_shoes_1_1':
      return renderToStaticMarkup(<ShoesCenturionSVG />);

    case 'inventory_rare_weapon_1_1':
      return renderToStaticMarkup(<WeaponCenturionSVG />);
    // Npc
    case 'inventory_rare_headdress_2_1':
      return renderToStaticMarkup(<HeaddressNpcSVG />);

    case 'inventory_rare_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearNpcSVG />);

    case 'inventory_rare_pants_2_1':
      return renderToStaticMarkup(<PantsNpcSVG />);

    case 'inventory_rare_shoes_2_1':
      return renderToStaticMarkup(<ShoesNpcSVG />);

    case 'inventory_rare_weapon_2_1':
      return renderToStaticMarkup(<WeaponNpcSVG />);
    // Stonks
    case 'inventory_rare_headdress_3_1':
      return renderToStaticMarkup(<HeaddressStonksSVG />);

    case 'inventory_rare_outerwear_3_1':
      return renderToStaticMarkup(<OuterwearStonksSVG />);

    case 'inventory_rare_pants_3_1':
      return renderToStaticMarkup(<PantsStonksSVG />);

    case 'inventory_rare_shoes_3_1':
      return renderToStaticMarkup(<ShoesStonksSVG />);

    case 'inventory_rare_weapon_3_1':
      return renderToStaticMarkup(<WeaponStonksSVG />);
    // Epic
    // Doge Pyjamas
    case 'inventory_epic_headdress_1_1':
      return renderToStaticMarkup(<HeaddressDogePyjamasSVG />);

    case 'inventory_epic_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearDogePyjamasSVG />);

    case 'inventory_epic_pants_1_1':
      return renderToStaticMarkup(<PantsDogePyjamasSVG />);

    case 'inventory_epic_shoes_1_1':
      return renderToStaticMarkup(<ShoesDogePyjamasSVG />);

    case 'inventory_epic_weapon_1_1':
      return renderToStaticMarkup(<WeaponDogePyjamasSVG />);
    // Shadow Wizard Purple
    case 'inventory_epic_headdress_2_1':
      return renderToStaticMarkup(<HeaddressShadowWizardPurpleSVG />);

    case 'inventory_epic_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearShadowWizardPurpleSVG />);

    case 'inventory_epic_pants_2_1':
      return renderToStaticMarkup(<PantsShadowWizardPurpleSVG />);

    case 'inventory_epic_shoes_2_1':
      return renderToStaticMarkup(<ShoesShadowWizardPurpleSVG />);

    case 'inventory_epic_weapon_2_1':
      return renderToStaticMarkup(<WeaponShadowWizardPurpleSVG />);
    // Legendary
    // The Pasha
    case 'inventory_legendary_headdress_1_1':
      return renderToStaticMarkup(<HeaddressThePashaSVG />);

    case 'inventory_legendary_outerwear_1_1':
      return renderToStaticMarkup(<OuterwearThePashaSVG />);

    case 'inventory_legendary_pants_1_1':
      return renderToStaticMarkup(<PantsThePashaSVG />);

    case 'inventory_legendary_shoes_1_1':
      return renderToStaticMarkup(<ShoesThePashaSVG />);

    case 'inventory_legendary_weapon_1_1':
      return renderToStaticMarkup(<WeaponThePashaSVG />);
    // The President
    case 'inventory_legendary_headdress_2_1':
      return renderToStaticMarkup(<HeaddressThePresidentSVG />);

    case 'inventory_legendary_outerwear_2_1':
      return renderToStaticMarkup(<OuterwearThePresidentSVG />);

    case 'inventory_legendary_pants_2_1':
      return renderToStaticMarkup(<PantsThePresidentSVG />);

    case 'inventory_legendary_shoes_2_1':
      return renderToStaticMarkup(<ShoesThePresidentSVG />);

    case 'inventory_legendary_weapon_2_1':
      return renderToStaticMarkup(<WeaponThePresidentSVG />);

    default:
      return '';
  };
};

export const inventoryData = (inventoryName: string): {
  name: string,
  description: string
} => {
  switch (inventoryName) {
    //Base
    case 'inventory_base_headdress_0_0':
      return {
        name: 'BASIC_HEAD_TITLE',
        description: 'BASIC_HEAD_DESCRIPTION'
      };

    case 'inventory_base_outerwear_0_0':
      return {
        name: 'BASIC_HOODIE_TITLE',
        description: 'BASIC_HOODIE_DESCRIPTION'
      };

    case 'inventory_base_pants_0_0':
      return {
        name: 'BASIC_PANTS_TITLE',
        description: 'BASIC_PANTS_DESCRIPTION'
      };

    case 'inventory_base_shoes_0_0':
      return {
        name: 'BASIC_SHOES_TITLE',
        description: 'BASIC_SHOES_DESCRIPTION'
      };

    case 'inventory_base_weapon_0_0':
      return {
        name: 'BASIC_PICKAXE_TITLE',
        description: 'BASIC_PICKAXE_DESCRIPTION'
      };

    // Common
    // Coomer
    case 'inventory_common_headdress_1_1':
      return {
        name: 'COOMER_HEAD_TITLE',
        description: 'COOMER_HEAD_DESCRIPTION'
      };

    case 'inventory_common_outerwear_1_1':
      return {
        name: 'COOMER_SHIRT_TITLE',
        description: 'COOMER_SHIRT_DESCRIPTION'
      };

    case 'inventory_common_pants_1_1':
      return {
        name: 'COOMER_PANTS_TITLE',
        description: 'COOMER_PANTS_DESCRIPTION'
      };

    case 'inventory_common_shoes_1_1':
      return {
        name: 'COOMER_SHOES_TITLE',
        description: 'COOMER_SHOES_DESCRIPTION'
      };

    case 'inventory_common_weapon_1_1':
      return {
        name: 'COOMER_DAKIMAKURA_TITLE',
        description: 'COOMER_DAKIMAKURA_DESCRIPTION'
      };
    // Cryptobro
    case 'inventory_common_headdress_2_1':
      return {
        name: 'CRYPTOBRO_CAP_TITLE',
        description: 'CRYPTOBRO_CAP_DESCRIPTION'
      };

    case 'inventory_common_outerwear_2_1':
      return {
        name: 'CRYPTOBRO_SHIRT_TITLE',
        description: 'CRYPTOBRO_SHIRT_DESCRIPTION'
      };

    case 'inventory_common_pants_2_1':
      return {
        name: 'CRYPTOBRO_PANTS_TITLE',
        description: 'CRYPTOBRO_PANTS_DESCRIPTION'
      };

    case 'inventory_common_shoes_2_1':
      return {
        name: 'CRYPTOBRO_SHOES_TITLE',
        description: 'CRYPTOBRO_SHOES_DESCRIPTION'
      };

    case 'inventory_common_weapon_2_1':
      return {
        name: 'CRYPTOBRO_SHOVEL_TITLE',
        description: 'CRYPTOBRO_SHOVEL_DESCRIPTION'
      };
    // Wagey
    case 'inventory_common_headdress_3_1':
      return {
        name: 'WAGEY_CAP_TITLE',
        description: 'WAGEY_CAP_DESCRIPTION'
      };

    case 'inventory_common_outerwear_3_1':
      return {
        name: 'WAGEY_SHIRT_TITLE',
        description: 'WAGEY_SHIRT_DESCRIPTION'
      };

    case 'inventory_common_pants_3_1':
      return {
      name: 'WAGEY_PANTS_TITLE',
        description: 'WAGEY_PANTS_DESCRIPTION'
    };

    case 'inventory_common_shoes_3_1':
      return {
        name: 'WAGEY_SHOES_TITLE',
        description: 'WAGEY_SHOES_DESCRIPTION'
      };

    case 'inventory_common_weapon_3_1':
      return {
        name: 'WAGEY_TRAY_TITLE',
        description: 'WAGEY_TRAY_DESCRIPTION'
      };
    // Uncommon
    // Boomer
    case 'inventory_uncommon_headdress_1_1':
      return {
        name: 'BOOMER_HEAD_TITLE',
        description: 'BOOMER_HEAD_DESCRIPTION'
      };

    case 'inventory_uncommon_outerwear_1_1':
      return {
        name: 'BOOMER_SHIRT_TITLE',
        description: 'BOOMER_SHIRT_DESCRIPTION'
      };

    case 'inventory_uncommon_pants_1_1':
      return {
        name: 'BOOMER_SHORTS_TITLE',
        description: 'BOOMER_SHORTS_DESCRIPTION'
      };

    case 'inventory_uncommon_shoes_1_1':
      return {
        name: 'BOOMER_SHOES_TITLE',
        description: 'BOOMER_SHOES_DESCRIPTION'
      };

    case 'inventory_uncommon_weapon_1_1':
      return {
        name: 'BOOMER_ELIXIR_TITLE',
        description: 'BOOMER_ELIXIR_DESCRIPTION'
      };
    // Classic Meme #1
    case 'inventory_uncommon_headdress_2_1':
      return {
        name: 'CLASSIC_MEME_1_HAT_TITLE',
        description: 'CLASSIC_MEME_1_HAT_DESCRIPTION'
      };

    case 'inventory_uncommon_outerwear_2_1':
      return {
        name: 'CLASSIC_MEME_1_SHIRT_TITLE',
        description: 'CLASSIC_MEME_1_SHIRT_DESCRIPTION'
      };

    case 'inventory_uncommon_pants_2_1':
      return {
        name: 'CLASSIC_MEME_1_PANTS_TITLE',
        description: 'CLASSIC_MEME_1_PANTS_DESCRIPTION'
      };

    case 'inventory_uncommon_shoes_2_1':
      return {
        name: 'CLASSIC_MEME_1_SHOES_TITLE',
        description: 'CLASSIC_MEME_1_SHOES_DESCRIPTION'
      };

    case 'inventory_uncommon_weapon_2_1':
      return {
        name: 'CLASSIC_MEME_1_SPOON_TITLE',
        description: 'CLASSIC_MEME_1_SPOON_DESCRIPTION'
      };
    // Doomer
    case 'inventory_uncommon_headdress_3_1':
      return {
        name: 'DOOMER_HAT_TITLE',
        description: 'DOOMER_HAT_DESCRIPTION'
      };

    case 'inventory_uncommon_outerwear_3_1':
      return {
        name: 'DOOMER_HOODIE_TITLE',
        description: 'DOOMER_HOODIE_DESCRIPTION'
      };

    case 'inventory_uncommon_pants_3_1':
      return {
        name: 'DOOMER_PANTS_TITLE',
        description: 'DOOMER_PANTS_DESCRIPTION'
      };

    case 'inventory_uncommon_shoes_3_1':
      return {
        name: 'DOOMER_SHOES_TITLE',
        description: 'DOOMER_SHOES_DESCRIPTION'
      };

    case 'inventory_uncommon_weapon_3_1':
      return {
        name: 'DOOMER_SHOTGUN_TITLE',
        description: 'DOOMER_SHOTGUN_DESCRIPTION'
      };
    // Rare
    // Centurion
    case 'inventory_rare_headdress_1_1':
      return {
        name: 'CENTURION_HELM_TITLE',
        description: 'CENTURION_HELM_DESCRIPTION'
      };

    case 'inventory_rare_outerwear_1_1':
      return {
        name: 'CENTURION_CUIRASS_TITLE',
        description: 'CENTURION_CUIRASS_DESCRIPTION'
      };

    case 'inventory_rare_pants_1_1':
      return {
        name: 'CENTURION_SKIRT_TITLE',
        description: 'CENTURION_SKIRT_DESCRIPTION'
      };

    case 'inventory_rare_shoes_1_1':
      return {
        name: 'CENTURION_SANDALS_TITLE',
        description: 'CENTURION_SANDALS_DESCRIPTION'
      };

    case 'inventory_rare_weapon_1_1':
      return {
        name: 'CENTURION_STANDARD_TITLE',
        description: 'CENTURION_STANDARD_DESCRIPTION'
      };
    // Npc
    case 'inventory_rare_headdress_2_1':
      return {
        name: 'NPC_HEAD_TITLE',
        description: 'NPC_HEAD_DESCRIPTION'
      };

    case 'inventory_rare_outerwear_2_1':
      return {
        name: 'NPC_SHIRT_TITLE',
        description: 'NPC_SHIRT_DESCRIPTION'
      };

    case 'inventory_rare_pants_2_1':
      return {
        name: 'NPC_PANTS_TITLE',
        description: 'NPC_PANTS_DESCRIPTION'
      };

    case 'inventory_rare_shoes_2_1':
      return {
        name: 'NPC_SHOES_TITLE',
        description: 'NPC_SHOES_DESCRIPTION'
      };

    case 'inventory_rare_weapon_2_1':
      return {
        name: 'NPC_FLAG_TITLE',
        description: 'NPC_FLAG_DESCRIPTION'
      };
    // Stonks
    case 'inventory_rare_headdress_3_1':
      return {
        name: 'STONKS_HEAD_TITLE',
        description: 'STONKS_HEAD_DESCRIPTION'
      };

    case 'inventory_rare_outerwear_3_1':
      return {
        name: 'STONKS_JACKET_TITLE',
        description: 'STONKS_JACKET_DESCRIPTION'
      };

    case 'inventory_rare_pants_3_1':
      return {
        name: 'STONKS_PANTS_TITLE',
        description: 'STONKS_PANTS_DESCRIPTION'
      };

    case 'inventory_rare_shoes_3_1':
      return {
        name: 'STONKS_SHOES_TITLE',
        description: 'STONKS_SHOES_DESCRIPTION'
      };

    case 'inventory_rare_weapon_3_1':
      return {
        name: 'STONKS_ARROW_TITLE',
        description: 'STONKS_ARROW_DESCRIPTION'
      };
    // Epic
    // Doge Pyjamas
    case 'inventory_epic_headdress_1_1':
      return {
        name: 'DOGE_PYJAMAS_HOOD_TITLE',
        description: 'DOGE_PYJAMAS_HOOD_DESCRIPTION'
      };

    case 'inventory_epic_outerwear_1_1':
      return {
        name: 'DOGE_PYJAMAS_TOP_TITLE',
        description: 'DOGE_PYJAMAS_TOP_DESCRIPTION'
      };

    case 'inventory_epic_pants_1_1':
      return {
        name: 'DOGE_PYJAMAS_BOTTOM_TITLE',
        description: 'DOGE_PYJAMAS_BOTTOM_DESCRIPTION'
      };

    case 'inventory_epic_shoes_1_1':
      return {
        name: 'DOGE_PYJAMAS_SHOES_TITLE',
        description: 'DOGE_PYJAMAS_SHOES_DESCRIPTION'
      };

    case 'inventory_epic_weapon_1_1':
      return {
        name: 'DOGE_PYJAMAS_BAT_TITLE',
        description: 'DOGE_PYJAMAS_BAT_DESCRIPTION'
      };
    // Shadow Wizard Purple
    case 'inventory_epic_headdress_2_1':
      return {
        name: 'SHADOW_WIZARD_PURPLE_HOOD_TITLE',
        description: 'SHADOW_WIZARD_PURPLE_HOOD_DESCRIPTION'
      };

    case 'inventory_epic_outerwear_2_1':
      return {
        name: 'SHADOW_WIZARD_PURPLE_TOP_TITLE',
        description: 'SHADOW_WIZARD_PURPLE_TOP_DESCRIPTION'
      };

    case 'inventory_epic_pants_2_1':
      return {
        name: 'SHADOW_WIZARD_PURPLE_BOTTOM_TITLE',
        description: 'SHADOW_WIZARD_PURPLE_BOTTOM_DESCRIPTION'
      };

    case 'inventory_epic_shoes_2_1':
      return {
        name: 'SHADOW_WIZARD_PURPLE_SHOES_TITLE',
        description: 'SHADOW_WIZARD_PURPLE_SHOES_DESCRIPTION'
      };

    case 'inventory_epic_weapon_2_1':
      return {
        name: 'SHADOW_WIZARD_PURPLE_GUN_TITLE',
        description: 'SHADOW_WIZARD_PURPLE_GUN_DESCRIPTION'
      };
    // Legendary
    // The Pasha
    case 'inventory_legendary_headdress_1_1':
      return {
        name: 'PASHA_HEAD_TITLE',
        description: 'PASHA_HEAD_DESCRIPTION'
      };

    case 'inventory_legendary_outerwear_1_1':
      return {
        name: 'PASHA_TOP_TITLE',
        description: 'PASHA_TOP_DESCRIPTION'
      };

    case 'inventory_legendary_pants_1_1':
      return {
        name: 'PASHA_BOTTOM_TITLE',
        description: 'PASHA_BOTTOM_DESCRIPTION'
      };

    case 'inventory_legendary_shoes_1_1':
      return {
        name: 'PASHA_SHOES_TITLE',
        description: 'PASHA_SHOES_DESCRIPTION'
      };

    case 'inventory_legendary_weapon_1_1':
      return {
        name: 'PASHA_DOG_TITLE',
        description: 'PASHA_DOG_DESCRIPTION'
      };
    // The President
    case 'inventory_legendary_headdress_2_1':
      return {
        name: 'PRESIDENTIAL_HEAD_TITLE',
        description: 'PRESIDENTIAL_HEAD_DESCRIPTION'
      };

    case 'inventory_legendary_outerwear_2_1':
      return {
        name: 'PRESIDENTIAL_JACKET_TITLE',
        description: 'PRESIDENTIAL_JACKET_DESCRIPTION'
      };

    case 'inventory_legendary_pants_2_1':
      return {
        name: 'PRESIDENTIAL_PANTS_TITLE',
        description: 'PRESIDENTIAL_PANTS_DESCRIPTION'
      };

    case 'inventory_legendary_shoes_2_1':
      return{
        name: 'PRESIDENTIAL_SHOES_TITLE',
        description: 'PRESIDENTIAL_SHOES_DESCRIPTION'
      };

    case 'inventory_legendary_weapon_2_1':
      return {
        name: 'PRESIDENTIAL_FLAG_TITLE',
        description: 'PRESIDENTIAL_FLAG_DESCRIPTION'
      };

    default:
      return {
        name: '',
        description: ''
      };
  };
};

