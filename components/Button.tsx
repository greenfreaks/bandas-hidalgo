export interface ButtonProps {
  textButton: string;
  bgColor?: string;
  textColor?: string;
}

export const Button = ({ textButton, bgColor, textColor }: ButtonProps) => {
  return (
    <button className={`bg-${bgColor ? bgColor : 'main'} text-${textColor ? textColor : 'white'} w-50 p-4 cursor-pointer`}>
      {textButton}
    </button>
  );
};
