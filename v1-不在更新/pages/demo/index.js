const app = getApp();
const api = app.globalData.api;
Page({
    data: {

    },

    onLoad: function (options) {
        app.getOnload(this);
    },

    onShow: function () {
        this.getDetail();
    },

    getDetail() {

    },

    onHide: function () {

    },

    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {
        return app.globalData.share;
    }
})