import SkeletonElement from './SkeletonElement'

const SkeletonArticle = ({ theme = 'light' }) => {
  const themeClass = theme

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  )
}

export default SkeletonArticle
