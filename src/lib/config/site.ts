import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'HOME',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/IMG_0111.JPG',
    name: '大任',
    status: '',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  themeColor: '#3D4451'
}
