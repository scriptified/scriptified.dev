/*
Usage - to get scroll position of an element, hide/show element accrodingly
Example:
```
const [sticky, setSticky] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )
```
Ref - https://gist.github.com/whoisryosuke/72d9979a44e01e95400760d98ca519e8
*/

import { useRef, useLayoutEffect, RefObject } from 'react';

const isBrowser = typeof window !== `undefined`;

interface IPosition {
  x: number;
  y: number;
}

type TEffect = ({ prevPos, currPos }: { prevPos: IPosition; currPos: IPosition }) => unknown;

function getScrollPosition({ element, useWindow }: { element?: RefObject<HTMLElement>; useWindow?: boolean }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow ? { x: window.scrollX, y: window.scrollY } : { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect: TEffect,
  deps: Array<unknown>,
  element?: RefObject<HTMLElement>,
  useWindow?: boolean,
  wait?: number
): void {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
