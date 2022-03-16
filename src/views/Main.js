import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';
import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchBlogs();
  }, []);

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
        // <p key={blog.id}>{blog.title}</p>
      ))}
    </main>
  );
}
