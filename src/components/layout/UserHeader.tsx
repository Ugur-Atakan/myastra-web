import { useEffect, useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function UserHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
      {/* Empty header for now */}
    </header>
  );
}