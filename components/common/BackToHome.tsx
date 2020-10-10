import React from 'react';
import Link from 'next/link';

const BackToHome = ({ className = 'my-12 max-w-4xl mx-auto px-4' }: { className?: string }): JSX.Element => {
  return (
    <div className={className}>
      <Link href="/">
        <a className="no-underline hover:underline">← Back to home</a>
      </Link>
    </div>
  );
};

export default BackToHome;
