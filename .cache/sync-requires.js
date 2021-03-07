const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/pages/404.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/pages/index.tsx"))),
  "component---src-templates-all-category-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/templates/AllCategory.tsx"))),
  "component---src-templates-all-tag-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/templates/AllTag.tsx"))),
  "component---src-templates-blog-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/templates/Blog.tsx"))),
  "component---src-templates-category-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/templates/Category.tsx"))),
  "component---src-templates-post-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/templates/Post.tsx"))),
  "component---src-templates-tag-tsx": hot(preferDefault(require("/home/manish/Documents/GitHub/yuvansharma.github.io/src/templates/Tag.tsx")))
}

