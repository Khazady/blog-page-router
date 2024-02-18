import styles from "./featured-posts.module.css";
import PostGrid from "../posts/posts-grid";

export default function FeaturedPosts() {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={featured} />
    </section>
  );
}
