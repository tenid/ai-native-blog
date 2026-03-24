type Author = {
  name: string
  bio: string
  avatar: string
}

export const authors: Record<string, Author> = {
  default: {
    name: 'Your Name',
    bio: 'A short bio describing yourself.',
    avatar: '/default-avatar.svg',
  },
}

export function getAuthor(id: string = 'default'): Author {
  return authors[id] ?? authors['default']
}

export const siteConfig = {
  siteName: 'My Portfolio',
  siteDescription: 'This is my portfolio.',
}
