"use client"


export default function About() {   
return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">关于我们</h1>
      <p className="text-lg text-left max-w-2xl">
        欢迎来到我们的博客系统！这是一个使用 Next.js 和 Tailwind CSS 构建的现代博客平台，旨在提供一个简洁、易用的写作和阅读体验。无论你是想分享你的想法，还是寻找灵感，这里都是你的理想之地。
      </p>
      <p className="text-lg text-left mt-4 max-w-2xl">
        我们致力于为用户提供一个友好的环境，让每个人都能轻松创建和管理自己的博客文章。感谢你的访问，希望你在这里找到你所需要的一切！
      </p>    
      </div>
  );
}