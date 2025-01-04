export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/icons/");

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("dist");
}
