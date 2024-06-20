import Topo from '@/components/topo'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-slate-600 h-full min-h-screen '>
      <Topo></Topo>
      <Component {...pageProps} />
    </div>
  )
}
