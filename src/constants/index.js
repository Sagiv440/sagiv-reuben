import {
  c,
  csharp,
  python,
  unity,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  bubbleTitle,
  grampaAndMeTitle,
  fish_Season,
  mincraft,
  nes_emulator,
  roboShift,
  rts_TumeNaile,
  tetris,
  midProject,
  eCommers,
  threejs,
  Qualcomm,
  technion,
  idf,
  ansible,
  linux,
  docker,
  mongodb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "showreal",
    title: "Showreal",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "C#", icon: csharp },
  { title: "Unity", icon: unity },
  { title: "Python", icon: python },
  { title: "React", icon: reactjs },
  { title: "git", icon: git },
  { title: "JavaScript", icon: javascript },
  { title: "Docker", icon: docker },
  { title: "Ansible", icon: ansible },
  { title: "Linux", icon: linux },
  { title: "MongoDB", icon: mongodb }
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  
  {
    title: "Layout Designer",
    company_name: "Qualcomm",
    icon: Qualcomm,
    iconBg: "#161329",
    date: "Jan 2021 - Jan 2023",
    summery: "In my role as a Layout Designer, I had to became proficient in Python and Skill (In house language) programming languages all while working with in a Linux Terminal interface. I also had to develop and demonstrate organizational and communication skills such as team work, meeting strict deadlines, and presenting findings and analysis to colleagues. The position required me to:", 
    points: [
      "Lead my team’s presentations in meetings with management.",
      "Mentor colleagues and debug their code before final submission.",
      "Find innovative and creative solutions to complicated tasks with strict constraints.",
      "Explore efficiency boosters to increase my team’s and my own productivity."
    ],
  },
  {
    title: "Electronics Practical Engineer",
    company_name: "EngineerTechnion Institute",
    icon: technion,
    iconBg: "#161329",
    date: "Jan 2018 - Jan 2020",
    summery: "In my role as a Layout Designer, I had to became proficient in Python and Skill (In house language) programming languages all while working with in a Linux Terminal interface. I also had to develop and demonstrate organizational and communication skills such as team work, meeting strict deadlines, and presenting findings and analysis to colleagues. The position required me to:", 
    points: [
      "Awarded a High preformence student with a GPA: 96.1",
    ],
  },
  {
    title: "Artillery Gun Crewman",
    company_name: "Artillery Corps IDF",
    icon: idf,
    iconBg: "#161329",
    date: "Nov 2013 - Nov 2016",
    summery: "In my role as a Layout Designer, I had to became proficient in Python and Skill (In house language) programming languages all while working with in a Linux Terminal interface. I also had to develop and demonstrate organizational and communication skills such as team work, meeting strict deadlines, and presenting findings and analysis to colleagues. The position required me to:", 
    points: [
      "Awarded for outstanding performance by the regiment officer.",
    ],
  },
];

export const projects = [
  {
    name: "Roboshift",
    description:
      "Co-developed a first-person tower defense game with asymmetric level design. Designed dynamic AI, resource management systems, and fortifications like traps and turrets. Focused on story-driven gameplay and player",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "Blender 3D", color: "pink-text-gradient" },
      { name: "Photoshop", color: "yellow-text-gradient" },
    ],
    image: roboShift,
    source_code_link: "https://www.youtube.com/watch?v=MKdnPXl3_ng",
  },
  {
    name: "Fish Season",
    description:
      "A mobile game for those who love fishing and blowing up boats while riding the bus. Sail the seas, find your fortune, and oh, don’t forget the fish! 🎣🛥️",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "Blender 3D", color: "pink-text-gradient" },
      { name: "Photoshop", color: "yellow-text-gradient" },
    ],
    image: fish_Season,
    source_code_link: "https://www.youtube.com/watch?v=YhcMZusfbZg",
  },
  {
    name: "RTS Game",
    description:
      "A hobby project used to experiment with multi-layer AI using a Minimax-based decision system and AI-driven unit behavior. On the challenges was to create a general interface so that both AI and Player can control the units.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
    ],
    image: rts_TumeNaile,
    source_code_link: "https://github.com/Sagiv440/Unity_Strategy",
  },
  {
    name: "Minecraft World Generator",
    description:
      "A prototype built to explore 3D engines and rendering pipelines. build a custom C++ game engine with OpenGL for terrain generation and rendering. Implements Perlin noise for procedural terrain creation.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "OpenGL", color: "green-text-gradient" },
      { name: "Custom Engine", color: "pink-text-gradient" },
    ],
    image: mincraft,
    source_code_link: "https://github.com/Sagiv440/Minecraft-World-Generator",
  },
  {
    name: "NES_emulator",
    description:
      "This Emulator is build using only standrd library. Sow you can use what ever graphics and input library you want",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "6502_Assembly", color: "green-text-gradient" },
      { name: "SFML", color: "pink-text-gradient" },
    ],
    image: nes_emulator,
    source_code_link: "https://github.com/Sagiv440/NES_emulator",
  },
  {
    name: "Tetris",
    description:
      "This project is was made to as a way to learn the basics of making games And the princibls of games developments and framework. This project use the OLC Pixel Game Engine to render the game on to the screen.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
    ],
    image: tetris,
    source_code_link: "https://github.com/Sagiv440/Tetris",
  },
  {
    name: "Bubble Bi & Bubble Boo (GlobalGameJam2025)",
    description:
      "The ultimate underwater bubble adventure! Bubble Bi & Bubble Boo is a two-player cooperative game that dives deep into teamwork and strategy. In this unique underwater challenge, players control two air bubbles striving to reach the water’s surface. But it’s not as simple as it sounds!",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
    ],
    image: bubbleTitle,
    source_code_link: "https://github.com/Sagiv440/GlobalGameJam2025",
  },
  {
    name: "Grampa And Me (GlobalGameJam2024)",
    description:
      "The game is about a kid who was sent to spend the weekend with his Old Grumpy Grampa. You, as the player, need to cheer the kid up by planting various pranks around the house to prank the grandpa in order to make the kid laugh. Like every good prank, timing is the key to success. Click on the various objects around the house to make the grandpa interact with them and set your traps when he's not looking. Happy pranking :)",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
    ],
    image: grampaAndMeTitle,
    source_code_link: "https://github.com/TechArtGeorgi/GGJ-2024-Haifa",
  },
  {
    name: "React Mid Project",
    description:
      "This app is designed to highlight skills in front-end development.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
    ],
    image: midProject,
    source_code_link: "https://github.com/Sagiv440/ReactMidProject",
  },
  {
    name: "E-Commerce",
    description:
      "A E-Commerce Store Template made in vite React. Thin project is deigned to show skils and knolage in react an front end development.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
    ],
    image: eCommers,
    source_code_link: "https://github.com/Sagiv440/ReactFinalProject",
  },
];
