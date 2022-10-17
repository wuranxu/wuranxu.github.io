(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{632:function(v,t,s){"use strict";s.r(t);var _=s(2),a=Object(_.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[v._v("一件小事，让我联想到了消息队列。")])]),v._v(" "),t("h3",{attrs:{id:"租房👶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#租房👶"}},[v._v("#")]),v._v(" 租房👶")]),v._v(" "),t("p",[v._v("最近忙着"),t("code",[v._v("租房")]),v._v("的事情，因为时间比较仓促，所以直接找了很多中介，花了一个周末时间就找好了房子。")]),v._v(" "),t("p",[v._v("这几个月"),t("code",[v._v("虹桥")]),v._v("这的房子都在"),t("code",[v._v("降价")]),v._v("，据说是有航空公司"),t("code",[v._v("搬走")]),v._v("，当然肯定和疫情也脱不了干系。对比去年，租房的价格已经便宜了1k左右了，所以尽管可以续租，为了换个大点的房子，我们也想看看。")]),v._v(" "),t("h3",{attrs:{id:"一件小事😂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一件小事😂"}},[v._v("#")]),v._v(" 一件小事😂")]),v._v(" "),t("p",[v._v("房租已经交好了，房东需要帮我们配一套新的门禁（因为我们不知道在哪配）。由于钥匙在我们手上，房东需要我们把钥匙交给她，她再去配新的"),t("code",[v._v("门禁")]),v._v("。")]),v._v(" "),t("p",[v._v("而中介就在隔壁楼栋，于是房东让我们把钥匙放到中介处，她"),t("code",[v._v("之后去拿")]),v._v("。")]),v._v(" "),t("p",[v._v('这件事就安排给我妈了，我妈"傻乎乎"的，一个人走到单元楼下，问房东啥时候过来。然后我看到我妈在抱怨房东为啥不直接过来，非要我妈去交给中介。')]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.pity.fun/picture/20221017230413.png",alt:""}})]),v._v(" "),t("p",[v._v("这个场景，是不是就有点像"),t("code",[v._v("消息队列")]),v._v("的场景。")]),v._v(" "),t("ul",[t("li",[v._v("同步场景")])]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("我妈等待房东过来取钥匙\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("我妈必须待在楼下等待，整个人处于阻塞状态，房东不来我妈就一直得等着。")]),v._v(" "),t("ul",[t("li",[v._v("消息队列场景")])]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("1. 我妈找到中介\n2. 我妈把钥匙存放到中介处\n3. 房东闲暇时候去中介取钥匙\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br")])]),t("p",[v._v("这样做的好处就是我妈不"),t("code",[v._v("依赖于")]),v._v("房东的状态，房东可以1小时以后来，也可以2小时后来，我妈只做他自己那部分内容:")]),v._v(" "),t("blockquote",[t("p",[v._v("把钥匙交给中介")])]),v._v(" "),t("p",[v._v("而和现实一样，消息队列也可能出现问题。比如:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("中介关门了（人中介也可能人有三急是不)")]),v._v(" "),t("p",[v._v("这个类似于消息队列挂掉了，你的消息（钥匙）就跟着一起处于不可用的状态。")])]),v._v(" "),t("li",[t("p",[v._v("中介把你的钥匙搞丢了")]),v._v(" "),t("p",[v._v("这种就类似于消息丢失的场景，你的消息是发出去了，但是对方给你弄丢了，导致消息消费者没收到消息。")])]),v._v(" "),t("li",[t("p",[v._v("中介A通知房东拿完钥匙后，中介B以为房东没拿，又通知房东再拿钥匙")]),v._v(" "),t("p",[v._v("这个就属于重复消费，同样的消息，对方接受了多次。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);