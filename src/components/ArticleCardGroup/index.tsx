import React from 'react'
import { ArticleCardImage } from '../ArticleCard'

function ArticleCardGroup() {
    return (
        <div className="flex flex-row gap-5 h-[500px] justify-center w-full pt-10">
            <ArticleCardImage category="Boya Badana" />
            <ArticleCardImage category="Tadilat" />
            <ArticleCardImage category="Parke" />
        </div>
    )
}

export default ArticleCardGroup