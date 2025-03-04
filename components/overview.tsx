import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        {/* <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p> */}
        <div className="flex flex-row justify-center gap-4 items-center">
          <Image
          src="/images/resi-bot-icon.avif"
          width={100}
          height={76}
          className="hidden md:block"
          alt="Resibot icon"
          />
        </div>
      <p>
        Hi, I am
        <code className="rounded-md bg-muted px-1 py-0.5">RESi</code>{' '},
        your personal tax assistant from Resident Tax. I can answer your tax related queries.
      </p>
      {/* <p>
          You can learn more about the AI SDK by visiting the{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            docs
          </Link>
          .
        </p> */}
    </div>
    </motion.div >
  );
};
