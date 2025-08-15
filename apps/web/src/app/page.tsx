import { HonoApiTester } from '@/components/hono-api-tester';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <div className='container flex flex-col items-center justify-center gap-6 px-4 md:px-6'>
        <h1 className='text-center text-4xl font-bold tracking-tight md:text-5xl'>Next.js + Hono Start</h1>
        <p className='text-muted-foreground max-w-xl text-center text-lg'>
          A monorepo starter with a Next.js 15 frontend featuring Tailwind CSS, shadcn/ui, and the React Compiler,
          paired with a high-performance Hono backend.
        </p>
        <div className='flex items-center gap-4'>
          <Button asChild>
            <a href='https://github.com/aleksa-codes/next-hono-start' target='_blank' rel='noopener noreferrer'>
              <Github />
              <span>GitHub</span>
            </a>
          </Button>
        </div>

        <div className='w-20 border-t border-dashed' />

        <HonoApiTester />
      </div>
      <footer className='absolute bottom-4'>
        <a
          href='https://github.com/aleksa-codes'
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted-foreground text-sm underline'
        >
          Made by aleksa.codes
        </a>
      </footer>
    </main>
  );
}
