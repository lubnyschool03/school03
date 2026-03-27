const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Passthrough Copy
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/google180600d5ded1f79b.html");
    eleventyConfig.addPassthroughCopy("src/favicon.png");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/favicon-48x48.png");
    eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
    eleventyConfig.addPassthroughCopy("src/favicon-192x192.png");
    eleventyConfig.addPassthroughCopy("src/favicon-512x512.png");
    eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("src/site.webmanifest");

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

    // SEO: Date to ISO format for sitemap
    eleventyConfig.addFilter("dateToISO", (date) => {
        if (!date) return new Date().toISOString().split('T')[0];
        return new Date(date).toISOString().split('T')[0];
    });

    // SEO: Filter out non-indexable pages from sitemap
    eleventyConfig.addFilter("isAdminOrSuccess", (url) => {
        if (!url) return true;
        return url.startsWith("/admin") || url.startsWith("/success") || url.includes("404") || url.startsWith("/demo-blocks");
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
