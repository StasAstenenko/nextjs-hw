import Link from 'next/link';

const NotFoundError = () => {
  return (
    <div>
      <p>Cloud not found</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
};

export default NotFoundError;
