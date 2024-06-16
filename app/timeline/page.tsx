import { RoundedImageRaw } from '@/components/mdx-client';
import { formatDistanceToNow } from "date-fns";

export const metadata = {
  title: "Timeline",
  description: "My timeline.",
};

const LINK_CLASSNAME = "text-sm text-pink-500 hover:underline";
const arrowIcon = "→";
const yearStyle = "pl-6 text-2xl font-bold text-primary-500";

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
      <p className={yearStyle}>Ongoing</p>
      <Item icon={arrowIcon}
          title="Co-researcher, JOFFIS — Jogja Fotografis Festival 2024."
          time="2024-01-01"
          link="https://www.jogjafotografisfestival.com/about-us/"
        ></Item>
        <Item icon={arrowIcon}
          title="I am currently pursuing a Master's degree in Cultural Studies at Sanata Dharma University."
          time="2023-08-01"
          link="https://web.usd.ac.id/fakultas/pascasarjana/mirdb/"
        ></Item>

        <p className={yearStyle}>2024</p>
        <Item icon={arrowIcon}
          title="Co-directing 'Belajar Menjadi Laki-laki' with GMT Jogjadrama."
          time="2024-04-30"
          link="/archive/performing-art/belajar-menjadi-laki-laki"
        ></Item>

        <p className={yearStyle}>2023</p>
        <Item icon={arrowIcon}
          title="Choreographer, ”All You Can See” performed on Paradance #31, at Minomartani Cultural Center, Sleman, Yogyakarta "
          time="2023-06-09"
          link="https://www.youtube.com/live/M2_r__LSE4k"
        ></Item>
        <Item icon={arrowIcon}
          title="Photo performance art, ”The Unseen Self” at ”[Se]tempat” by Asana Bina Seni Yogyakarta of Yayasan Biennale Yogyakarta, Taman Budaya Yogyakarta."
          time="2023-06-09"
          link="https://asanabinaseni.biennalejogja.org/setempat/nisa-ramadani/"
        ></Item>

        <p className={yearStyle}>2022</p>
        <Item icon={arrowIcon}
          title="Performance, ”What I Think About When I Think About It” at Performance Art and Sound Art di Selatan by Muarasuara.id, Jakarta."
          time="2022-11-19"
          link="https://www.instagram.com/p/ClIi28Ky_-a"
        ></Item>
        <Item icon={arrowIcon}
          title="Performer-Collabolator, ”Interconnection: Sensorium Choreography and Dance of the Daily” conceived by Enji Sekar, facilitated by Eka Wahyuni. Part of Invisible Dance, a collaborative project between Goethe-Institut in Indonesia and India, Garasi Performance Institute from Indonesia and Mandeep Raikhy from India."
          time="2022-11-12"
          link="https://www.youtube.com/watch?v=3ohNUH2wYB8"
        ></Item>
        <Item icon={arrowIcon}
          title="Solo performance, ”What I Think About When I Think About It” at Bantul, Yogyakarta."
          time="2022-09-17"
          link="/archive/performance-art/what-i-think-about-when-i-think-about-it"
        ></Item>
        <Item icon={arrowIcon}
          title="A work-in-progress photo performance art, ”The Unseen Self”, exhibited on ”Presentasi Preposisi: Gotong Royong untuk Seni dan Kesetaraan”, organized by Inkubator Inisiatif on Kelas Seni Terbuka at Institut Français Indonesia, Yogyakarta.."
          time="2022-08-15"
          link="/archive/performance-art/the-unseen-self"
        ></Item>
        <Item icon={arrowIcon}
          title="Co-artist, ”Mencari Kabar” performance art."
          time="2022-07-22"
          link="/archive/performance-art/mencari-kabar"
        ></Item>
        <Item icon={arrowIcon}
          title="Participant, OpenLab (Open Laboratory) program by Teater Garasi/Garasi Performance Institute (2021-2022)."
          time="2022-07-22"
          link="https://teatergarasi.org/?p=8481"
        ></Item>
          <Item icon={arrowIcon}
          title="Actor, ”The Brief History of Dance” directed by Andreas Ari Dwianto (Inyong), presented as a part of OPENLAB X CABARET CHAIRIL 2021 at Teater Garasi/Garasi Performance Institute."
          time="2022-02-19"
          link="/archive/performing-art/the-brief-history-of-dance"
        ></Item>

