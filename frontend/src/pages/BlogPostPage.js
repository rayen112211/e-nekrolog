import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post nie znaleziony</h1>
                        <Button onClick={() => navigate('/blog')}>Wróć do bloga</Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1 py-12">
                <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    {/* Back button */}
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/blog')}
                        className="mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Wróć do bloga
                    </Button>

                    {/* Cover Image */}
                    <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1
                        className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-6 text-gray-600 mb-12 pb-8 border-b-2 border-gray-100">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            <span>{post.author}</span>
                        </div>
                        <div>•</div>
                        <span>{post.readTime} czytania</span>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        {post.content.split('\n').map((paragraph, index) => {
                            if (paragraph.startsWith('# ')) {
                                return (
                                    <h1
                                        key={index}
                                        className="text-4xl font-bold text-gray-900 mt-12 mb-6"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        {paragraph.replace('# ', '')}
                                    </h1>
                                );
                            }
                            if (paragraph.startsWith('## ')) {
                                return (
                                    <h2
                                        key={index}
                                        className="text-3xl font-bold text-gray-900 mt-10 mb-4"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        {paragraph.replace('## ', '')}
                                    </h2>
                                );
                            }
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                return (
                                    <p key={index} className="font-bold text-gray-900 mt-6 mb-2">
                                        {paragraph.replace(/\*\*/g, '')}
                                    </p>
                                );
                            }
                            if (paragraph.startsWith('- ')) {
                                return (
                                    <li key={index} className="text-gray-700 ml-6">
                                        {paragraph.replace('- ', '')}
                                    </li>
                                );
                            }
                            if (paragraph.trim()) {
                                return (
                                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                );
                            }
                            return null;
                        })}
                    </div>

                    {/* Share */}
                    <div className="mt-16 pt-8 border-t-2 border-gray-100">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">Podziel się artykułem</h3>
                            <Button variant="outline">
                                <Share2 className="w-4 h-4 mr-2" />
                                Udostępnij
                            </Button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};
