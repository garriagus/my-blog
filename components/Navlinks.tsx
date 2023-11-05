import MobileNav from './MobileNav'
import Image from 'next/image'
import Link from "next/link";

const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
]


const Navlinks = () => {

    return (
        <>
           {headerNavLinks.map((link, index) => (
    <Link key={index} href={link.href} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        {link.title}
    </Link>
))}


        </>
    );
}

export default Navlinks;