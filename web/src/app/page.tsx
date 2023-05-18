import {User} from 'lucide-react'
import nlwLogo from '../assets/nlw-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      <div className="relative  flex  flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 ">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2   translate-x-1/2 rounded-full bg-purble-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500' />
          </div>
          <p className='text-sm max-w-[140px] leading-snug'>
             <span className='underline'> Crie sua conta</span> {' '}
             e salve suas memórias!
          </p>
        </a>

        <div className='space-y-5'>
          <Image src={nlwLogo} alt="NLW Logo SpaceTime" />
          <div className='max-w-[420px] space-y-1'>
            <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>
              Colecione momentos marcantes na sua jornada e compartilhe com o mundo!
            </p>
          </div>

          <a href="" className='px-5 py-3 bg-green-500  rounded-full uppercase leading-none text-sm text-black inline-block hover:bg-green-600'>Cadastrar lembrança</a>
        </div>

        <div className="text-sm leading-relaxed">
          <p>Feito com amor </p>
        </div>



      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)]  bg-cover p-16 ">
        
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px]  text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança. Que tal{' '}
            <a href="#" className="underline hover:text-gray-50">
              criar uma agora?
            </a>{' '}
          </p>
        </div>
      </div>
    </main>
  )
}
