'use client';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    // 动态设置 body 样式
    const originalStyles = {
      background: document.body.style.background,
      overflow: document.body.style.overflow
    };

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
      url('/imgs/bg-first.png') center/cover no-repeat fixed
    `;
    document.body.style.overflow = 'hidden';

    document.body.style.transition = 'background 0.5s ease';

    // 清理函数
    return () => {
      document.body.style.background = originalStyles.background;
      document.body.style.overflow = originalStyles.overflow;
      document.body.style.transition = ''; // 清除过渡效果
    };
  }, []);


  return (
    <div className="">
     
    </div>
  );
};

export default Home;
