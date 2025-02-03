import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none text-black`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] stroke-[1.7]" />
      <p className="text-[44px] font-bold">Acme</p>
    </div>
  );
}
