import Image from "next/image"

export default function Imagen(props: any){
    return <Image
    src={"/"+props}
    alt="Next.js Logo"
    width={600}
    height={600}
    priority
  />
  }
  