import { useState } from 'react';
import './styles.scss';

const Input = ({ value, setValue, disabled, readOnly }) => {
  // am ales sa fac interactiunea cu inputul (focus hover active) manual 
  // in loc de folosirea :hover :focus din css pentru ca este mult mai 
  // user de controlat ce se intampla
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);


  // ordinea importantei trebuie sa fie active > focused > hover
  let fieldClassName = `${active && "active"} ${
    focused && !active && "focused"
  }  ${hovered && !active && !focused && "hovered"}`;

  if(disabled || readOnly) {
    fieldClassName = disabled ? 'disabled' : 'readOnly'
  }

  return (
    <input
      disabled={disabled || readOnly}
      className={`inputElement ${fieldClassName}`}
      placeholder="Placeholder"
      value={value}
      onChange={(e) => setValue(e?.target?.value)}
      onClick={() => setActive(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setActive(false);
        setFocused(false);
      }}
    />
  )
}

export default Input;
