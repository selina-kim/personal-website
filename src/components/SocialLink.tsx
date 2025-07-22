export const SocialLink = ({
  url,
  Icon,
  alt,
}: {
  url: string;
  Icon: React.ElementType;
  alt: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-foreground/[15%] h-9 w-9 rounded-lg p-2"
    >
      <Icon alt={alt} />
    </a>
  );
};

export default SocialLink;
