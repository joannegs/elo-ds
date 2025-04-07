export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
  underline?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, underline, className, ...rest }: LinkProps) => {
  return (
    <a
      href={disabled ? undefined : href}
      className={`
        text-primary 
        aria-disabled:text-disabled cursor-pointer hover:text-primary-500
        ${underline ? 'hover:underline' : ''}
        ${className}
      `}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
