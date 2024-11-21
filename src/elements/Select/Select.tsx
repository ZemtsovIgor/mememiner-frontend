import { ExpandMore } from '@mui/icons-material';
import React, {useCallback} from 'react';
import {Button} from "../Button/Button";

import {
  Placeholder,
  SelectContainer,
  SelectElement,
  SelectLabel,
  SelectListItem,
} from './Select.Styles';
import {Icon} from "../Icon/Icon";

interface Props {
  className?: string;
  name: string;
  placeholder?: any;
  value?: string;
  values?: any;
  image?: string;
  fullWidth?: boolean;
  list: any[];
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
  onRemove?: (value: string) => void;
  onSelect?: (value: string, type?: string) => void;
  IconComponent?: any;
  disableRotate?: boolean;
  position?: string;
  disabled?: boolean,
  withIcon?: string,
  disableIconComponent?: boolean,
  staticText?: boolean
}

export const Select: React.FC<Props> = (props: Props) => {
  const {
    className,
    value,
    name,
    image,
    placeholder,
    fullWidth,
    list,
    values,
    label,
    disabled,
    onChange,
    onSelect,
    IconComponent,
    disableRotate,
    position,
    withIcon,
    disableIconComponent,
    staticText
  } = props;

  const onItemChange = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('onItemChange');
      if (!onChange) return;

      onChange(e.target.value);
    },
    [onChange]
  );

  const onItemSelect = useCallback(
    (e: React.ChangeEvent<any>, value: string, type?: string) => {
      e.preventDefault();
      e.stopPropagation();

      if (!onSelect) return;
      onSelect(value, type);
    },
    [onSelect]
  );

  const menuProps = {
    disablePortal: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: position ? position : 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: position ? position : 'left',
    }
  };

  return (
    <SelectContainer>
      {
        image ? (
          <img className="select-img" src={image} alt="mem" />
        ) : null
      }

      <div className="select-wrap">
        {
          label ? (
            <SelectLabel>{label}</SelectLabel>
          ) : null
        }
        <SelectElement
          MenuProps={menuProps}
          id={name}
          className={`${className} ${disableRotate ? '-disable-rotate' : ''} ${image ? '-image' : ''} ${withIcon ? '-flag' : ''}`}
          name={name}
          value={value}
          disabled={disabled}
          displayEmpty
          renderValue={
            !!value && !staticText ? undefined : () => <Placeholder>
              {
                withIcon ? <img className="flag-image" src={`/img/${withIcon}/unknown.svg`} alt="sc"/> : null
              }
              {placeholder}
            </Placeholder>
          }
          fullWidth={fullWidth}
          aria-describedby={`${name}-text`}
          IconComponent={disableIconComponent ? null : IconComponent || ExpandMore}
          onChange={onItemChange}
        >
          {list.map((item: any, index: number) => (
            <SelectListItem
              key={`drop-down-item-${name}-${item.value}-${index + 1}`}
              value={item.value}
            >
              <div
                className={`select-option ${item.type === 'sort' && values.sort === item.value ? '-active' : ''} ${item.type === 'type' && values.type === item.value ? '-active' : ''} ${item.type === 'filter' && values.filterParam === item.value ? '-active' : ''}`}
              >
                <button
                  className="select-option__text"
                  onClick={(e) => onItemSelect(e, item.value, item.type)}
                >
                  {item.text}
                </button>
                {/*{*/}
                {/*  item.type === 'sort' && values.sort === item.value ? (*/}
                {/*    <Button*/}
                {/*      className="select-option__btn"*/}
                {/*      type="button"*/}
                {/*      onClick={(e) => onItemSelect(e, item.value, item.type)}*/}
                {/*    >*/}
                {/*      <Icon className="select-option__btn_icon" name="info" size="12"/>*/}
                {/*    </Button>*/}
                {/*  ) : null*/}
                {/*}*/}
                {/*{*/}
                {/*  item.type === 'type' && values.type === item.value ? (*/}
                {/*    <Button*/}
                {/*      className="select-option__btn"*/}
                {/*      type="button"*/}
                {/*      onClick={(e) => onItemSelect(e, item.value, item.type)}*/}
                {/*    >*/}
                {/*      <Icon className="select-option__btn_icon" name="crest" size="12"/>*/}
                {/*    </Button>*/}
                {/*  ) : null*/}
                {/*}*/}
              </div>
            </SelectListItem>
          ))}
        </SelectElement>
      </div>
    </SelectContainer>
  );
};
