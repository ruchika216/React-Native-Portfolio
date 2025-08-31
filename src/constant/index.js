import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  newspaper,
  pageImage1,
  PostCard,
  Project1,
  ProjectHoverImg,
} from "../assets";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    appName: "SmartNursesHub",
    liveUrl: "https://smartnurseshub.com/",
    description:
      "An advanced e-commerce platform designed to seamlessly sell books, notes, brochures, and cards. Featuring secure payments, user-friendly navigation, and a robust admin dashboard for managing products, orders, and user interactions. Optimized for a responsive and engaging shopping experience.",
    imgUrl: Project1,
    imgUrl1: PostCard,
    imgUrl2: newspaper,
    githubLink: "https://github.com/example/ecommerce-website",
    techStack: [
      "React js",
      "Firebase",
      "Stripe Integration",
      "Admin Dashboard",
      "Responsive UI",
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    appName: "Portfolio",
    liveUrl: "https://smartnurseshub.com/",
    description:
      "An advanced e-commerce platform designed to seamlessly sell books, notes, brochures, and cards. Featuring secure payments, user-friendly navigation, and a robust admin dashboard for managing products, orders, and user interactions. Optimized for a responsive and engaging shopping experience.",
    imgUrl: Project1,
    imgUrl1: PostCard,
    imgUrl2: newspaper,
    githubLink: "https://github.com/example/ecommerce-platform",
    techStack: ["React", "Framer", "Styled Component"],
  },
  {
    id: 3,
    title: "Calculator",
    appName: "Calculator",
    liveUrl: "https://smartnurseshub.com/",
    description:
      "An advanced e-commerce platform designed to seamlessly sell books, notes, brochures, and cards. Featuring secure payments, user-friendly navigation, and a robust admin dashboard for managing products, orders, and user interactions. Optimized for a responsive and engaging shopping experience.",
    imgUrl: Project1,
    imgUrl1: ProjectHoverImg,
    imgUrl2: Project1,
    githubLink: "https://github.com/example/mobile-app",
    description2: "The moving is very dam heavy",
    techStack: [
      "Mobile Development",
      "React Native",
      "Cross-Platform",
      "Performance",
      "App Design",
    ],
  },
];
