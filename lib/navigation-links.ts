import { ContentNavItem, NavItem } from 'types';

const content: ContentNavItem[] = [
  {
    title: "Performance Arts",
    href: "/sketches/performance-art",
    description: "My performance art sketches.",
  },
  {
    title: "Body Improvisation",
    href: "/coming-soon",
    description: "My body improvisation sketches.",
  },
  {
    title: "Drawings",
    href: "/coming-soon",
    description: "My drawing sketches.",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Activities",
    href: "/timeline",
  },
  {
    title: "All Works",
    content: [
      {
        title: "Performance Arts",
        href: "/tags/performance-art",
      },
      {
        title: "Performing Arts",
        href: "/tags/performing-art",
      },
    ]
  },  {
    title: "Sketches",
    content,
  },

  {
    title: "Biography",
    href: "/bio",
  },
];