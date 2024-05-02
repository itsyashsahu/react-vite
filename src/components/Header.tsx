import { PawPrint } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from './ui/button';

const Header = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
  return (
    <header className={`flex items-center justify-between h-16 gap-4 px-4 border-b md:px-6 bg-background`}>
          <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold text-muted-foreground md:text-base"
            >
              <PawPrint className="w-6 h-6 fill-[#12212d]" />
              <span className="font-bold">Cartoonify</span>
              <span className="sr-only">Cartoonify</span>
            </Link>
          </nav>
          <nav className="flex-row hidden gap-6 text-lg font-medium sm:flex md:items-center md:gap-5 md:text-sm lg:gap-6">
            {/* <Link
              to="/"
              className="underline transition-colors underline-offset-2 text-muted-foreground hover:text-foreground"
              // className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link> */}
            <Link
              to="/gallery"
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Gallery
            </Link>
            {
                (pathname !== "/" )?
                <Button
                onClick={()=>{navigate(-1)}}
                variant="outline" className='text-muted-foreground'>
                    Go Back
                </Button>
                :null
            }
          </nav>
        </header>
  )
}

export default Header