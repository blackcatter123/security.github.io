let coze = new CozeWebSDK.WebChatClient({
  config: {
    bot_id: "7486427999148392459",
    isIframe: false,
  },
  componentProps: {
    title: "基于AI agent的民航安检教学辅助平台",
  },
  auth: {
    type: "token",
    token:
      "pat_PlPzo3Ich9o3V7RHD8iWCReniKaNWeCH24jZt1s72uNcIkVEzi7nbg8AtCED7v2l",
    onRefreshToken: function () {
      return "pat_PlPzo3Ich9o3V7RHD8iWCReniKaNWeCH24jZt1s72uNcIkVEzi7nbg8AtCED7v2l";
    },
  },
  ui: {
    base: {
      icon: "public/photos/Logo2.png",
      layout: "pc",
    },
  },
  footer: {
    isShow: true,
    expressionText: "基于AI agent的民航安检智能化教学辅助平台",
  },
});
function openCoze() {
  coze.showChatBot();
}