<p className={yearStyle}>2020</p>
          <Item icon={arrowIcon}
          title="Bachelor's in Psychology, Universitas Gadjah Mada graduate."
          time="2020-12-31"
          link="https://ugm.ac.id/en/fakultas/faculty-of-psychology/"
        ></Item>
        <Item icon={arrowIcon}
          title="Co-writer, ”Seni Rupa Kontemporer di Indonesia, Anotasi Bibliografi IVAA 1973-2020” (Indonesian Visual Art Archive, 2020)."
          time="2020-12-31"
          link="https://www.instagram.com/p/CrA31B3Stc5/"
        ></Item>

        <p className={yearStyle}>2019</p>
        <Item icon={arrowIcon}
          title="Actor, ”Mautopia” (Indonesia Dramatic Reading Festival, 2019)."
          time="2019-07-26"
          link="/archive/performing-art/mautopia"
        ></Item>


        <p className={yearStyle}>2018</p>
        <Item icon={arrowIcon}
          title="Co-author, ”MocoSik Festival 2018: Merayakan Buku dan Musik” (Radio Buku, 2018) essay anthology."
          time="2018-12-31"
          link="https://warungarsip.co/produk/buku/mocosik-festival-2018-merayakan-buku-musik/"
        ></Item>
        <Item icon={arrowIcon}
          title="Performer, ”Sakuntala” by Gunawan Maryanto at Teater Garasi/Garasi Performance Institute."
          time="2018-09-05"
          link="https://teatergarasi.org/?p=8145"
        ></Item>
        <Item icon={arrowIcon}
          title="Co-contributor, ”Menakar Kuasa Ingatan: Catatan Kritis Festival Arsip IVAA 2017” (Indonesian Visual Art Archive, 2018) essay anthology."
          time="2018-01-01"
          link="https://books.google.co.id/books/about/Menakar_kuasa_ingatan.html?id=VoLrzgEACAAJ&redir_esc=y"
        ></Item>

        <p className={yearStyle}>2017</p>
        <Item icon={arrowIcon}
          title="Co-author, ”ID.1 IniSeum: Perayaan Ide, Penghormatan pada Keragaman” (Radio Buku, 2017) essay anthology."
          time="2017-12-31"
          link="https://warungarsip.co/produk/buku/ageng-indra-dkk-id-1-perayaan-ide-penghormatan-pada-keragaman-2017/"
        ></Item>
        <Item icon={arrowIcon}
          title="Co-author, ”Aku dan Buku #4: Para Penyair pun Memilih Buku (Radio Buku, 2017)” (Radio Buku, 2017) essay anthology."
          time="2017-12-31"
          link="https://warungarsip.co/produk/buku/aku-buku-4-para-penyair-pun-memiliki-buku-2017/"
        ></Item>
        <Item icon={arrowIcon}
          title="Co-author, ”Pilar-pilar Bumi Panggung: Cerita Komunitas Budaya Desa Panggungharjo” (Radio Buku, 2017) essay anthology."
          time="2017-12-31"
          link="https://warungarsip.co/produk/buku/pilar-pilar-bumi-panggung-2017/"
        ></Item>
        <Item icon={arrowIcon}
          title="Actor, ”What Makes You Who You Are?” directed by Caglar Kimyoncu (British Council & Padepokan Seni Bagong Kussudiardja, 2017)."
          time="2017-12-31"
          link="https://warungarsip.co/produk/buku/pilar-pilar-bumi-panggung-2017/"
        ></Item>

        <p className={yearStyle}>2015</p>
        <Item icon={arrowIcon}
          title="Actor, ”Kekwa! Alami Mimpimu” directed by Budi ND. Dharmawan (2015)."
          time="2015-12-31"
          link="https://benheur-id.blogspot.com/2016/01/kekwa-alami-mimpimu.html"
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
          target="_blank"
          rel="noopener noreferrer"
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
