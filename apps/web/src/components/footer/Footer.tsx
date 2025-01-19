import { FooterHashTagIcon } from '@/icons/FooterHashtagIcon'
import { FooterInstagramIcon } from '@/icons/FooterInstagramIcon'
import { FooterLogoIcon } from '@/icons/FooterInteractIcon'
import { FooterYouTubeIcon } from '@/icons/FooterYouTubeIcon'

export function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 hidden lg:flex">
      <div className="grid-flow-col items-center absolute left-4">
        <FooterHashTagIcon className='w-10' />
        <p>PoluUni © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className='mx-auto align-middle'>
        <a>
          <FooterLogoIcon className='w-24' />
        </a>
      </div>
      <div className="flex items-center gap-4 absolute right-4">
        <a>
          <FooterYouTubeIcon className='w-8' />
        </a>
        <a>
          <FooterInstagramIcon className='w-7' />
        </a>
      </div>
    </footer>
  )
}
