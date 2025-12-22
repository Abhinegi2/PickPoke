import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome to PickPoke" />
            <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50">
                {/* Navigation */}
                <nav className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <div className="bg-white rounded-full p-2 shadow-md">
                                    <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                                        <circle cx="10" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <span className="text-white font-bold text-xl">PickPoke</span>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                {props.auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-white text-red-600 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition duration-200"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-white font-semibold hover:text-yellow-200 transition duration-200"
                                        >
                                            Log in
                                        </Link>

                                        <Link
                                            href={route('register')}
                                            className="bg-white text-red-600 font-semibold py-2 px-6 rounded-full hover:shadow-lg transition duration-200"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative overflow-hidden py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Pokeball Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-full p-6 shadow-2xl">
                                <svg className="h-24 w-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                                    <circle cx="10" cy="10" r="3"/>
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                            Welcome to <span className="text-red-600">PickPoke</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
                            Your ultimate Pokedex companion. Discover, collect, and explore the amazing world of Pokemon!
                        </p>

                        {!props.auth.user && (
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href={route('register')}
                                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="bg-white text-red-600 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 border-2 border-red-500"
                                >
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Decorative Pokeballs */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-50"></div>
                    <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
                </div>

                {/* Features Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                        Why Choose PickPoke?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-200">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Discover Pokemon</h3>
                            <p className="text-gray-600">
                                Browse through hundreds of Pokemon with detailed information and stats
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-200">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Build Your Collection</h3>
                            <p className="text-gray-600">
                                Track your Pokemon collection and mark your favorites
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-200">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Compare Stats</h3>
                            <p className="text-gray-600">
                                Analyze abilities, types, and battle statistics
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-600 text-sm">
                                © 2024 PickPoke. Built with Laravel v{props.laravelVersion}
                            </p>
                            <p className="text-gray-600 text-sm mt-2 md:mt-0">
                                Gotta catch 'em all! ⚡
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
