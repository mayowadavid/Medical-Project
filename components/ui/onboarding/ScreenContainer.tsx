interface ScreenContainerProps {
  children: React.ReactNode;
  height: string;
}

const ScreenContainer = ({ children, height }: ScreenContainerProps) => {
  return (
    <div
      className={`w-full ${height} flex flex-col justify-between font-general`}
    >
      {children}
    </div>
  );
};

export default ScreenContainer;
