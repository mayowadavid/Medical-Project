interface FloaterProps {
  children: React.ReactNode;
  classes?: string;
}

const Floater = ({ children, classes }: FloaterProps) => {
  return (
    <div
      className={`fixed bottom-0 bg-white left-0 w-full py-2 px-4 border-t border-gray-300 
      flex items-center justify-between drop-shadow-lg z-50 ${classes}`}
    >
      {children}
    </div>
  );
};

export default Floater;
