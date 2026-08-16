
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface About3Props {
  className?: string;
  title: string;
  description?: string;
  mainImage: {
    src: string;
    alt: string;
  };
  secondaryImage: {
    src: string;
    alt: string;
  };
  breakout: {
    src?: string;
    alt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };
}

const About3 = ({
  className,
  title = "About Us",
  description = "Money Circle is a digital platform designed to simplify and modernize the traditional Ajo savings system by helping individuals and groups organize, track, and manage their contributions in one place. It provides a clear view of savings cycles, contributions, members, payment schedules, and records, reducing the reliance on manual tracking through notebooks, spreadsheets, or chat messages. The project is built with scalability in mind, with the goal of making Ajo savings more transparent, organized, and easier to manage while preserving the simplicity and community-driven nature of the traditional savings model.",
  mainImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
    alt: "about",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
    alt: "about",
  },
  breakout = {
    src: "https://github.com/steven-anongo.png",
    alt: "Steven Anongo",
    title: "Hi, I'm Steven.",
    description:
      "I'm a software engineer building Money Circle, a platform that helps people save money together in a transparent and secure way. This is a capstone project for my software development bootcamp, and I'm excited to share it with the world. I hope you find it useful and enjoy using it as much as I enjoyed building it.",
    buttonText: "Learn More",
    buttonUrl: "https://www.linkedin.com/in/steven-anongo",
  },
}: About3Props) => {
  return (
    <section id="about" className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-14 flex flex-col gap-5 lg:w-2/3">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12 dark:invert"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button
                variant="outline"
                className="mr-auto"
                render={<a href={breakout.buttonUrl} target="_blank" />}
                nativeButton={false}
              >
                {breakout.buttonText}
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { About3 };
