import { formatDate } from "date-fns";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/icons/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("dist");

  eleventyConfig.addFilter(
    "formatDate",
    function (date, format = "MMM dd, yyyy") {
      return formatDate(date, format);
    }
  );

  eleventyConfig.addFilter("preview", function (post, length = 250) {
    if (post.length <= length) return post;
    else {
      for (var i = length; i < post.length; i++) {
        if (post.charAt(i) === ".") {
          return post.substring(0, i) + "...";
        }
      }
    }
  });

  eleventyConfig.addCollection("categories", function(collectionApi) {
    let categories = new Set();
    let posts = collectionApi.getFilteredByTag('post');
    posts.forEach(p => {
      let cats = p.data.categories;
      cats.forEach(c => categories.add(c));
    });
    return Array.from(categories);
  });

  eleventyConfig.addFilter("filterByCategory", function(posts, cat) {
    /*
    case matters, so let's lowercase the desired category, cat
    and we will lowercase our posts categories
    */
    cat = cat.toLowerCase();
    let result = posts.filter(p => {
      let cats = p.data.categories.map(s => s.toLowerCase());
      return cats.includes(cat);
    });
    return result;
  });
  

}
