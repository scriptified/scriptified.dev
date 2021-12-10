import { TextType } from '../../theme/theme';

// Example usage - <Text type="base" color="text-green-500"> Hello World </Text>
const Text = ({
  size = 'md',
  as = 'p',
  color = 'text-black',
  additionalStyles = '',
  children,
}: {
  size?: keyof typeof TextType;
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  children: React.ReactNode;
  additionalStyles?: string;
}): JSX.Element => {
  const textType = TextType[size];
  const styles = `${textType} ${color} ${additionalStyles}`;
  const Tag = as;
  return <Tag className={styles}>{children}</Tag>;
};

export default Text;
