import { CharacterDetailResponse } from "../types";

// Local data storage for character details
export const characterDatabase: Record<string, CharacterDetailResponse> = {
  "一": {
    pinyin: "yī",
    sentence: "我有一个苹果。",
    phrases: ["一个", "一起"]
  },
  "二": {
    pinyin: "èr",
    sentence: "我有两个玩具。",
    phrases: ["第二", "二月"]
  },
  "三": {
    pinyin: "sān",
    sentence: "三只小鸟在飞。",
    phrases: ["三天", "三月"]
  },
  "四": {
    pinyin: "sì",
    sentence: "四个小朋友在玩。",
    phrases: ["四季", "四月", "四天"]
  },
  "五": {
    pinyin: "wǔ",
    sentence: "五颗星星亮晶晶。",
    phrases: ["五个", "五月"]
  },
  "六": {
    pinyin: "liù",
    sentence: "六朵花真漂亮。",
    phrases: ["六个", "六月"]
  },
  "七": {
    pinyin: "qī",
    sentence: "七色彩虹在天上。",
    phrases: ["七天", "七月"]
  },
  "八": {
    pinyin: "bā",
    sentence: "八只蝴蝶在飞。",
    phrases: ["八个", "八月"]
  },
  "九": {
    pinyin: "jiǔ",
    sentence: "九个月亮是假的。",
    phrases: ["九个", "九月"]
  },
  "十": {
    pinyin: "shí",
    sentence: "十个小手指。",
    phrases: ["十个", "十月"]
  },
  "两": {
    pinyin: "liǎng",
    sentence: "我有两个好朋友。",
    phrases: ["两个", "两天"]
  },
  "只": {
    pinyin: "zhī",
    sentence: "一只小猫喵喵叫。",
    phrases: ["只有", "只是"]
  },
  "头": {
    pinyin: "tóu",
    sentence: "一头大象鼻子长。",
    phrases: ["头发", "头上"]
  },
  "又": {
    pinyin: "yòu",
    sentence: "我又想吃糖了。",
    phrases: ["又是", "又来"]
  },
  "了": {
    pinyin: "le",
    sentence: "我吃饱了。",
    phrases: ["好了", "来了"]
  },
  "不": {
    pinyin: "bù",
    sentence: "我不要睡觉。",
    phrases: ["不是", "不好"]
  },
  "大": {
    pinyin: "dà",
    sentence: "这是一只大老虎。",
    phrases: ["大家", "大人", "大牛", "大饼"]
  },
  "小": {
    pinyin: "xiǎo",
    sentence: "这是一只小兔子。",
    phrases: ["小孩", "小心", "小朋友", "小猫"]
  },
  "上": {
    pinyin: "shàng",
    sentence: "我上楼去玩。",
    phrases: ["上面", "上学", "天上"]
  },
  "下": {
    pinyin: "xià",
    sentence: "我下楼吃饭。",
    phrases: ["下面", "下雨", "地下"]
  },
  "多": {
    pinyin: "duō",
    sentence: "我有很多玩具。",
    phrases: ["多少", "很多"]
  },
  "少": {
    pinyin: "shǎo",
    sentence: "我吃少一点糖。",
    phrases: ["多少", "很少"]
  },
  "白": {
    pinyin: "bái",
    sentence: "白云白白的。",
    phrases: ["白色", "白云"]
  },
  "天": {
    pinyin: "tiān",
    sentence: "今天天气很好。",
    phrases: ["天空", "今天"]
  },
  "云": {
    pinyin: "yún",
    sentence: "白云像棉花糖。",
    phrases: ["白云", "云朵"]
  },
  "山": {
    pinyin: "shān",
    sentence: "山上有大树。",
    phrases: ["大山", "山上"]
  },
  "太": {
    pinyin: "tài",
    sentence: "太阳出来了。",
    phrases: ["太阳", "太大"]
  },
  "阳": {
    pinyin: "yáng",
    sentence: "阳光很温暖。",
    phrases: ["太阳", "阳光"]
  },
  "月": {
    pinyin: "yuè",
    sentence: "月亮弯弯像小船。",
    phrases: ["月亮", "月光"]
  },
  "亮": {
    pinyin: "liàng",
    sentence: "星星亮晶晶。",
    phrases: ["月亮", "明亮"]
  },
  "星": {
    pinyin: "xīng",
    sentence: "星星眨眼睛。",
    phrases: ["星星", "星空"]
  },
  "马": {
    pinyin: "mǎ",
    sentence: "小马跑得快。",
    phrases: ["小马", "马车"]
  },
  "牛": {
    pinyin: "niú",
    sentence: "牛在吃草。",
    phrases: ["小牛", "牛奶"]
  },
  "羊": {
    pinyin: "yáng",
    sentence: "小羊咩咩叫。",
    phrases: ["小羊", "山羊"]
  },
  "兔": {
    pinyin: "tù",
    sentence: "小兔跳跳跳。",
    phrases: ["小兔", "兔子"]
  },
  "虫": {
    pinyin: "chóng",
    sentence: "虫子在爬。",
    phrases: ["小虫", "虫子"]
  },
  "鸟": {
    pinyin: "niǎo",
    sentence: "小鸟在唱歌。",
    phrases: ["小鸟", "鸟儿"]
  },
  "花": {
    pinyin: "huā",
    sentence: "花儿真漂亮。",
    phrases: ["花朵", "花园"]
  },
  "草": {
    pinyin: "cǎo",
    sentence: "小草绿绿的。",
    phrases: ["小草", "草地"]
  },
  "树": {
    pinyin: "shù",
    sentence: "大树高高大。",
    phrases: ["大树", "树叶"]
  },
  "地": {
    pinyin: "dì",
    sentence: "地上有玩具。",
    phrases: ["土地", "地上"]
  },
  "吃": {
    pinyin: "chī",
    sentence: "我爱吃水果。",
    phrases: ["吃饭", "好吃"]
  },
  "看": {
    pinyin: "kàn",
    sentence: "我看图画书。",
    phrases: ["看见", "看书"]
  },
  "走": {
    pinyin: "zǒu",
    sentence: "我走去学校。",
    phrases: ["走路", "走开"]
  },
  "笑": {
    pinyin: "xiào",
    sentence: "我开心地笑。",
    phrases: ["笑声", "大笑"]
  },
  "来": {
    pinyin: "lái",
    sentence: "来和我一起玩。",
    phrases: ["来到", "回来"]
  },
  "飞": {
    pinyin: "fēi",
    sentence: "小鸟天上飞。",
    phrases: ["飞行", "飞机"]
  },
  "爱": {
    pinyin: "ài",
    sentence: "我爱我的家。",
    phrases: ["爱心", "爱人"]
  },
  "是": {
    pinyin: "shì",
    sentence: "我是好孩子。",
    phrases: ["不是", "是的"]
  },
  "跑": {
    pinyin: "pǎo",
    sentence: "我跑得很快。",
    phrases: ["跑步", "快跑"]
  },
  "跳": {
    pinyin: "tiào",
    sentence: "小兔跳高高。",
    phrases: ["跳绳", "跳高"]
  },
  "高": {
    pinyin: "gāo",
    sentence: "爸爸长得高。",
    phrases: ["高兴", "高大"]
  },
  "兴": {
    pinyin: "xìng",
    sentence: "我高兴地玩。",
    phrases: ["高兴", "兴趣"]
  },
  "快": {
    pinyin: "kuài",
    sentence: "我跑得很快。",
    phrases: ["快乐", "快点"]
  },
  "乐": {
    pinyin: "lè",
    sentence: "我很快乐。",
    phrases: ["快乐", "乐园"]
  },
  "好": {
    pinyin: "hǎo",
    sentence: "你好吗？",
    phrases: ["好吃", "好看"]
  },
  "的": {
    pinyin: "de",
    sentence: "这是我的书。",
    phrases: ["好的", "我的"]
  },
  "爸": {
    pinyin: "bà",
    sentence: "爸爸去上班。",
    phrases: ["爸爸", "爸妈"]
  },
  "妈": {
    pinyin: "mā",
    sentence: "妈妈做饭好吃。",
    phrases: ["妈妈", "爸妈"]
  },
  "我": {
    pinyin: "wǒ",
    sentence: "我是小明。",
    phrases: ["我们", "我的"]
  },
  "啊": {
    pinyin: "ā",
    sentence: "啊，真漂亮！",
    phrases: ["啊呀", "好啊"]
  },
  "藏": {
    pinyin: "cáng",
    sentence: "我把玩具藏起来。",
    phrases: ["躲藏", "藏起来"]
  },
  "出": {
    pinyin: "chū",
    sentence: "太阳出来了。",
    phrases: ["出来", "出去"]
  },
  "得": {
    pinyin: "de",
    sentence: "我跑得很快。",
    phrases: ["觉得", "得到"]
  },
  "个": {
    pinyin: "gè",
    sentence: "我有一个苹果。",
    phrases: ["个人", "个子"]
  },
  "瓜": {
    pinyin: "guā",
    sentence: "西瓜很甜。",
    phrases: ["西瓜", "瓜子"]
  },
  "回": {
    pinyin: "huí",
    sentence: "我回家了。",
    phrases: ["回来", "回家"]
  },
  "家": {
    pinyin: "jiā",
    sentence: "这是我的家。",
    phrases: ["家人", "回家"]
  },
  "空": {
    pinyin: "kōng",
    sentence: "天空蓝蓝的。",
    phrases: ["天空", "空气"]
  },
  "毛": {
    pinyin: "máo",
    sentence: "小猫有毛毛。",
    phrases: ["毛毛", "羽毛"]
  },
  "么": {
    pinyin: "me",
    sentence: "你在做什么？",
    phrases: ["什么", "怎么"]
  },
  "你": {
    pinyin: "nǐ",
    sentence: "你好吗？",
    phrases: ["你们", "你的"]
  },
  "去": {
    pinyin: "qù",
    sentence: "我去上学。",
    phrases: ["出去", "回去"]
  },
  "人": {
    pinyin: "rén",
    sentence: "我是一个人。",
    phrases: ["人们", "大人"]
  },
  "日": {
    pinyin: "rì",
    sentence: "今天是好日子。",
    phrases: ["日子", "日光"]
  },
  "什": {
    pinyin: "shén",
    sentence: "这是什么？",
    phrases: ["什么", "为什么"]
  },
  "生": {
    pinyin: "shēng",
    sentence: "我是小学生。",
    phrases: ["生日", "学生"]
  },
  "手": {
    pinyin: "shǒu",
    sentence: "我有一双手。",
    phrases: ["小手", "手指"]
  },
  "睡": {
    pinyin: "shuì",
    sentence: "我要睡觉了。",
    phrases: ["睡觉", "睡衣"]
  },
  "说": {
    pinyin: "shuō",
    sentence: "我会说话。",
    phrases: ["说话", "说明"]
  },
  "停": {
    pinyin: "tíng",
    sentence: "红灯要停下。",
    phrases: ["停止", "停车"]
  },
  "问": {
    pinyin: "wèn",
    sentence: "我问老师问题。",
    phrases: ["问题", "问答"]
  },
  "西": {
    pinyin: "xī",
    sentence: "太阳从西边落下。",
    phrases: ["西瓜", "西方"]
  },
  "心": {
    pinyin: "xīn",
    sentence: "我很开心。",
    phrases: ["心里", "心情"]
  },
  "有": {
    pinyin: "yǒu",
    sentence: "我有很多朋友。",
    phrases: ["没有", "有用"]
  },
  "在": {
    pinyin: "zài",
    sentence: "我在家里。",
    phrases: ["现在", "存在"]
  },
  "做": {
    pinyin: "zuò",
    sentence: "我在做作业。",
    phrases: ["做事", "做饭"]
  },
  "儿": {
    pinyin: "ér",
    sentence: "我是好儿童。",
    phrases: ["儿子", "儿童"]
  },
  "子": {
    pinyin: "zǐ",
    sentence: "我是好孩子。",
    phrases: ["孩子", "儿子"]
  },
  "口": {
    pinyin: "kǒu",
    sentence: "我有一张口。",
    phrases: ["口水", "口袋"]
  },
  "几": {
    pinyin: "jǐ",
    sentence: "你有几个苹果？",
    phrases: ["几个", "几天"]
  },
  "中": {
    pinyin: "zhōng",
    sentence: "我在中国。",
    phrases: ["中间", "中文"]
  },
  "牙": {
    pinyin: "yá",
    sentence: "我要刷牙。",
    phrases: ["牙齿", "牙刷"]
  },
  "门": {
    pinyin: "mén",
    sentence: "我开门出去。",
    phrases: ["门口", "开门"]
  },
  "开": {
    pinyin: "kāi",
    sentence: "我开门进屋。",
    phrases: ["开门", "开始"]
  },
  "可": {
    pinyin: "kě",
    sentence: "我可以吃糖吗？",
    phrases: ["可以", "可是"]
  },
  "里": {
    pinyin: "lǐ",
    sentence: "我在家里。",
    phrases: ["里面", "这里"]
  },
  "床": {
    pinyin: "chuáng",
    sentence: "我在床上睡觉。",
    phrases: ["床上", "床铺"]
  },
  "车": {
    pinyin: "chē",
    sentence: "我坐车去学校。",
    phrases: ["汽车", "车子"]
  },
  "爷": {
    pinyin: "yé",
    sentence: "爷爷讲故事。",
    phrases: ["爷爷", "爷孙"]
  },
  "奶": {
    pinyin: "nǎi",
    sentence: "奶奶做饭好吃。",
    phrases: ["奶奶", "牛奶"]
  },
  "水": {
    pinyin: "shuǐ",
    sentence: "我喝水解渴。",
    phrases: ["水果", "喝水"]
  },
  "饭": {
    pinyin: "fàn",
    sentence: "我吃饭了。",
    phrases: ["米饭", "饭菜"]
  },
  "找": {
    pinyin: "zhǎo",
    sentence: "我找我的玩具。",
    phrases: ["找到", "找人"]
  },
  "坐": {
    pinyin: "zuò",
    sentence: "我坐在椅子上。",
    phrases: ["坐下", "坐车"]
  },
  "听": {
    pinyin: "tīng",
    sentence: "我听妈妈讲故事。",
    phrases: ["听见", "听话"]
  },
  "玩": {
    pinyin: "wán",
    sentence: "我和朋友玩球。",
    phrases: ["玩具", "玩耍"]
  },
  "哭": {
    pinyin: "kū",
    sentence: "弟弟哭了。",
    phrases: ["哭声", "大哭"]
  },
  "起": {
    pinyin: "qǐ",
    sentence: "我起床了。",
    phrases: ["起来", "起床"]
  },
  "喝": {
    pinyin: "hē",
    sentence: "我喝水。",
    phrases: ["喝水", "喝茶"]
  },
  "到": {
    pinyin: "dào",
    sentence: "我到学校了。",
    phrases: ["到了", "到家"]
  },
  "河": {
    pinyin: "hé",
    sentence: "小河里有鱼。",
    phrases: ["河水", "小河"]
  },
  "海": {
    pinyin: "hǎi",
    sentence: "大海很大。",
    phrases: ["大海", "海水"]
  },
  "风": {
    pinyin: "fēng",
    sentence: "风吹树叶响。",
    phrases: ["大风", "风筝"]
  },
  "雨": {
    pinyin: "yǔ",
    sentence: "下雨要打伞。",
    phrases: ["雨伞", "下雨"]
  },
  "雪": {
    pinyin: "xuě",
    sentence: "下雪了，真美。",
    phrases: ["雪花", "下雪"]
  },
  "春": {
    pinyin: "chūn",
    sentence: "春天花儿开。",
    phrases: ["春天", "春风"]
  },
  "夏": {
    pinyin: "xià",
    sentence: "夏天很热。",
    phrases: ["夏天", "夏日"]
  },
  "秋": {
    pinyin: "qiū",
    sentence: "秋天树叶黄。",
    phrases: ["秋天", "秋风"]
  },
  "东": {
    pinyin: "dōng",
    sentence: "太阳从东边升起。",
    phrases: ["东方", "东西"]
  },
  "鱼": {
    pinyin: "yú",
    sentence: "小鱼水里游。",
    phrases: ["小鱼", "金鱼"]
  },
  "狼": {
    pinyin: "láng",
    sentence: "大狼会嚎叫。",
    phrases: ["大狼", "狼狗"]
  },
  "猫": {
    pinyin: "māo",
    sentence: "小猫喵喵叫。",
    phrases: ["小猫", "猫咪"]
  },
  "狗": {
    pinyin: "gǒu",
    sentence: "小狗汪汪叫。",
    phrases: ["小狗", "狗熊"]
  },
  "蝴": {
    pinyin: "hú",
    sentence: "蝴蝶飞呀飞。",
    phrases: ["蝴蝶", "蝴飞"]
  },
  "蝶": {
    pinyin: "dié",
    sentence: "蝴蝶真漂亮。",
    phrases: ["蝴蝶", "蝶舞"]
  },
  "蜜": {
    pinyin: "mì",
    sentence: "蜂蜜很甜。",
    phrases: ["蜜蜂", "蜂蜜"]
  },
  "蜂": {
    pinyin: "fēng",
    sentence: "蜜蜂采花蜜。",
    phrases: ["蜜蜂", "蜂蜜"]
  },
  "谢": {
    pinyin: "xiè",
    sentence: "谢谢你帮助我。",
    phrases: ["谢谢", "感谢"]
  },
  "红": {
    pinyin: "hóng",
    sentence: "红花真美丽。",
    phrases: ["红色", "红花"]
  },
  "蓝": {
    pinyin: "lán",
    sentence: "蓝天白云飘。",
    phrases: ["蓝色", "蓝天"]
  },
  "绿": {
    pinyin: "lǜ",
    sentence: "绿叶绿绿的。",
    phrases: ["绿色", "绿叶"]
  },
  "美": {
    pinyin: "měi",
    sentence: "花儿真美丽。",
    phrases: ["美丽", "美好"]
  },
  "丽": {
    pinyin: "lì",
    sentence: "风景很美丽。",
    phrases: ["美丽", "丽日"]
  },
  "宝": {
    pinyin: "bǎo",
    sentence: "我是爸爸妈妈的宝贝。",
    phrases: ["宝贝", "宝宝"]
  },
  "抱": {
    pinyin: "bào",
    sentence: "妈妈抱抱我。",
    phrases: ["抱抱", "拥抱"]
  },
  "变": {
    pinyin: "biàn",
    sentence: "毛毛虫变成蝴蝶。",
    phrases: ["变成", "变化"]
  },
  "病": {
    pinyin: "bìng",
    sentence: "我生病了要休息。",
    phrases: ["生病", "病人"]
  },
  "点": {
    pinyin: "diǎn",
    sentence: "我吃一点点。",
    phrases: ["一点", "点头"]
  },
  "朵": {
    pinyin: "duǒ",
    sentence: "一朵花开了。",
    phrases: ["花朵", "云朵"]
  },
  "房": {
    pinyin: "fáng",
    sentence: "这是我的房子。",
    phrases: ["房子", "房间"]
  },
  "更": {
    pinyin: "gèng",
    sentence: "我要更加努力。",
    phrases: ["更加", "更好"]
  },
  "还": {
    pinyin: "hái",
    sentence: "我还要吃。",
    phrases: ["还有", "还是"]
  },
  "和": {
    pinyin: "hé",
    sentence: "我和你一起玩。",
    phrases: ["和平", "和好"]
  },
  "见": {
    pinyin: "jiàn",
    sentence: "我见到老师了。",
    phrases: ["看见", "见面"]
  },
  "叫": {
    pinyin: "jiào",
    sentence: "小狗汪汪叫。",
    phrases: ["叫声", "叫喊"]
  },
  "觉": {
    pinyin: "jué",
    sentence: "我觉得很开心。",
    phrases: ["觉得", "感觉"]
  },
  "浪": {
    pinyin: "làng",
    sentence: "海浪拍沙滩。",
    phrases: ["浪花", "海浪"]
  },
  "路": {
    pinyin: "lù",
    sentence: "我走路上学。",
    phrases: ["马路", "走路"]
  },
  "吗": {
    pinyin: "ma",
    sentence: "你好吗？",
    phrases: ["好吗", "是吗"]
  },
  "帽": {
    pinyin: "mào",
    sentence: "我戴帽子。",
    phrases: ["帽子", "草帽"]
  },
  "哪": {
    pinyin: "nǎ",
    sentence: "你在哪里？",
    phrases: ["哪里", "哪儿"]
  },
  "怕": {
    pinyin: "pà",
    sentence: "我不怕黑。",
    phrases: ["害怕", "不怕"]
  },
  "身": {
    pinyin: "shēn",
    sentence: "我身体健康。",
    phrases: ["身体", "身高"]
  },
  "想": {
    pinyin: "xiǎng",
    sentence: "我想妈妈了。",
    phrases: ["想念", "想法"]
  },
  "熊": {
    pinyin: "xióng",
    sentence: "小熊很可爱。",
    phrases: ["小熊", "熊猫"]
  },
  "要": {
    pinyin: "yào",
    sentence: "我要吃饭了。",
    phrases: ["不要", "要点"]
  },
  "也": {
    pinyin: "yě",
    sentence: "我也喜欢你。",
    phrases: ["也是", "也有"]
  },
  "再": {
    pinyin: "zài",
    sentence: "我们再见。",
    phrases: ["再见", "再次"]
  },
  "抓": {
    pinyin: "zhuā",
    sentence: "小猫抓老鼠。",
    phrases: ["抓住", "抓虫"]
  },
  "追": {
    pinyin: "zhuī",
    sentence: "小狗追蝴蝶。",
    phrases: ["追赶", "追求"]
  },
  "木": {
    pinyin: "mù",
    sentence: "木头可以做桌子。",
    phrases: ["木头", "树木"]
  },
  "王": {
    pinyin: "wáng",
    sentence: "老虎是森林之王。",
    phrases: ["王子", "国王"]
  },
  "百": {
    pinyin: "bǎi",
    sentence: "我有一百个积木。",
    phrases: ["一百", "百花"]
  },
  "千": {
    pinyin: "qiān",
    sentence: "一千个星星亮晶晶。",
    phrases: ["一千", "千万"]
  },
  "万": {
    pinyin: "wàn",
    sentence: "一万个祝福送给你。",
    phrases: ["一万", "万物"]
  },
  "公": {
    pinyin: "gōng",
    sentence: "公鸡早上叫。",
    phrases: ["公鸡", "公共"]
  },
  "主": {
    pinyin: "zhǔ",
    sentence: "我是小主人。",
    phrases: ["主人", "主要"]
  },
  "长": {
    pinyin: "zhǎng",
    sentence: "我长大了。",
    phrases: ["长大", "生长"]
  },
  "女": {
    pinyin: "nǚ",
    sentence: "我是女孩子。",
    phrases: ["女孩", "女儿"]
  },
  "早": {
    pinyin: "zǎo",
    sentence: "早上好！",
    phrases: ["早上", "早安"]
  },
  "叶": {
    pinyin: "yè",
    sentence: "树叶绿绿的。",
    phrases: ["叶子", "树叶"]
  },
  "森": {
    pinyin: "sēn",
    sentence: "森林里有很多树。",
    phrases: ["森林", "森严"]
  },
  "林": {
    pinyin: "lín",
    sentence: "树林里有小鸟。",
    phrases: ["树林", "森林"]
  },
  "书": {
    pinyin: "shū",
    sentence: "我爱看书。",
    phrases: ["书本", "书包"]
  },
  "画": {
    pinyin: "huà",
    sentence: "我画了一朵花。",
    phrases: ["画画", "图画"]
  },
  "学": {
    pinyin: "xué",
    sentence: "我爱学习。",
    phrases: ["学生", "学校"]
  },
  "习": {
    pinyin: "xí",
    sentence: "我要好好学习。",
    phrases: ["学习", "习题"]
  },
  "对": {
    pinyin: "duì",
    sentence: "你说得对。",
    phrases: ["对的", "对面"]
  },
  "没": {
    pinyin: "méi",
    sentence: "我没有糖果了。",
    phrases: ["没有", "没事"]
  },
  "老": {
    pinyin: "lǎo",
    sentence: "老师教我知识。",
    phrases: ["老师", "老人"]
  },
  "师": {
    pinyin: "shī",
    sentence: "老师辛苦了。",
    phrases: ["老师", "师傅"]
  },
  "他": {
    pinyin: "tā",
    sentence: "他是我的同学。",
    phrases: ["他们", "他的"]
  },
  "们": {
    pinyin: "men",
    sentence: "我们是好朋友。",
    phrases: ["我们", "他们"]
  },
  "前": {
    pinyin: "qián",
    sentence: "我在前面走。",
    phrases: ["前面", "以前"]
  },
  "后": {
    pinyin: "hòu",
    sentence: "弟弟在后面。",
    phrases: ["后面", "以后"]
  },
  "哥": {
    pinyin: "gē",
    sentence: "哥哥带我玩。",
    phrases: ["哥哥", "大哥"]
  },
  "姐": {
    pinyin: "jiě",
    sentence: "姐姐教我写字。",
    phrases: ["姐姐", "姐妹"]
  },
  "弟": {
    pinyin: "dì",
    sentence: "弟弟很可爱。",
    phrases: ["弟弟", "兄弟"]
  },
  "妹": {
    pinyin: "mèi",
    sentence: "妹妹在玩娃娃。",
    phrases: ["妹妹", "姐妹"]
  },
  "国": {
    pinyin: "guó",
    sentence: "我爱我的国家。",
    phrases: ["国家", "中国"]
  },
  "衣": {
    pinyin: "yī",
    sentence: "我穿新衣服。",
    phrases: ["衣服", "上衣"]
  },
  "服": {
    pinyin: "fú",
    sentence: "这件衣服很漂亮。",
    phrases: ["衣服", "服装"]
  },
  "幼": {
    pinyin: "yòu",
    sentence: "我在幼儿园。",
    phrases: ["幼儿", "幼儿园"]
  },
  "园": {
    pinyin: "yuán",
    sentence: "幼儿园真好玩。",
    phrases: ["花园", "幼儿园"]
  },
  "校": {
    pinyin: "xiào",
    sentence: "我去学校上学。",
    phrases: ["学校", "校园"]
  },
  "爬": {
    pinyin: "pá",
    sentence: "小虫在地上爬。",
    phrases: ["爬行", "爬山"]
  },
  "打": {
    pinyin: "dǎ",
    sentence: "我和爸爸打球。",
    phrases: ["打球", "打水"]
  },
  "写": {
    pinyin: "xiě",
    sentence: "我写字很认真。",
    phrases: ["写字", "写作"]
  },
  "穿": {
    pinyin: "chuān",
    sentence: "我穿新鞋子。",
    phrases: ["穿衣", "穿过"]
  },
  "黄": {
    pinyin: "huáng",
    sentence: "香蕉是黄色的。",
    phrases: ["黄色", "黄瓜"]
  },
  "黑": {
    pinyin: "hēi",
    sentence: "熊猫有黑眼圈。",
    phrases: ["黑色", "黑白"]
  },
  "很": {
    pinyin: "hěn",
    sentence: "我很高兴。",
    phrases: ["很好", "很快"]
  },
  "把": {
    pinyin: "bǎ",
    sentence: "我把玩具收好。",
    phrases: ["把门", "把手"]
  },
  "吧": {
    pinyin: "ba",
    sentence: "我们走吧。",
    phrases: ["好吧", "是吧"]
  },
  "着": {
    pinyin: "zhe",
    sentence: "我拿着书。",
    phrases: ["看着", "拿着"]
  },
};