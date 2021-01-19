const withOptimizedImages = require("next-optimized-images");
const path = require("path");

const compose = require('next-compose')


module.exports = compose([
    [withOptimizedImages, {
        responsive: {
            adapter: require('responsive-loader/sharp')
        }
    }],
    {
      webpack: (config) => {
        /**some special code */
        config.resolve.alias.images = path.join(__dirname, "public/images");
        return config
      }
    }
  ])
