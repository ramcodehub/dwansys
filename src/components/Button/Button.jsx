import './Button.css';

const Button = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
  icon,
  ariaLabel,
  ...rest
}) => {
  const btnClass = variant === 'secondary' ? 'secondaryBtn' : 'primaryBtn';
  return (
    <button
      type={type}
      className={`${btnClass} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
