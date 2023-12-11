import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import SigninButton from "@/components/SigninButton";
import siteMetadata from "@/data/siteMetadata";
import navLinks from "@/data/navLinks";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-8">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image
                  src="/logo.png"
                  alt="Agustín Garrido logo"
                  className="dark:invert"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <SigninButton></SigninButton>
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
          <ModeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
