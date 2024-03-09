import Navbar from '@/components/Navbar'

import '../styles/globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Kowy | Portfolio',
  description: "Im full-stack developer with 3 years of experience",
  icons: {
  icon: ['/favicon.ico']
  }
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