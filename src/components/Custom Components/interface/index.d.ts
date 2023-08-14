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
//   iconUrl?: string | null;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
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
  withoutAnimation?: boolean;
}
