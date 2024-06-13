import { LinkProps } from "next/link";

export interface PostHeading {
  heading: number;
  text: string;
  slug: string;
}

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  content?: ContentNavItem[];
}

export interface ContentNavItem extends NavItem {
  href: string;
}

export interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export type AnalyticsProvider = "umami" | "vercel" | "plausible" | "google";

export type NewsletterProvider = "convertkit" | "substack" | "mailerlite";

export type SiteMetaData = {
  title: {
    template: string;
    default: string;
  };
  description: string;
  siteRepo: string;
  newsletterProvider?: NewsletterProvider;
  newsletterUrl?: string;
  analyticsProvider?: AnalyticsProvider;
  defaultTheme: "light" | "dark" | "system";
  activeAnnouncement: boolean;
  postsPerPage: number;
  postsOnHomePage: number;
  projectsOnHomePage: number;
};


export type SocialProfile = {
  name: string;
  link: string;
};

export type AuthorType = {
  name: string;
  handle: string;
  socialProfiles: SocialProfile[];
  email: string;
  website: string;
  jobTitle: string;
  company?: string;
  availableForWork: boolean;
  location: {
    city: string;
    media: string;
  };
};