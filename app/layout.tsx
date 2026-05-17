import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClearPublish – Prevent Plagiarism Lawsuits Before Publishing',
  description: 'Scan your content for copyright violations and trademark issues before publication. AI-powered risk detection for content creators, bloggers, and marketing agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="de923c6c-c27b-4118-bd1c-1ad197f006a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
