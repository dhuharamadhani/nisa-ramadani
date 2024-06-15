import { ContentNavItem, NavItem } from 'types';

const content: ContentNavItem[] = [
  {
    title: "Performance Art",
    href: "/sketches/performance-art",
    description: "My performance art sketches.",
  },
  {
    title: "Body Improvisation",
    href: "/coming-soon",
    description: "My body improvisation sketches.",
  },
  {
    title: "Drawing",
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
    href: "/archive",
  },
  {
    title: "Sketches",
    content,
  },

  {
    title: "Biography",
    href: "/bio",
  },
];