import nlwLogo from '../assets/nlw-logo.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Logo SpaceTime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes na sua jornada e compartilhe com o mundo!
        </p>
      </div>

      <a
        href=""
        className="inline-block rounded-full bg-green-500  px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Cadastrar lembrança
      </a>
    </div>
  )
}
