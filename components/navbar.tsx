
import Link from 'next/link';


export default function NavBar() {
    return (
        <>        
            <div className="flex justify-center border-t border-gray-700 py-5">
                <Link href="/" className="text-gray-600 mx-5 hover:text-gray-500">Inicio</Link>
                <Link href="about" className="text-gray-600 mx-5 hover:text-gray-500">Sobre Mí </Link>
                <Link href="portfolio" className="text-white mx-5">Portfolio </Link>
            </div>
        </>
    )
}