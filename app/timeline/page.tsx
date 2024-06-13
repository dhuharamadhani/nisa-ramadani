import { RoundedImageRaw } from '@/components/mdx-client';
import { formatDistanceToNow } from "date-fns";

export const metadata = {
  title: "Timeline",
  description: "My timeline.",
};

export default function AboutView() {
  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Activities
          </h1>
        </div>
      <ol className="pt-10 text-2xl relative ml-3 space-y-10 border-l border-gray-100 dark:border-[#211C1C]">
        <Item
          title="Co-directing 'Belajar Menjadi Laki-laki' with GMT Jogjadrama"
          icon="➤"
          time="2024-04-30"
        >
          <a
            href="/archive/performing-art/belajar-menjadi-laki-laki"
            className="text-base text-pink-500 hover:underline"
          >
            Read more  &rarr;
          </a>
        </Item>
        <Item
          title="Involves in 'Mencari Kabar' performance"
          icon="➤"
          time="2022-07-22"
        >
          <picture>
            <RoundedImageRaw src="/static/images/mencari-kabar/mencari-kabar-1.webp" alt="Dokumentasi Mencari Kabar" />
          </picture>
          <a
            className="text-base text-pink-500 hover:underline"
            href="/archive/performance-art/mencari-kabar"
          >
            Read more  &rarr;
          </a>
        </Item>
        <Item
          title="Born in Yogyakarta, Indonesia"
          icon="👶"
          time="1995-02-04"
        />
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
}: {
  title: string;
  children?: React.ReactNode;
  icon: string;
  time?: string;
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
        className="block mb-5 leading-none text-neutral-600 dark:text-neutral-400 text-sm"
        dateTime={time}
      >
        {formatDistanceToNow(new Date(time), {
          addSuffix: true,
        })}
      </time>
      {children}
    </li>
  );
}