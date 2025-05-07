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
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost";
  onPress?: () => void;
}

const Button = ({
  children,
  isLoading,
  isDisabled,
  startContent,
  endContent,
  size = "sm",
  radius = "sm",
  color = "primary",
  variant = "solid",
  onPress,
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
      variant={variant}
      onPress={onPress}
    >
      {children}
    </Btn>
  );
};

export default Button;
