import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/src/assets/logo.png" alt="Plastic-Recycle" />
            </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center h-screen">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">Plastic-Recycle</span>{' '}
                                <span className="block text-indigo-600">for a clean earth</span>
                            </h1>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                                <div className="rounded-md shadow">
                                    <Link to="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Join Us
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
