export const TechPill = ({ content }: { content: string }) => {
  return (
    <div className="bg-foreground/15 h-fit rounded-full px-2 py-0.5 text-xs">
      {content}
    </div>
  );
};

export default TechPill;
