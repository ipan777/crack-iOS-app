# > 薄荷健康
^https?:\/\/api\.boohee\.com\/shop-interface\/api\/v1\/home\/index url reject-dict
^https?:\/\/bohe\.sfo-tx-shanghai-01\.saas\.sensorsdata\.cn\/api\/v2\/sfo\/user_popup_configs url reject-dict
^https?:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/(discover_chosen|page_float_bubbles) url reject-dict
^https?:\/\/api\.boohee\.com\/app-interface\/v1\/record\/record_tool(_pop)?_ad url reject-dict
^https?:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/record_index url response-body articles response-body fmz200
# 记录 - 大家都在看data.recom_cards / 底部按钮data.recom_btns
^https:\/\/api\.boohee\.com\/meta-interface\/v2\/index\? url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/bohe/bohe_ads.js
# 记录 - 悬浮部件
^https:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/page_float_bubbles\? url reject-dict
# 记录 - 发布
^https:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/tool_buttons\? url reject-dict
# 记录 - 搜索发现
^https:\/\/api\.boohee\.com\/app-interface\/v1\/search\/search\? url reject-dict
# 记录 - 消息 - 通知 - 横幅推广
^https:\/\/status\.boohee\.com\/api\/v1\/merged_messages$ url reject-dict
# 弹窗配置
^https:\/\/bohe\.sfo-tx-shanghai-01\.saas\.sensorsdata\.cn\/api\/v2\/sfo\/user_popup_configs\? url reject-dict
# 广场 - 推荐 - 红标data.tabs[1].badge /轮播图data.recommend_ads
^https:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/plaza\? url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/bohe/bohe_ads.js
# 代谢中心 - 顶部轮播图top_banner / 免费问诊推广diagnos_config / 合作医疗机构partner_hospital / 医患问答question_answer / 热门商品product / 品牌大事件brand_story
^https:\/\/api\.boohee\.com\/open-interface\/v1\/string\/market_page\?title=metabolism_config$ url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/bohe/bohe_ads.js
# 绑定设备 - 横幅推广
^https:\/\/api\.boohee\.com\/meta-interface\/v1\/index\/sensor-banners\? url reject-dict
hostname = api.boohee.com, bohe.sfo-tx-shanghai-01.saas.sensorsdata.cn, lego.boohee.com, status.boohee.com
