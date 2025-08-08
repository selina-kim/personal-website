export const EmailButton = ({
  onClick,
  Icon,
}: {
  onClick: () => void;
  Icon: React.ElementType;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-foreground/15 h-9 w-9 rounded-lg p-2 hover:cursor-pointer"
    >
      <Icon />
    </button>
  );
};

export default EmailButton;
