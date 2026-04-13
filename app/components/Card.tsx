interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-slate-300">
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-10 h-10 bg-slate-100 text-slate-700 rounded-lg group-hover:bg-slate-200 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-950 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
