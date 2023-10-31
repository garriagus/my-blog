import Image from 'next/image'
import bars from '@/public/next.svg'

export default function About() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="sm:pl-10 sm:pt-4 flex-1">
                <div className="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
                    <div className="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
                        <h2 className="text-white text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0">Agustín Garrido</h2>

                        <div className="flex sm:w-auto w-full sm:justify-start justify-center">
                            <span className="text-gray-600 mr-4 tracking-wider"><span
                                className="text-gray-400">JAVA</span> Full-Stack</span>
                            <span className="text-gray-600 mr-4 tracking-wider"><span
                                className="text-gray-400">IOT</span> Developer</span>

                        </div>

                    </div>
                    <div className="flex sm:w-auto sm:mt-0 mt-4 sm:mb-0 mb-2 w-full sm:justify-start justify-center">
                        <a href="#" className="text-gray-600 mr-3 hover:text-white">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/hub.svg"
                                alt="Next.js Logo"
                                width={50}
                                height={50}
                                priority
                            />
                        </a>
                        <a href="#" className="text-gray-600 mr-3 hover:text-white">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/iot-icon.svg"
                                alt="Next.js Logo"
                                width={50}
                                height={50}
                                priority
                            />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-white">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/terminal.svg"
                                alt="Next.js Logo"
                                width={50}
                                height={50}
                                priority
                            />
                        </a>
                    </div>
                </div>
                <p className="text-gray-500 leading-normal px-4 sm:px-0">
                    Soy un desarrollador Java Full-Stack con experiencia en la creación de aplicaciones web. Me enfoco en brindar soluciones prácticas y eficientes.
                    También realizo proyectos IoT. Siempre busco oportunidades en proyectos interesantes y desafiantes.
                </p>
            </div>
        </div>
    )
}
