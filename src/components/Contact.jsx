import { Mail, Linkedin, Facebook, Github, Gamepad } from "lucide-react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      link: "mailto:sagiv440@gmail.com",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sagiv-reuben-1264341b9/",
    },
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      link: "https://www.facebook.com/sagiv.reuben",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      link: "https://github.com/Sagiv440",
    },
    {
      icon: <Gamepad size={18} />,
      label: "Itch.io",
      link: "https://sagiv440.itch.io/",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 text-center">
      
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        Let’s connect
      </h2>

      <p className="text-white/50 text-sm md:text-base mb-10 max-w-md">
        Feel free to reach out or explore my work across different platforms.
      </p>

      {/* LINKS ROW */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {contacts.map((c, index) => (
          <a
            key={index}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white 
                       transition-colors duration-200"
          >
            {c.icon}
            <span className="text-sm">{c.label}</span>
          </a>
        ))}
      </div>

      {/* SMALL FOOTER NOTE */}
      <p className="text-white/30 text-xs mt-12">
        © {new Date().getFullYear()} Sagiv Reuben
      </p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");