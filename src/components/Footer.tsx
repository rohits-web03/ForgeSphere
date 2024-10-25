import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const socialMedia = [
        {
            id: 1,
            img: "/git.svg",
            link:'https://github.com/rohits-web03'
        },
        {
            id: 2,
            img: "/twit.svg",
            link:'https://x.com/rohits_web'
        },
        {
            id: 3,
            img: "/link.svg",
            link:'https://www.linkedin.com/in/rohit-kumar-dey-3856891a5/'
        },
    ];
  return (
    <footer className="w-full mx-auto border-t px-8">
      <div className="flex mt-8 mb-4 md:flex-row max-md:gap-6 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rohit Kumar Dey
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;