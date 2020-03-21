const webpack = require('webpack')
module.exports = config => {
    config.target = 'electron-renderer'
    config.plugins = [
    ...(config.plugins || []),
        new webpack.DefinePlugin({
            'process.env.FLUENTFFMPEG_COV': false
        })
    ]

    return config
}
