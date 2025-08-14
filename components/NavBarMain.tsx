import Link from "next/link";
export default function NavBarMain() {
  return (
    <nav>
      <div className="flex justify-center gap-12 py-5 bg-blue-500 text-white text-bold text-3xl">
        <Link href="/">HOME</Link>
        <Link href="/login">SIGN IN</Link>
        <Link href="/bookshelf/yourshelf">BOOKSHELF</Link>
      </div>
    </nav>
  );
}
