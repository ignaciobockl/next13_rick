export interface DaisyUIType {}

export type GenericButtonType =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * @deprecated Use either activeButton or outlineButton, not both.
     */
    activeButton?: boolean;
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
    glass?: boolean;
    // iconUrl?: string | null;
    name?: string;
    /**
     * @deprecated Use either activeButton or outlineButton, not both.
     */
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
    textColor?:
      | 'text-inherit'
      | 'text-current'
      | 'text-transparent'
      | 'text-black'
      | 'text-white'
      | `text-${string}-${number}`;
    withoutAnimation?: boolean;
  } & (
      | {
          activeButton?: true;
          outlineButton?: never;
        }
      | {
          activeButton?: never;
          outlineButton?: true;
        }
    );
