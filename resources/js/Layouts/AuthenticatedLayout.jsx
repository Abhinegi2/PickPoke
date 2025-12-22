import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="bg-white rounded-full p-2 shadow-md">
                                        <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                                            <circle cx="10" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-xl hidden sm:block">PickPoke</span>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink 
                                    href={route('dashboard')} 
                                    active={route().current('dashboard')}
                                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none"
                                    style={{
                                        borderColor: route().current('dashboard') ? 'white' : 'transparent',
                                        color: 'white'
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink 
                                    href="#"
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-white hover:border-white transition duration-150 ease-in-out focus:outline-none"
                                >
                                    Pokedex
                                </NavLink>
                                <NavLink 
                                    href="#"
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-white hover:border-white transition duration-150 ease-in-out focus:outline-none"
                                >
                                    My Collection
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border-2 border-white text-sm leading-4 font-medium rounded-full text-white bg-white/20 hover:bg-white/30 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-red-700'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink 
                            href={route('dashboard')} 
                            active={route().current('dashboard')}
                            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out"
                            style={{
                                borderColor: route().current('dashboard') ? 'white' : 'transparent',
                                color: 'white',
                                backgroundColor: route().current('dashboard') ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                            }}
                        >
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink 
                            href="#"
                            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-white/10 transition duration-150 ease-in-out"
                        >
                            Pokedex
                        </ResponsiveNavLink>
                        <ResponsiveNavLink 
                            href="#"
                            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-white/10 transition duration-150 ease-in-out"
                        >
                            My Collection
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-white/20">
                        <div className="px-4">
                            <div className="font-medium text-base text-white">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-white/80">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink 
                                href={route('profile.edit')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-white/10 transition duration-150 ease-in-out"
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink 
                                method="post" 
                                href={route('logout')} 
                                as="button"
                                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-white/10 transition duration-150 ease-in-out"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
