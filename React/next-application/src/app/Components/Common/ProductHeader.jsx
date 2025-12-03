import React from 'react'

export default function ProductHeader({title, description}) {
    return (
        <>
            <div class="mb-8">
                <div class="mb-3 text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                    <p class="text-gray-500 sm:text-xl dark:text-gray-400">{ description }</p>
                </div>
            </div>
        </>
    )
}
