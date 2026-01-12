"use client";

import { Suspense } from "react";
import CartContent from "./CartContent";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading cart...</p>}>
      <CartContent />
    </Suspense>
  );
}
