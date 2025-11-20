import { Mail, Linkedin, Facebook, Github, Phone, Gamepad, Twitter } from "lucide-react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const contacts = [
    {
      name: "Email: sagiv440@gmail.com",
      icon: <Mail size={22} />,
      link: "mailto:sagiv440@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      link: "https://www.linkedin.com/in/sagiv-reuben-1264341b9/",
    },
    {
      name: "Facebook",
      icon: <Facebook size={22} />,
      link: "https://www.facebook.com/sagiv.reuben",
    },
    {
      name: "Github",
      icon: <Github size={22} />,
      link: "https://github.com/Sagiv440",
    },
    {
      name: "Itch.io",
      icon: <Gamepad size={22} />,
      link: "https://sagiv440.itch.io/",
    },
    /*{
      name: "Twitter (X)",
      icon: <Twitter size={22} />,
      link: "https://twitter.com/",
    },*/
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 rounded-2xl"
      style={{
        backgroundColor: "#242424ff",   // tertiary
        border: "1px solid #414141ff",  // border
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center"
        style={{ color: "#b1b1b1ff" }} // secondary
      >
        Contact Me
      </h2>

      <div className="flex flex-col space-y-4">
        {contacts.map((c, index) => (
          <a
            key={index}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-xl transition-all"
            style={{
              backgroundColor: "#191919",         // primary
              border: "1px solid #414141ff",      // border
            }}
          >
            <div className="flex items-center space-x-3">
              <div
                className="transition"
                style={{ color: "#b1b1b1ff" }}
              >
                {c.icon}
              </div>

              <span
                className="text-lg transition"
                style={{ color: "#b1b1b1ff" }}    // secondary
              >
                {c.name}
              </span>
            </div>

            <span
              className="transition"
              style={{ color: "#b1b1b1ff" }}
            >
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Contact, "contect")
