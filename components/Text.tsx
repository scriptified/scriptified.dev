import { TextType, TextColor } from '../theme';

// Example usage - <Text type="base" color="green-5"> Hello World </Text>
const Text = ({
  type = 'base',
  color = 'black-0',
  additionalStyles = '',
  children,
}: {
  type?: string;
  color?: string;
  children: React.ReactNode;
  additionalStyles?: string;
}) => {
  const textType = TextType[type];
  const colorType = color.split('-'); // Splits color string into two parts. Example - ['black', '0']
  const textColor = TextColor[colorType[0]][Number(colorType[1])]; // Gets the corresponding color from the array of corresponding color from the TextColor dictionary. Example - TextColor['black'][0]

  const styles = `${textType} ${textColor} ${additionalStyles}`;

  return <p className={styles}>{children}</p>;
};

export default Text;
