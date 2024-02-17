import Navbar from '@/components/Navbar'

import '../styles/globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Kowy | Portfolio'
}

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='flex flex-col'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </body>
    </html>
  )
}

export default layout