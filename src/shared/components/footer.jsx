export default function Footer() {
  return (
    <footer className="position-absolute bottom-0 w-100">
      <p className="text-center text-body-secondary">© {new Date().getFullYear()} Tecnisys</p>
    </footer>
  );
}