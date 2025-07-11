import { Droplet } from 'lucide-react';
import TextCarousel from './TextCarousel';
import githubIcon from '../assets/github.svg';
import blogIcon from '../assets/blog.svg';

export default function Header() {
  return (
    <div className="fixed top-0 w-full backdrop-blur-md z-50">
      <div className="max-w-[1440px] flex justify-between items-center px-3 py-4 bg-black/30 border-b border-b-white/30 text-lg font-normal font-[Paperlogy] text-white/90">
        <div className="flex gap-1">
          <span>프론트엔드</span>
          <Droplet className="w-6 h-6 text-white" />
          <span>한유빈</span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={githubIcon}
            alt="깃허브"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src={blogIcon}
            alt="블로그"
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>
      </div>
      <TextCarousel />
    </div>
  );
}
