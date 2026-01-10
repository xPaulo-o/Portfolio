import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useOnScreen(threshold = "-100px") {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: false, margin: threshold });

  return [ref, isVisible];
}