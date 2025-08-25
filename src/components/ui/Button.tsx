import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ComponentType } from "react";

export interface ButtonProps{
    buttonType: "primary" | "secondary" | "outlined" | "special";
    className: string;
    href: string;
    icon?: ComponentType<LucideProps>;
    isIconOnly?: boolean;
    label?: string;
}
function Button({buttonType, className, href, icon, isIconOnly = false, label} : ButtonProps){
    const baseClasses = "flex items-center text-center justify-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-blue-500";
  
  let stateClasses = "";
  switch (buttonType) {
    case "primary":
        stateClasses = "bg-gradient-to-t from-neon-lime-100 to-transparent text-neon-lime-800 shadow-inner border-1 border-neon-lime-500'";
        break;
    case "secondary":
        stateClasses = "'text-neutral-600 hover:bg-neon-lime-100 hover:text-neon-lime-700'";
        break;
    case "outlined":
        stateClasses = "";
        break;
    case "special":
        stateClasses = "";
        break
    default:
        break;
  }

  const IconComponent = icon;

  const content = (
    <>
    {icon && IconComponent != undefined &&
      <IconComponent 
        className={`h-5 w-5 shrink-0 text-neon-lime-700`} 
      />
    }
      {!isIconOnly && <span className="truncate">{label}</span>}
    </>
  );

  const itemProps = {
    className: `${baseClasses} ${stateClasses} ${className || ''} `,

  };

    return <Link href={href} {...itemProps}>{content}</Link>;

}

export default Button;