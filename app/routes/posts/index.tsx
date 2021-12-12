// routesディレクトリの構成でルート管理
import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

/* 
  ・loaderとuseLoaderDataはリンクしている。loaderはそのコンポーネントのバックエンド「API」。
  ・Remixはサーバ上でレンダリングを行い、従来のWebフレームワークのように完全なHTMLドキュメントを送信している。
    また、クライアントでもハイドレーションも行っている。*/

export const loader = () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  console.log(posts); // このログはサーバー、クライアントどちらにも記録される

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
