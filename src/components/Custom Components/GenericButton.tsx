import { MouseEventHandler } from 'react';

export interface DaisyUIType {}

export interface GenericButtonType {
  activeButton?: boolean;
  className?: string;
  children: string;
  color?:
    | 'btn-neutral'
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-ghost'
    | 'btn-link'
    | 'btn-info'
    | 'btn-success'
    | 'btn-warning'
    | 'btn-error'
    | `bg-${string}-${number}`;
  disabled?: boolean;
  glass?: boolean;
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  outlineButton?: boolean;
  size?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg';
  sizeText?:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | `text-[${number}px]`;
  tabIndex?: 0 | -1 | number;
  textColor?:
    | 'text-inherit'
    | 'text-current'
    | 'text-transparent'
    | 'text-black'
    | 'text-white'
    | `text-${string}-${number}`;
  type: 'button' | 'reset' | 'submit';
  value?: string;
}

/**
 * A reusable generic button in the DaisyUI style.
 * @param {GenericButtonType} props - Properties for the generic button.
 * @param {boolean} [activeButton=false] (Optional) - Specifies whether the button should have active style.
 * @param {string} [color='btn-primary'] (Optional) - Sets the color of the button using predefined classes like 'bg-green-500' or 'btn-primary'.
 * @param {string} [className=''] (Optional) - Additional CSS classes to apply to the button.
 * @param {string} [children] - Content to display within the button.
 * @param {boolean} [disabled=false] (Optional) - Specifies whether the button is disabled.
 * @param {boolean} [glass=false] (Optional) - Specifies whether the button should have a glass effect.
 * @param {string} [name] (Optional) - The name attribute of the button.
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick] (Optional) - Event handler for the button's click event.
 * @param {boolean} [outlineButton=false] (Optional) - Specifies whether the button should have an outline style.
 * @param {string} [size='btn-md'] (Optional) - Specifies the text size of the button using predefined classes like 'text-xs' or 'text-lg', or a custom size using 'text-[18px]'.
 * @param {string} [sizeText=''] (Optional) - Additional classes for customizing the text size of the button.
 * @param {number} [tabIndex=0] - Specifies the tab index of the button for keyboard navigation.
 * @param {string} [textColor=''] (Optional) - Specifies the text color of the button 'text-rose-600' or 'text-black'.
 * @param {'button' | 'reset' | 'submit'} [type] - Specifies the type of the button.
 * @param {string} [value] (Optional) - The value attribute of the button.
 * @returns {JSX.Element} A stylized button element.
 */
const GenericButton = (props: GenericButtonType) => {
  const {
    activeButton = false,
    className = '',
    children,
    color = 'btn-primary',
    disabled = false,
    glass = false,
    name,
    onClick,
    outlineButton = false,
    size = 'btn-md',
    sizeText = '',
    tabIndex = 0,
    textColor = '',
    type,
    value,
  } = props;

  if (activeButton && outlineButton) {
    throw new Error(
      'activeButton and outlineButton cannot be enabled simultaneously.'
    );
  }

  // TODO: icon start and end - without click animation

  return (
    <button
      aria-disabled={disabled ? true : false}
      className={`btn 
        ${className} ${size && size} ${sizeText ? sizeText : ''}
        ${activeButton ? 'btn-active' : ''} ${color ? color : ''} 
        ${textColor ? textColor : ''} 
        ${outlineButton ? 'btn-outline' : ''} ${glass ? 'glass' : ''}`}
      disabled={disabled}
      name={name}
      onClick={onClick}
      role='button'
      tabIndex={tabIndex}
      type={type}
      value={value}
    >
      {children || 'GENERIC BUTTON'}
    </button>
  );
};

export default GenericButton;
