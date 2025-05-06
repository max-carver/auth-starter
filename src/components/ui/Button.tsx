import { Button as Btn } from "@heroui/button";

interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

const Button = ({
  children,
  isLoading,
  isDisabled,
  startContent,
  endContent,
  size = "sm",
  radius = "sm",
  color = "secondary",
}: ButtonProps) => {
  return (
    <Btn
      radius={radius}
      disableRipple
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      startContent={startContent}
      endContent={endContent}
      color={color}
    >
      {children}
    </Btn>
  );
};

export default Button;
