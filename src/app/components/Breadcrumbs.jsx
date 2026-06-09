import Link from "next/link";

export default function Breadcrumbs({ section, title }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0 bg-transparent p-0 small fw-bolder">
        <li className="breadcrumb-item">
          <Link href="/" className="text-decoration-none text-secondary">Home</Link>
        </li>
        <li className="breadcrumb-item text-secondary">{section}</li>
        <li className="breadcrumb-item active text-danger fw-bolder" aria-current="page">{title}</li>
      </ol>
    </nav>
  );
}
