

import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer2Props extends FooterBasicProps {
  logoClassName?: string;
}
type Props = Partial<Footer2Props>;

const defaultProps: Footer2Props = {
  logo: {
    url: "/",
    src: "/logo-black.png",
    alt: "logo",
    title: "money circle",
  },
  description: "A simple, transparent way for trusted groups to save together.",
  sections: [
    {
      title: "Socials",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com/in/steven-anongo" },
        { name: "X", href: "https://x.com/am_stevenanong" },
        { name: "Instagram", href: "https://instagram.com/am_stevee" },
      ],
    },
    {
      title: "App",
      links: [
        { name: "About", href: "#about" },
        { name: "Waitlist", href: "#waitlist" },
        { name: "FAQ", href: "#faq" },
        { name: "Features", href: "#features" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "GitHub", href: "https://github.com/amStevee/MoneyCircle" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Steven Anongo. All rights reserved.`,
}

const MAX_SECTIONS = 4;

const Footer2 = (props: Props) => {
  const { logo, description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-5", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                <a href={logo?.url}>
                  <img
                    src={logo?.src}
                    alt={logo?.alt}
                    title={logo?.title}
                    className="h-7 dark:invert"
                  />
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {description}
              </p>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
