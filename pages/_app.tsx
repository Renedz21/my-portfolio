import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import { QueryClientProvider } from '@tanstack/react-query';
import { query } from '@/lib/queryClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={query}>
      <Component {...pageProps} />
      <Analytics />
    </QueryClientProvider>
  )
}
