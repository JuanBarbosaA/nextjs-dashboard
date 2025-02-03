import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-dark">
      <div className="flex h-auto shrink-0 items-end rounded-lg bg-dark-blue p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <AcmeLogo/>
      </div> 
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
  <strong className={`${lusitana.className}`}>Welcome to Acme.</strong> This is your dashboard page, where you can manage <strong>invoices</strong> and <strong>people</strong> for your company.
</p>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-dark-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image src="/homeImage.webp" alt='hero desktop' width={560} height={620} className={"hidden md:block max-w-60"}/>
          <Image src="/homeImage.webp" alt='hero desktop' width={560} height={620} className={"block md:hidden max-w-60"}/>
        </div>
      </div>
    </main>
  );
}

