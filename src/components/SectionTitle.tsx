interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 mb-12 ${className}`}>
      <span className="text-foreground/60 text-2xl font-light">&#123;</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <span className="text-foreground/60 text-2xl font-light">&#125;</span>
    </div>
  );
};

export default SectionTitle;
