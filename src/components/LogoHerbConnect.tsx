
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  showText?: boolean;
}

const LogoHerbConnect = ({ variant = 'default', showText = true }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-herb-dark';
  const leafColor = variant === 'white' ? 'text-white' : 'text-white';
  const bgGradient = variant === 'white' ? 'bg-white/20' : 'herb-gradient';

  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className={`h-10 w-10 rounded-full ${bgGradient} flex items-center justify-center relative overflow-hidden group`}>
        <Leaf className={`${leafColor} h-5 w-5 transition-transform duration-300 group-hover:rotate-12`} />
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {showText && (
        <div className="flex items-center">
          <span className={`font-bold text-xl ${textColor}`}>Herb</span>
          <span className={`font-bold text-xl text-herb-purple`}>Connect</span>
        </div>
      )}
    </Link>
  );
};

export default LogoHerbConnect;
