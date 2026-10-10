import BookList from '../elements/shared/header/Booklist';

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="container py-5">
        <BookList />
      </div>
    </div>
  );
}