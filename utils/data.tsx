import { MdSecurity } from "react-icons/md";
import { AiFillHeart, AiFillFileAdd } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPinAngleFill, BsFillShareFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

type linksProps = {
  id: number;
  path: string;
  name: string;
};

type useByProps = {
  id: number;
  name: string;
  icon: string;
};

type whyUsProps = {
  id: number;
  name: string;
  icon?: React.ReactElement | null;
  note: string;
};

type howItWorksProps = {
  id: number;
  name: string;
  icon: React.ReactElement | null;
  note: string;
};

type konectFeaturesProps = {
  id: number;
  more: string;
  title: string;
};

export const Links: linksProps[] = [
  {
    id: 1,
    path: "#home",
    name: "Home",
  },
  {
    id: 2,
    path: "#whyus",
    name: "Why us",
  },
  {
    id: 3,
    path: "#howitworks",
    name: "How it works",
  },
  {
    id: 4,
    path: "#shortenlink",
    name: "Shorten link",
  },
  {
    id: 5,
    path: "#features",
    name: "Features",
  },
];

export const UseBy: useByProps[] = [
  {
    id: 1,
    name: "Videographer",
    icon: "🎥",
  },
  {
    id: 2,
    name: "Content Creator",
    icon: "📝",
  },
  {
    id: 3,
    name: "Video Editor",
    icon: "🎬",
  },
  {
    id: 4,
    name: "Photographer",
    icon: "📸",
  },
  {
    id: 5,
    name: "Social Media Manager",
    icon: "📱",
  },
  {
    id: 6,
    name: "Graphic Designer",
    icon: "🎨",
  },
  {
    id: 7,
    name: "Web Content Creator",
    icon: "🌐",
  },
  {
    id: 8,
    name: "Copywriter",
    icon: "🖋️",
  },
  {
    id: 9,
    name: "Podcast Producer",
    icon: "🎙️",
  },
  {
    id: 10,
    name: "Animator",
    icon: "🎞️",
  },
  {
    id: 11,
    name: "Sound Designer",
    icon: "🎧",
  },
  {
    id: 12,
    name: "Music Composer",
    icon: "🎵",
  },
  {
    id: 13,
    name: "Content Strategist",
    icon: "📊",
  },
  {
    id: 14,
    name: "Video Game Developer",
    icon: "🎮",
  },
  {
    id: 15,
    name: "Influencer",
    icon: "🤳",
  },
  {
    id: 16,
    name: "Art Director",
    icon: "🎨",
  },
  {
    id: 17,
    name: "Content Marketing Manager",
    icon: "📈",
  },
  {
    id: 18,
    name: "UX/UI Designer",
    icon: "🖌️",
  },
  {
    id: 19,
    name: "Motion Graphics Designer",
    icon: "💫",
  },
  {
    id: 20,
    name: "E-Learning Content Developer",
    icon: "📚",
  },
  {
    id: 21,
    name: "Virtual Reality (VR) Content Creator",
    icon: "🕶️",
  },
  {
    id: 22,
    name: "Technical Writer",
    icon: "📄",
  },
  {
    id: 23,
    name: "Social Media Influencer Manager",
    icon: "👤",
  },
  {
    id: 24,
    name: "Content Analyst",
    icon: "🔍",
  },
  {
    id: 25,
    name: "Audio Engineer",
    icon: "🎛️",
  },
  {
    id: 26,
    name: "Broadcast Journalist",
    icon: "📻",
  },
  {
    id: 27,
    name: "Storyboard Artist",
    icon: "📜",
  },
  {
    id: 28,
    name: "Brand Strategist",
    icon: "🚀",
  },
  {
    id: 29,
    name: "Content Moderator",
    icon: "👀",
  },
  {
    id: 30,
    name: "Streaming Content Producer",
    icon: "🎥",
  },
];

export const whyUsReasons: whyUsProps[] = [
  {
    id: 1,
    name: "99% Secured with data encryption",
    icon: <MdSecurity />, // Icon from the MdSecurity component (react-icons/md)
    note: "We use industry-standard encryption to protect your data.",
  },
  {
    id: 2,
    name: "It's 100% Free",
    icon: <BsPinAngleFill />,
    note: "Enjoy all our services without any cost.",
  },
  {
    id: 3,
    name: "Loved by business owners",
    icon: <AiFillHeart />, // Icon from the AiFillHeart component (react-icons/ai)
    note: "Our platform has received positive feedback from business owners.",
  },
  {
    id: 4,
    name: "24HRs Customer Support",
    icon: <RiCustomerService2Fill />, // Icon from the RiCustomerService2Fill component (react-icons/ri)
    note: "Our customer support team is available 24/7 to assist you.",
  },
];

