import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export const BlogPage = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <h1
                            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            Blog
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                            <div className="w-2 h-2 rounded-full bg-primary/40" />
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Porady, tradycje i praktyczne wskazówki dotyczące ceremonii pożegnalnych
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/20"
                                onClick={() => navigate(`/blog/${post.slug}`)}
                            >
                                {/* Cover Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Read more */}
                                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                                        <span>Czytaj więcej</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
