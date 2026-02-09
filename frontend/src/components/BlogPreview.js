import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const BlogPreview = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    // Show only first 3 posts
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section className="w-full py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section title */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-primary mb-4"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            {t('blog')}
                        </h2>

                        {/* Decorative divider */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                            <div className="w-2 h-2 rounded-full bg-primary/40" />
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        </div>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('blogSubtitle')}
                        </p>
                    </div>

                    {/* Blog posts grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white"
                                onClick={() => navigate(`/blog/${post.slug}`)}
                            >
                                {/* Cover Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3
                                        className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{post.date}</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* View all button */}
                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate('/blog')}
                            className="group"
                        >
                            {t('viewAllPosts')}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
