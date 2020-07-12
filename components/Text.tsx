import { TextColor, TextType } from '../theme';

// Example usage - <Text type="base" color="green-5"> Hello World </Text>
const Text = ({
  type = 'base',
  color = 'black-0',
  additionalStyles = '',
  inline = false,
  children,
}: {
  type?: string;
  color?: string;
  children: React.ReactNode;
  additionalStyles?: string;
  inline?: boolean;
}) => {
  const textType = TextType[type];
  const colorType = color.split('-'); // Splits color string into two parts. Example - ['black', '0']
  const textColor = TextColor[colorType[0]][Number(colorType[1])]; // Gets the corresponding color from the array of corresponding color from the TextColor dictionary. Example - TextColor['black'][0]

  const styles = `${textType} ${textColor} ${additionalStyles}`;

  return inline ? <span className={styles}>{children}</span> : <p className={styles}>{children}</p>;
};

export default Text;
