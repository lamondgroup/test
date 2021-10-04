module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets/css/theme.css');
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/admin')

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };