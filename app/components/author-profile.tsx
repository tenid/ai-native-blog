import Image from 'next/image'
import { getAuthor } from 'app/config'

export function AuthorProfile({ authorId }: { authorId?: string }) {
  let { name, bio, avatar } = getAuthor(authorId)

  return (
    <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
          unoptimized={avatar.endsWith('.svg')}
        />
        <div>
          <p className="font-semibold tracking-tight">{name}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}
