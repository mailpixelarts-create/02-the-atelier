import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

interface UseSplitTypeOptions {
  types?: string[];
  tagName?: string;
  splitClass?: string;
}

const useSplitType = (options: UseSplitTypeOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    splitRef.current = new SplitType(ref.current, {
      types: options.types || ['words', 'chars'],
      tagName: options.tagName || 'span',
      splitClass: options.splitClass
    });

    return () => {
      splitRef.current?.revert();
    };
  }, [options.types, options.tagName, options.splitClass]);

  return { ref, split: splitRef };
};

export default useSplitType;
