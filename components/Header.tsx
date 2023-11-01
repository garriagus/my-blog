import Link from './Link'
import MobileNav from './MobileNav'

const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
  ]
  

const Header = () => {
    return (
        <header className="flex items-center justify-between py-10">

            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                {headerNavLinks
                    .filter((link) => link.href !== '/')
                    .map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                        >
                            {link.title}
                        </Link>
                    ))}
                <MobileNav />
            </div>
        </header>
    )
}

export default Header