import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine, RiFiverrLine } from "react-icons/ri";
import { SiFreelancer, SiUpwork } from "react-icons/si";

export const accounts = [
  { name: "Instagram", icon: FaInstagram, link: "" },
  { name: "Email", icon: MdOutlineEmail, link: "" },
  { name: "Whatsapp", icon: FaWhatsapp, link: "" },
  { name: "Telegram", icon: RiTelegramLine, link: "" },
];

export const freelanceAccounts = [
  { name: "Fiver", icon: RiFiverrLine, link: "" },
  { name: "Freelancer", icon: SiFreelancer, link: "" },
  { name: "UpWork", icon: SiUpwork, link: "" },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/mohammed-amine-387666421",
  },
];
