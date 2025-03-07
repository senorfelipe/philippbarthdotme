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

  eleventyConfig.addFilter("preview", function (content, length = 200) {
    return content.substring(0, length) + "...";
  });
}
