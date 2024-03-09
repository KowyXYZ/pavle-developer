import Image from "next/image"
import Link from "next/link"


const Footer = () => {

    const date = new Date().getFullYear()

  return (
    <div className=' mt-4 gap-8  mx-64 border-t-2 border-gray-500  py-4'>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
            <div className="text-gray-500">
                <p>© {date} KowyXYZ</p>
            </div>

            <div className="flex gap-3 justify-center items-center mt-5 sm:mt-0">
                <Link href='https://www.instagram.com/pavle.dev/'>  <Image  src='/assets/instagram.svg' width={20} height={20} className="invert "/></Link>
              
                <Link href='https://www.linkedin.com/in/kowy-dev/'> <Image src='/assets/linkedin.svg' width={20} height={20} className="invert"/></Link>
                
                <Link href='https://github.com/KowyXYZ'> <Image src='/assets/white.png' width={20} height={20} /></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Footer