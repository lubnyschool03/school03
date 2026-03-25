const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Passthrough Copy
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    // Watch targets
    eleventyConfig.addWatchTarget("./src/css/");

    // Add markdownify filter
    const md = require("markdown-it")({
        html: true,
        breaks: true,
        linkify: true
    });
    eleventyConfig.addFilter("markdownify", (markdownString) => {
        return md.render(markdownString);
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};




// Trigger rebuild user content