export const HowItWorksArray: howItWorksProps[] = [
  {
    id: 1,
    name: "Sign Up",
    note: "Create an account to start using the link aggregator. Sign up with your email and choose a strong password. You can also sign up using your Google or Facebook account for a faster registration process.",
    icon: <RxAvatar />,
  },
  {
    id: 2,
    name: "Add your content",
    note: "Once you've signed up, you can start adding your favorite links to the aggregator. Organize your links into categories to keep them well-structured and easily accessible.",
    icon: <AiFillFileAdd />,
  },
  {
    id: 3,
    name: "Share on your bio",
    note: "Share your link aggregator page on your social media bio or personal website to let others discover and explore the valuable content you've curated. It's a great way to showcase your favorite resources and connect with your audience.",
    icon: <BsFillShareFill />,
  },
];

export const TestLinks = [
  {
    id: 2,
    option: "Sign up to access all features for free",
  },
  {
    id: 2,
    option: "Have access to your link analytics",
  },
  {
    id: 2,
    option: "Have access to create a link aggregator",
  },
];

export const KonnectFeatures: konectFeaturesProps[] = [
  {
    id: 1,
    title: "🌐 Connect with the World",
    more: "With Konnect, you can expand your reach and connect with a global audience effortlessly. Reach out to people from different corners of the world and build meaningful relationships. Discover new opportunities, exchange ideas, and collaborate on exciting projects with professionals from diverse backgrounds.",
  },
  {
    id: 2,
    title: "📱 Seamless Mobile Experience",
    more: "Konnect is designed to work flawlessly across all devices. Whether you're on your desktop, tablet, or smartphone, enjoy a consistent and intuitive experience on the go. Stay connected with your network wherever you are, making networking convenient and accessible at your fingertips.",
  },
  {
    id: 3,
    title: "📈 Business Opportunities",
    more: "Explore new business opportunities with Konnect's expansive network. Connect with potential partners, investors, and clients to expand your business horizons. Leverage the power of networking to propel your business forward.",
  },
  {
    id: 4,
    title: "📊 Analytics and Insights",
    more: "Gain valuable insights into your connections and interactions with in-depth analytics. Track your performance, measure engagement, and make data-driven decisions. Discover trends in your network, understand your audience better, and optimize your networking strategy for maximum impact.",
  },
  {
    id: 5,
    title: "🔒 Privacy and Security",
    more: "Your privacy matters to us. Konnect ensures top-notch security measures to safeguard your data and communications, providing you with peace of mind. Our robust security protocols and encryption technologies ensure that your interactions and information are protected from unauthorized access.",
  },
  {
    id: 6,
    title: "🎨 Customizable Profile",
    more: "Express your uniqueness with a personalized profile. Customize your page with themes, photos, and a captivating bio that truly represents you. Showcase your skills, accomplishments, and portfolio in a visually appealing way, leaving a lasting impression on your connections.",
  },
  {
    id: 7,
    title: "📱 Social Media Integration",
    more: "Seamlessly connect your social media accounts with Konnect. Share your updates, articles, and achievements with your network across different platforms. Leverage the power of social media to expand your reach and enhance your online presence.",
  },
  {
    id: 8,
    title: "🌐 Custom Domain",
    more: "Create a unique and professional identity for your profile with a custom domain. Personalize your Konnect profile with your own domain name (e.g., yourname.com) to showcase your brand and make a lasting impression on visitors.",
  },
  {
    id: 9,
    title: "📢 Broadcasts and Announcements",
    more: "Keep your audience informed with broadcast messages and announcements. Make announcements, share updates, and engage with your followers effortlessly. Leverage the power of broadcasts to reach a wider audience and ensure that your important messages are heard.",
  },
  {
    id: 10,
    title: "⭐ User-friendly Interface",
    more: "Our intuitive and user-friendly interface ensures a seamless and delightful experience for both new and experienced users. Navigate through the platform with ease, access features effortlessly, and enjoy a hassle-free networking experience that puts you in control.",
  },
];
