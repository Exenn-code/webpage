interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({ title, description, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-dark-50 mb-4">{title}</h2>
      {description && (
        <p className="text-xl text-dark-200 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}