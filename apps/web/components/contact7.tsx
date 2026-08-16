import { Mail, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string[];
  className?: string;
}

const Contact7 = ({
  title = "Contact",
  description = "I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.",
  emailLabel = "Email",
  emailDescription = "I respond to all emails within 24 hours.",
  email = "savagekidsteven@email.com",
  chatLabel = "Chat",
  chatDescription = "chat with me on LinkedIn or X.",
  chatLink = ["LinkedIn", "X"],
  className,
}: Contact7Props) => {
  return (
    <section className={cn("py-5", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-muted/50 p-8">
              <Mail className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{emailLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {emailDescription}
              </p>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <MessageCircle className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{chatLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {chatDescription}
              </p>
              <a href="https://linkedin.com/in/steven-anongo" className="hover:underline">
                {chatLink[0]}
              </a>
              <a href="https://x.com/am_stevenanong" className="hover:underline">
                {chatLink[1]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
