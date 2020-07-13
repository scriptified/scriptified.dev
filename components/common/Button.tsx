import { ButtonSize, ButtonType } from '../../theme';

function Button({
  type = 'basic',
  size = 'sm',
  additionalStyles = '',
  children,
}: {
  type?: string;
  size?: string;
  children: React.ReactNode;
  additionalStyles?: string;
}) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const buttonType = ButtonType[type];
  const buttonSize = ButtonSize[size];

  const styles = `${buttonType} ${buttonSize} ${additionalStyles} p-2`;

  return <button className={styles}>{children}</button>;
}
export default Button;