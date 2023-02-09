interface ContainerProps {
  children: React.ReactNode;
  mainPage?: boolean;
}

const Container = ({ children, mainPage }: ContainerProps) => {
  return (
    <div className={`px-4 ${mainPage ? "mb-24" : "mb-6"}`}>{children}</div>
  );
};
export default Container;
