"use client";
import { Suspense } from 'react';
import ActivationConfirmed from './activate';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActivationConfirmed />
    </Suspense>
  );
}
