import { blockBackgroundStyles } from '../../styles/blockStyles';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className={`group p-6 ${blockBackgroundStyles.base} ${blockBackgroundStyles.hover}`}>
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-primary-900/40
          group-hover:ring-primary-600/40 transition-all duration-500"
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold text-dark-50 mb-1 group-hover:text-primary-300 transition-colors duration-500">
          {name}
        </h3>
        <p className="text-primary-400 mb-3">{role}</p>
        <p className="text-dark-200 group-hover:text-dark-100 transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}