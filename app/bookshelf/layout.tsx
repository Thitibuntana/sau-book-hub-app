import NavBarBookShelf from "@/components/NavBarBookShelf";

export default function BookshelfPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <br />
      <h1 className="text-6xl font-bold text-center">Bookshelf</h1>
      <p className="text-lg text-center mt-4">
        Select genres you want to read, then add the books to your bookshelf!
      </p>
      <br />
      <NavBarBookShelf />
      {children}
    </div>
  );
}
