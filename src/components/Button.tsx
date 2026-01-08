export interface ButtonProps {
  textButton: string;
  bgColor?: string;
  textColor?: string;
}

export const Button = ({ textButton, bgColor, textColor }: ButtonProps) => {
  return (
    <button className={`w-full p-4 cursor-pointer font-semibold`} style={{backgroundColor: `${bgColor ? bgColor : "#B52533" }`, color: `${textColor ? textColor : "#FFFFFF"}`}}>
      {textButton}
    </button>
  );
};
