import Link from "next/link";
export default function NavBarMain() {
  return (
    <nav>
      <div className="flex justify-center gap-6 py-5 bg-black text-yellow-500 text-bold text-xl">
        <Link href="/bookshelf/community">Community</Link>
        <Link href="/bookshelf/yourshelf">Your Shelf</Link>
        <Link href="/bookshelf/entertainment">Entertainment</Link>
        <Link href="/bookshelf/artliterature">Arts & Literature</Link>
        <Link href="/bookshelf/history">History</Link>
        <Link href="/bookshelf/technologyandsciences">
          Technology & Science
        </Link>
        <Link href="/bookshelf/language">Language</Link>
        <Link href="/bookshelf/philosophy">Philosophy</Link>
        <Link href="/bookshelf/religion">Religion</Link>
      </div>
    </nav>
  );
}
