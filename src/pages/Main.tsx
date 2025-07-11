import { ChevronsDown } from 'lucide-react';

export default function Main() {
  return (
    // h-[calc(100vh-100px)]
    <div className="w-full h-screen pt-[100px] relative font-[JetBrains]">
      <div className="text-white/80 text-[160px] font-bold pt-10">
        FRONT-END
      </div>
      <div className="text-white text-[96px] font-bold -translate-y-6">
        HanYubin
      </div>
      <div className="flex justify-center items-center text-white">
        <div className="absolute bottom-4 flex flex-col gap-6 items-center">
          <span>Do you want to see more?</span>
          <ChevronsDown className="w-10 h-10 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
