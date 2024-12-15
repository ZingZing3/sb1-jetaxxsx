import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../../ui/Section';
import BlogPosts from './BlogPosts';

const Blog = () => {
  return (
    <Section
      id="blog"
      title="The Monthly Zinger"
      subtitle="Dive into a rich collection of blog posts that cover everything from personal MSadventures combined with rich and salty thoughts ranging from chronic illness to Spoony advocacy and tips to lifestyle insights."
      icon={BookOpen}
      variant="kahlo"
      className="bg-white"
    >
      <BlogPosts />
    </Section>
  );
};

export default Blog;