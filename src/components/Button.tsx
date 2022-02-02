import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: 'green' | 'red';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color,
  loading = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const classNames = [
    `w-auto aspect-1 rounded-xl`,
    `flex flex-col align-middle items-center justify-center`,
    color === 'red' ? 'bg-red-500' : 'bg-green-500',
    color === 'red' ? 'hover:bg-red-600' : 'hover:bg-green-600',
  ].join(' ');

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${classNames} ${className}`}>
      <h1 className='font-medium text-xl text-white'>{children}</h1>
    </button>
  );
};

export default Button;
