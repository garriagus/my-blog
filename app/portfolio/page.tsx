import Image from 'next/image'
import bars from '@/public/next.svg'

export default function Portfolio() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="md:w-1/2 px-3 mb-6 w-full">
                <div className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden">
                    <h2 className="text-white text-lg mb-2">Este es mi primer proyecto</h2>
                    <p className="text-white opacity-50">Descripcion de mi proyecto</p>
                    <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                        <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80" />
                            </div>
                            <div className="flex-1 pl-2">
                                <h2 className="text-white mb-1">Agustín Garrido</h2>
                                <p className="text-white opacity-50 text-xs">May 18/10/23</p>
                            </div>
                        </div>
                        <span className="text-white opacity-50">
                            <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 459 459">
                                <path
                                    d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
                <div className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden">
                    <h2 className="text-white text-lg mb-2">Este es mi primer proyecto</h2>
                    <p className="text-white opacity-50">Descripcion de mi proyecto</p>
                    <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                        <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80" />
                            </div>
                            <div className="flex-1 pl-2">
                                <h2 className="text-white mb-1">Agustín Garrido</h2>
                                <p className="text-white opacity-50 text-xs">May 18/10/23</p>
                            </div>
                        </div>
                        <span className="text-white opacity-50">
                            <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 459 459">
                                <path
                                    d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
                <div className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden">
                    <h2 className="text-white text-lg mb-2">Este es mi primer proyecto</h2>
                    <p className="text-white opacity-50">Descripcion de mi proyecto</p>
                    <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                        <div className="inline-flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80" />
                            </div>
                            <div className="flex-1 pl-2">
                                <h2 className="text-white mb-1">Agustín Garrido</h2>
                                <p className="text-white opacity-50 text-xs">May 18/10/23</p>
                            </div>
                        </div>
                        <span className="text-white opacity-50">
                            <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 459 459">
                                <path
                                    d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
