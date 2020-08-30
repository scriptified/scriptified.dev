import { TextType } from '../../theme';

// Example usage - <Text type="base" color="text-green-500"> Hello World </Text>
const Text = ({
  type = 'base',
  color = 'text-black',
  additionalStyles = '',
  inline = false,
  children,
}: {
  type?: string;
  color?: string;
  children: React.ReactNode;
  additionalStyles?: string;
  inline?: boolean;
}): JSX.Element => {
  const textType = TextType[type];
  const styles = `${textType} ${color} ${additionalStyles}`;

  return inline ? <span className={styles}>{children}</span> : <p className={styles}>{children}</p>;
};

export default Text;
