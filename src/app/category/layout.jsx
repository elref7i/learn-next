'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function layout({ children }) {
  let currentPath = usePathname();

  return (
    <div className="my-8 p-5 text-2xl flex justify-center gap-5 items-center">
      <aside>
        <ul>
          <li>
            <Link
              className={
                currentPath === '/category/camera'
                  ? 'bg-red-700'
                  : 'bg-blue-800'
              }
              href="/category/camera"
            >
              camera
            </Link>
          </li>
          <li>
            <Link
              className={
                currentPath === '/category/mobile'
                  ? 'bg-red-700'
                  : 'bg-blue-800'
              }
              href="/category/mobile"
            >
              mobile
            </Link>
          </li>
          <li>
            <Link
              className={
                currentPath === '/category/laptop'
                  ? 'bg-red-700'
                  : 'bg-blue-800'
              }
              href="/category/laptop"
            >
              laptop
            </Link>
          </li>
        </ul>
      </aside>
      <div>{children}</div>
    </div>
  );
}
