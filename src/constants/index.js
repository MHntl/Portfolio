import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
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

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Bootstrap",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Mimcode Company",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Mimcode Company",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      "Collaborating with teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring both ios and android compatibility.",
      "Participating in code reviews, unit test implementations and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "",
  //   name: "",
  //   designation: "",
  //   company: "",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  //
];

const projects = [
  {
    name: "Crypto Coin",
    description:
      "A comprehensive crypto coin app that allows users to check daily,monthly and annually changes which can be saved by users to make up their own favorite list.",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "Chartjs",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MHntl/CryptoCoinMVC",
  },
  {
    name: "Twitter Clone",
    description:
      "Firebase platform that allows users  to real-time posts, media files and editing their sended posts, providing a convenient and efficient solution for user's needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MHntl/FirebaseTweetApp",
  },
  {
    name: "Burger Shop",
    description:
      "Web application that enables users to order their foods via well designed webpage. There is also an interactive menu with rich visuals and user reviews and ratings",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MHntl/burgerShop",
  },
];

export { services, technologies, experiences, testimonials, projects };
