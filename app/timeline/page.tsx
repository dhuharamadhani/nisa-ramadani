import { RoundedImageRaw } from '@/components/mdx-client';
import { formatDistanceToNow } from "date-fns";

export const metadata = {
  title: "Timeline",
  description: "My timeline.",
};

const LINK_CLASSNAME = "text-sm text-pink-500 hover:underline";
const arrowIcon = "→";

export default function AboutView() {
  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Activities
          </h1>
        </div>
      <ol className="pt-10 text-base relative ml-3 space-y-4 border-l border-gray-100 dark:border-[#211C1C]">
        <Item icon={arrowIcon}
          title="Co-directing 'Belajar Menjadi Laki-laki' with GMT Jogjadrama."
          time="2024-04-30"
          link="/archive/performing-art/belajar-menjadi-laki-laki"
        ></Item>
        <Item icon={arrowIcon}
          title="Involves in 'Mencari Kabar' performance."
          time="2022-07-22"
          link="/archive/performance-art/mencari-kabar"
        ></Item>
      </ol>
    </div>
  </div>
  );
}

function Item({
  title,
  children,
  icon,
  time = new Date().toISOString(),
  link,
}: {
  title: string;
  children?: React.ReactNode;
  icon: string;
  time?: string;
  link?: string;
}) {
  return (
    <li className="ml-6">
      <span className="absolute -ml-px text-2xl bg-white dark:bg-[#111010] rounded-full -left-4">
        {icon}
      </span>
      <h2 className="text-neutral-900 dark:text-neutral-100 tracking-tight">
        {title}
      </h2>
      <time
        className="block mb-1 leading-none text-neutral-600 dark:text-neutral-400 text-sm"
        dateTime={time}
      >
        {formatDistanceToNow(new Date(time), {
          addSuffix: true,
        })}
      </time> 
      {children}
      {link && (
        <a
          href={link}
          className={LINK_CLASSNAME}
        >
          Read more  &rarr;
        </a>
      )}
    </li>
  );
}

{/*
          <picture>
            <RoundedImageRaw src="/static/images/mencari-kabar/mencari-kabar-1.webp" alt="Dokumentasi Mencari Kabar" />
          </picture>
*/}
