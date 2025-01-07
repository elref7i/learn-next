'use client';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  setTimeout(() => {
    router.push('/category/mobile');
  }, 3000);
  return <div>login</div>;
}
