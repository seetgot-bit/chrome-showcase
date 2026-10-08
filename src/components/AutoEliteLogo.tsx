import { Link } from "@tanstack/react-router";

export function AutoEliteMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <path d="M8 49 27 10h13L27 49H8Z" fill="currentColor" />
      <path d="M33 10h23L50 22H36l-3-12Z" fill="currentColor" />
      <path d="M30 28h20l-5 10H27l3-10Z" fill="currentColor" />
      <path d="M24 44h18l-2 5H21l3-5Z" fill="currentColor" />
    </svg>
  );
}

export function AutoEliteLogo() {
  return (
    <Link to="/" className="brand" aria-label="AutoElite Motorcars home">
      <span className="brand-mark"><AutoEliteMark /></span>
      <span className="brand-wordmark"><strong>AUTOELITE</strong><small>MOTORCARS</small></span>
    </Link>
  );
}