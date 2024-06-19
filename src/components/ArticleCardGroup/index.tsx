import React from 'react'
import { ArticleCardImage } from '../ArticleCard'

function ArticleCardGroup() {
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div>
                <h2 className='font-extrabold text-5xl'>Örnek Projeler</h2>
            </div>
            <div className="flex flex-row gap-5 h-[500px] justify-center w-full pt-10">
                <ArticleCardImage category="Boya Badana" />
                <ArticleCardImage category="Tadilat" />
                <ArticleCardImage category="Parke" />
            </div>
        </div>
    )
}

export default ArticleCardGroup