// routesディレクトリの構成でルート管理
import { useLoaderData } from "remix";

type Post = {
  slug: string;
  title: string;
};

/* 
  ・loaderとuseLoaderDataはリンクしている。loaderはそのコンポーネントのバックエンド「API」。
  ・Remixはサーバ上でレンダリングを行い、従来のWebフレームワークのように完全なHTMLドキュメントを送信している。
    また、クライアントでもハイドレーションも行っている。*/

export const loader = () => {
  const posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My First Post"
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You"
    }
  ];
  return posts;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  console.log(posts); // このログはサーバー、クライアントどちらにも記録される

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
