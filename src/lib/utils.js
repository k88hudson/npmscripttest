module.exports = {
    baseColors: [
        '#333444',
        '#1e79da',
        '#1F9CDF',
        '#18dea6',
        '#39d91f',
        '#e7ce17',
        '#ea6517',
        '#e71a18',
        '#ec1a6e',
        '#d91fd6'
    ],
    // Note: all colors are outputted as lowercase hex.
    shadeColor: function (color, percent) {
        /* jshint ignore:start */
        // jscs:disable
        var num = parseInt(color.slice(1), 16);
        var amt = Math.round(2.55 * percent);
        var R = (num >> 16) + amt;
        var G = (num >> 8 & 0x00FF) + amt;
        var B = (num & 0x0000FF) + amt;

        return ('#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1)).toLowerCase();
        /* jshint ignore:end */
        // jscs:enable
    }
};
