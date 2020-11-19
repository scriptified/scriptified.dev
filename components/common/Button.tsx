import { ButtonHTMLAttributes } from 'react';
import { ButtonSize, ButtonType } from '../../theme/index';
import { useThemeState } from '../../theme/ThemeContext';

function Button({
  type = 'basic',
  size = 'sm',
  additionalStyles = '',
  children,
  onClick,
  buttonAttributes = {},
  loading = false,
}: {
  type?: string;
  size?: string;
  children: React.ReactNode;
  additionalStyles?: string;
  onClick?: (MouseEvent) => void;
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  loading?: boolean;
}): JSX.Element {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const theme = useThemeState();
  const buttonType = ButtonType(theme, loading)[type];
  const buttonSize = ButtonSize[size];

  const styles = `${buttonType} ${buttonSize} ${additionalStyles} p-2 inline-flex justify-center align-center transition ease-in-out duration-300`;

  return (
    <button className={styles} onClick={onClick} {...buttonAttributes}>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white mt-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            // eslint-disable-next-line max-len
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
export default Button;
