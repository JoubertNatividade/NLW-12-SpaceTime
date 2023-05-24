export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px]  text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança. Que tal{' '}
        <a href="#" className="underline hover:text-gray-50">
          criar uma agora?
        </a>{' '}
      </p>
    </div>
  )
}
