
import Link from 'next/link';


export default function ThemeButtons() {
    return (
        <>
            <div className="fixed right-0 bottom-0 m-6 p-2 bg-white inline-flex items-center rounded-full z-10">
                <button className="bg-gray-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="gray"></button>
                <button className="bg-red-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="red"></button>
                <button className="bg-orange-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="orange"></button>
                <button className="bg-yellow-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="yellow"></button>
                <button className="bg-green-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="green"></button>
                <button className="bg-teal-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="teal"></button>
                <button className="bg-blue-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="blue"></button>
                <button className="bg-indigo-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="indigo"></button>
                <button className="bg-purple-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none"
                    theme-button="purple"></button>
                <button className="bg-pink-700 w-4 h-4 rounded-full outline-none focus:outline-none" theme-button="pink"></button>
            </div>
        </>
    )
}