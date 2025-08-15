'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export function HonoApiTester() {
  const [message, setMessage] = useState<string>('Click the button to fetch data.');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDataFromHono = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Use the environment variable for the API URL
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/test`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(`"${data.message}" (from ${data.timestamp})`);
    } catch (err: unknown) {
      console.error('Failed to fetch data:', err);
      setError('Failed to connect to the backend. Is it running?');
      setMessage('---');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Next.js + Hono.js Test</CardTitle>
        <CardDescription>This component calls an API endpoint on the separate Hono.js backend.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='bg-muted flex h-24 items-center justify-center rounded-md border border-dashed p-4 text-center'>
          <p className='text-muted-foreground text-sm'>
            {error ? <span className='text-red-500'>{error}</span> : message}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={fetchDataFromHono} disabled={isLoading} className='w-full'>
          {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
          {isLoading ? 'Fetching...' : 'Call Hono API'}
        </Button>
      </CardFooter>
    </Card>
  );
}
