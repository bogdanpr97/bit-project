import { useState } from 'react';
import './styles.scss';

const CustomCheckbox = ({ checked, setChecked, disabled }) => {
  // am ales sa fac interactiunea cu CustomCheckboxul (focus hover active) manual 
  // in loc de folosirea :hover :focus din css pentru ca este mult mai 
  // user de controlat ce se intampla
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  let fieldClassName = `${pressed && 'pressed'}
  ${focused && !pressed && "focused"
  }  ${hovered && !focused && !pressed && "hovered"}`;

  if(disabled) {
    fieldClassName = disabled ? 'disabled' : 'readOnly'
  }

  return (
    <div>
    <input
      checked={checked}
      disabled={disabled}
      type="checkbox"
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
      }}
    />
    <div
      onClick={() => {
        if(disabled) return;
        setChecked(!checked);
      }}
      className={`checkboxElement ${checked && 'checked'} ${fieldClassName}`}
      aria-hidden="true"
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}    
    >
      {checked && <svg className="icon-checkbox" viewBox="0 0 25 25">
        <polyline points="20 6 9 17 4 12" />
      </svg>}
    </div>
    </div>
  )
}

export default CustomCheckbox;
