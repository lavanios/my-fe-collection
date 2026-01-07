import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={450}
        viewBox="0 0 280 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="202" rx="10" ry="10" width="260" height="40" />
        <rect x="0" y="362" rx="10" ry="10" width="115" height="27" />
        <rect x="0" y="260" rx="10" ry="10" width="260" height="80" />
        <rect x="144" y="355" rx="20" ry="20" width="130" height="40" />
        <rect x="0" y="9" rx="5" ry="5" width="255" height="170" />
    </ContentLoader>
)

export default Skeleton