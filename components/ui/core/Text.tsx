interface TextProps {
  children: React.ReactNode;
  classes?: string;
  centered?: true | false;
}

export const HeadingText = ({ children, classes }: TextProps) => {
  return <div className={`text-3xl font-medium ${classes}`}>{children}</div>;
};

export const SubHeadingText = ({ children, classes }: TextProps) => {
  return <div className={`text-xl font-medium ${classes}`}>{children}</div>;
};

export const RegularText = ({ children, classes }: TextProps) => {
  return <div className={`text-lg ${classes}`}>{children}</div>;
};

export const FadedRegularText = ({ children, classes }: TextProps) => {
  return <div className={`text-lg opacity-70 ${classes}`}>{children}</div>;
};

export const MediumText = ({ children, classes }: TextProps) => {
  return <div className={`text-md ${classes}`}>{children}</div>;
};

export const FadedMediumText = ({ children, classes }: TextProps) => {
  return <div className={`text-md opacity-70 ${classes}`}>{children}</div>;
};
export const SmallText = ({ children, classes }: TextProps) => {
  return <div className={`text-xs ${classes}`}>{children}</div>;
};

export const FadedSmallText = ({ children, classes }: TextProps) => {
  return <div className={`text-xs opacity-70 ${classes}`}>{children}</div>;
};

export const Paragraph = ({ children, classes, centered }: TextProps) => {
  return (
    <div
      className={`text-md font-normal py-4 ${
        centered ? "text-center" : "text-left"
      } ${classes}`}
    >
      {children}
    </div>
  );
};
