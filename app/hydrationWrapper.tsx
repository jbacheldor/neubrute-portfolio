"use client";
import { ReactElement, ReactNode, useEffect, useState } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}


export default function HydrationWrapper({children}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
