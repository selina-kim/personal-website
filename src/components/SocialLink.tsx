export const SocialLink = ({
  url,
  Icon,
}: {
  url: string;
  Icon: React.ElementType;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-foreground/15 h-9 w-9 rounded-lg p-2"
    >
      <Icon />
    </a>
  );
};

export default SocialLink;
