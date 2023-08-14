import { GenericButtonType } from './interface';

/**
 * A reusable generic button in the DaisyUI style.
 * @param {GenericButtonType} props - Properties for the generic button.
 * @param {boolean} [activeButton=false] (Optional) - Specifies whether the button should have active style.
 * @param {string} [color='btn-primary'] (Optional) - Sets the color of the button using predefined classes like 'bg-green-500' or 'btn-primary'.
 * @param {string} [className=''] (Optional) - Additional CSS classes to apply to the button.
 * @param {string} [children] - Content to display within the button.
 * @param {boolean} [disabled=false] (Optional) - Specifies whether the button is disabled.
 * @param {boolean} [glass=false] (Optional) - Specifies whether the button should have a glass effect.
 * @param {string} [iconUrl] (Optional) - URL of the icon to display before the text.
 * @param {string} [name] (Optional) - The name attribute of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onClick] (Optional) - Event handler for the button's click event.
 * @param {boolean} [outlineButton=false] (Optional) - Specifies whether the button should have an outline style.
 * @param {string} [size='btn-md'] (Optional) - Specifies the text size of the button using predefined classes like 'text-xs' or 'text-lg', or a custom size using 'text-[18px]'.
 * @param {string} [sizeText=''] (Optional) - Additional classes for customizing the text size of the button.
 * @param {number} [tabIndex=0] - Specifies the tab index of the button for keyboard navigation.
 * @param {string} [textColor=''] (Optional) - Specifies the text color of the button 'text-rose-600' or 'text-black'.
 * @param {'button' | 'reset' | 'submit'} [type] - Specifies the type of the button.
 * @param {string} [value] (Optional) - The value attribute of the button.
 * @param {boolean} [withoutAnimation=false] (Optional) - Specifies whether to disable click animation.
 * @returns {JSX.Element} A stylized button element.
 * @throws Will throw an error if both `activeButton` and `outlineButton` are enabled simultaneously.
 */

const GenericButton = (props: GenericButtonType) => {
  const {
    activeButton = false,
    className = '',
    children,
    color = 'btn-primary',
    disabled = false,
    glass = false,
    iconUrl = null,
    name,
    onClick,
    outlineButton = false,
    size = 'btn-md',
    sizeText = '',
    tabIndex = 0,
    textColor = '',
    type,
    value,
    withoutAnimation = false,
  } = props;

  if (activeButton && outlineButton) {
    console.warn(
      'Both activeButton and outlineButton are enabled. Use either one, not both.'
    );
  }
  

  return (
    <button
      aria-disabled={disabled ? true : false}
      className={`btn 
        ${activeButton ? 'btn-active' : ''}
        ${className} 
        ${color ?? ''} 
        ${glass ? 'glass' : ''}
        ${outlineButton ? 'btn-outline' : ''} 
        ${size}
        ${sizeText ?? ''}
        ${textColor ?? ''} 
        ${withoutAnimation ? 'no-animation' : ''}`}
      disabled={disabled}
      name={name}
      onClick={onClick}
      role='button'
      tabIndex={tabIndex}
      type={type}
      value={value}
    >
      {iconUrl && (
        <svg
          xmlns={'http://www.w3.org/2000/svg'}
          className='h-6 w-6 inline-block mr-2'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      )}
      {children || 'GENERIC BUTTON'}
    </button>
  );
};

export default GenericButton;
