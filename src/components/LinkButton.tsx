import Link from "next/link";

export interface LinkButtonProps {
  textButton: string;
  url: string;
  bgColor?: string;
  textColor?: string;
}

export const LinkButton = ({ textButton, url, bgColor, textColor }: LinkButtonProps) => {
  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return (
    <Link href={normalizedUrl}>
      <button className={`w-[180px] h-[44px] p-2 rounded-[6px] cursor-pointer text-[20px] font-semibold`} style={{
        backgroundColor: `var(--${bgColor ?? "main"})`,
        color: `var(--${textColor ?? "white"})`,
      }}>
        {textButton}
      </button>
    </Link>
  );
};
