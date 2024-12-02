import Link from 'next/link';

function CustomLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault(); // Prevent URL change
        if (onClick) onClick(); // Handle any custom logic
      }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <CustomLink href="/some-page" onClick={() => console.log('Link clicked!')}>
      Click me
    </CustomLink>
  );
}