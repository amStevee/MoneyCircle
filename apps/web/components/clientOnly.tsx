import { useState, useEffect } from "react";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setHasMounted(true);
    });
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}