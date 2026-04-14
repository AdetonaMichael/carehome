interface SectionProps {
  id?: string;
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  heading,
  subheading,
  children,
  className = '',
}: SectionProps) {
  const hasBgClass = className.includes('bg-');
  const isTextCenter = className.includes('text-center');
  
  return (
    <section
      id={id}
      className={`py-5 md:py-5 ${!hasBgClass ? 'bg-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {heading && (
          <div className={`mb-14 md:mb-16 ${isTextCenter ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-4">
              {heading}
            </h2>
            {subheading && (
              <p className={`text-lg text-slate-600 leading-relaxed ${isTextCenter ? 'mx-auto' : 'max-w-2xl'}`}>
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
