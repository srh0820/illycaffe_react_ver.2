import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" // 스크롤 애니메이션 없이 즉시 이동
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
