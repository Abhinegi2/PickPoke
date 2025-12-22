import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="PickPoke - Home" />

            <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                                Welcome to PickPoke!
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-8">
                                Catch 'em all! Discover, collect, and explore the world of Pokemon.
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <button className="bg-white text-red-500 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200">
                                    Explore Pokemon
                                </button>
                                <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200">
                                    My Collection
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Pokeball decorative elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>

                {/* Stats Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Total Pokemon</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">151</p>
                                </div>
                                <div className="bg-red-100 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                                        <circle cx="10" cy="10" r="3"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Caught</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                                </div>
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Favorites</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                                </div>
                                <div className="bg-yellow-100 p-4 rounded-full">
                                    <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Discover Amazing Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-red-400 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Pokemon</h3>
                            <p className="text-gray-600">Find any Pokemon by name or type</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Collection</h3>
                            <p className="text-gray-600">Create your personal Pokedex</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Battle Stats</h3>
                            <p className="text-gray-600">View detailed stats and abilities</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Type Analysis</h3>
                            <p className="text-gray-600">Compare types and weaknesses</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Start Your Pokemon Journey Today!
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join thousands of trainers and build your ultimate Pokemon collection
                        </p>
                        <button className="bg-white text-purple-600 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
