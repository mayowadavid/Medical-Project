interface CardProps {
  children: React.ReactNode;
  dropShadow?: true | false;
  classes?: string;
  noCursor?: true | false;
  hoverEffect?: true | false;
}

export const Card = ({
  children,
  dropShadow,
  classes,
  noCursor,
  hoverEffect,
}: CardProps) => {
  return (
    <div
      className={`border border-gray-300 p-1 rounded-md my-2 bg-white ${
        dropShadow ? "drop-shadow-lg" : "shadow-lg"
      } ${noCursor ? "" : "cursor-pointer"} ${classes} ${
        hoverEffect ? "hover:scale-[1.01] transition ease-in" : ""
      }`}
    >
      {children}
    </div>
  );
};
