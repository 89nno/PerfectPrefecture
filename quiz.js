'use strict';
//quizs　[問題,選択肢3つ,答え,解説]
const quizs = new Array(
  ['日本で最も面積が広いのはどこ？','北海道','岩手県','福島県',1,'2位に岩手県、3位に福島県、4位長野県5位新潟県と続きます。'],
  ['次のうち琵琶湖に生息している固有種はどれ？','カラフトマス','リュウキュウアユ','ビワコオオナマズ',3,'滋賀県の琵琶湖には、他にも多くの固有種が生息しています。'],
  ['大阪市にある、1930年代のニューヨークや映画の世界を楽しめるテーマパークはどれ？','ユニバーサルスタジオジャパン','ハーモニーランド','シーガイア',1,'落ち着いたら行ってみたいですね。'],
  ['次のうち新潟県を代表するお米ブランドはどれ？','コシヒカリ','あいちのかおり','富富富',1,'あいちのかおりは愛知県、富富富（ふふふ）は富山県のブランド米です。'],
  ['鳥取砂丘の中で乗れないものはどれ？','セグウェイ','ママチャリ','らくだ',2,'ファットバイクという砂の上でも走れる自転車は貸し出しがあり、乗ることができます。'],
  ['福島県で有名な果物と言えばももですが、そのブランド名は次のうちどれ？','あかつき','はやぶさ2','ひまわり9号',1,'はやぶさ2、ひまわり9号は宇宙探査機の名前です。'],
  ['坂本龍馬の出身地、四万十川、よさこい節と言えば何県？','群馬県','兵庫県','高知県',3,'高知県はほかにも柑橘類のぶんたん、かつお料理もおいしいですね。'],
  ['名物の黒いつゆのおでん、駿府城、駿河湾がある県はどれ？','沖縄県','静岡県','滋賀県',2,'いずれも静岡県内で有名なものです。'],
  ['岩手県盛岡市の盛岡城跡公園では、6月～7月の夜何が見られる？','かまくら','ホタル','トーテムポール',2,'かまくらは冬のイベントで、トーテムポールは年中見られます。'],
  ['次のうち宮崎県に隣接する都道府県で正しいものは？','大分県、熊本県、鹿児島県','愛媛県、熊本県、大分県','長崎県、熊本県、高知県',1,'九州地方は福岡県、佐賀県、長崎県、大分県、熊本県、宮崎県、鹿児島県、そして沖縄県から成っています。'],
  ['富山県の細工かまぼこには、どのような特徴がある？','穴が開いている','揚げている','お祝い用に送るため色や形に力を入れている',3,'文字が書いてあったり鯛やお花の形をしていたり、様々なかまぼこがあります。'],
  ['和歌山県で全国一の生産量を誇るものは何？','温州みかん','いちご','ドリアン',1,'和歌山県がここ10年以上の間、温州（うんしゅう）みかんの生産量がトップです。'],
  ['神々の国と呼ばれる出雲の象徴・出雲大社のある都道府県はどれ？','京都府','高知県','島根県',3,'福の神、縁結びの神としても名高いです。島根県出雲（いずも）市にあります。'],
  ['次のうち兵庫県にあるのはどれ？','佐渡海峡','明石海峡大橋','レインボーブリッジ',2,'明石海峡大橋は、兵庫県神戸市から同県の淡路市をつないでいます。'],
  ['東京オリンピック・パラリンピック2020で競技が行われた都道府県はいくつ？','3つ','9つ','27つ',2,'多くの競技が東京都でしたが、神奈川県、埼玉県、千葉県、茨城県、静岡県、福島県、宮城県、北海道でも行われました。'],
  ['埼玉県の県庁所在地は？','埼玉市','さいたま市','さきたま市',2,'吸収合併して「さいたま市」になりました。正解以外は市名を決める際に公募で上がったものです。'],
  ['別府、由布院、宝泉寺など九州でも有数の温泉地として知られるのは何県？','熊本県','滋賀県','大分県',3,'気兼ねなく旅行に行けるようになったら、まずゆっくり温泉に浸かりたいです。'],
  ['人気テーマパークの東京ディズニーランドがあるのはどこ？', '東京都','神奈川県','千葉県',3,'東京ドイツ村など、実際と異なる地名を名付けることが稀にあります。'],
  ['奈良公園によくいる動物と言えば何？','モグラ','シカ','カピバラ',2,'行ったのは何年も前ですが思ったよりたくさんいました。'],
  ['秋田県と言えば？','樺太犬','岩手犬','秋田犬',3,'一応いずれも実在する犬の品種です。'],
  ['栃木県宇都宮市は餃子の街として有名ですが、餃子で宇都宮と一、二を争うライバル市と言えば？','静岡県浜松市','福井県小浜市','島根県浜田市',1,'浜松市の餃子の方が野菜の比率が高いらしいです。'],
  ['次のうち群馬県を代表するキャラクターはどれ？','ぐんま様','ぐんまくん','ぐんまちゃん',3,'初代からデザインが変わり、今のぐんまちゃんになっています。ちなみに性別はありません。'],
  ['ぶどう、もも、すももなどの生産量で一、二位を争う関東近郊の県はどれ？','岩手県','山梨県','三重県',2,'ぶどうの生産量は山梨県が国内最多です。'],
  ['りんごの生産量日本一と言えば？','新潟県','佐賀県','青森県',3,'国内のリンゴ生産量の約6割が青森産で、2位の長野県を大きく上回っています。'],
  ['松山城があり、詩人・正岡子規の出身地でもある県はどれ？','愛媛県','茨城県','石川県',1,'愛媛県はみかんも有名ですね。'],
  ['次のうち岡山市内を走る路面電車の愛称は？','らいでん','かごでん','おかでん',3,'電車等乗り物の愛称、色々ありますね。'],
  ['関門（かんもん）海峡で九州地方と中国地方がつながっていますが、その都道府県の正しい組み合わせは？','福岡県と山口県','岡山県と香川県','北海道と青森県',1,'岡山県と香川県は瀬戸大橋、北海道と青森県は青函トンネルです。'],
  ['仙台市にある球場は次のうちどれ？','明治神宮球場','楽天生命パーク宮城','ZOZOマリンスタジアム',2,'明治神宮球場は東京都、ZOZOマリンスタジアムは千葉県にあります。'],
  ['岐阜県のマスコットキャラクター「うーたん」は何の鳥？','白鳥','大鷲','鵜',3,'岐阜県には1,300年以上の長きにわたる鵜飼の伝統があります。'],
  ['2021年8月現在、猛威をふるっている感染症・COVID-19（新型コロナウイルス）について正しい文はどれ？','罹っても完治するので、恐れる必要は全くない。','ワクチンを打てば、他者に感染させることは完全になくなる。','感染しても症状が現れない場合もあれば、重症化したり長期間にわたって後遺症に苦しむ場合もある。',3,'情報を精査し、誤った情報に乗らないよう気を付けましょう。'],
  ['うどん、栗林公園、こんぴらさんと言えば？','鳥取県','香川県','栃木県',2,'栗林公園はりつりんと読みます。こんぴらさんは海のかみさまです。'],
  ['ごみ回収は夜という珍しい慣習がある、九州地方の都市はどこ？','徳島市','福岡市','松江市',2,'全国的にもなくはないですが、相当珍しいです。'],
  ['愛知県の大手自動車メーカーのトヨタの本社がある市はどこ？','豊田市','本田市','昴市',1,'一企業から大きな影響を受け市名になった珍しい例です。'],
  ['次のうち佐賀県にあるお城は？','唐津城','宇都宮城','小田原城',1,'宇都宮城は栃木県、小田原城は神奈川県にあります。'],
  ['広島のサッカーチーム、サンフレッチェ広島のマスコットキャラクターはどれ？','しかお','ベガッ太','サンチェ',3,'サッカーはチーム数も多く多様なマスコットキャラクターがいますね。'],
  ['東京都の県庁所在地は厳密にはどこに指定されている？','八王子市','新宿区','檜原村',2,'東京都新宿区西新宿2丁目となっています。'],
  ['阿波おどりや生卵を入れるラーメンで有名な四国地方の県はどれ？','岐阜県','群馬県','徳島県',3,'四国も訪れたことがないので行ってみたいです。'],
  ['山形県山形市で毎年行われる大イベントと言えば？','山形一のチャーハン会','日本一の芋煮会','宇宙一のインドカレー会',2,'日本一の芋煮会です。他も実在したら面白そうですね。'],
  ['阿蘇山や、滝を裏側から見られるという鍋ケ滝公園、イルカウォッチングと言えば何県？','熊本県','茨城県','宮城県',1,'くまモンのおひざもとでもあります。'],
  ['次のうち三重県にないのはどれ？','三越伊勢丹','伊勢志摩スカイライン展望台','伊勢神宮',1,'三越伊勢丹は三重県にはない百貨店の名前です。'],
  ['長野県の名物に蕎麦（そば）がありますが、次のうち一般的でないものは？','十割蕎麦','二八蕎麦','一割蕎麦',3,'一割蕎麦という名前はないですが、激安の蕎麦はそば粉が一割のものもあるそうです。'],
  ['次のうち国内の活火山で鹿児島県にある山は？','十勝岳','桜島','御嶽山',2,'十勝岳は北海道、御嶽山は中部地方の活火山です。'],
  ['石川県の名物と言えば次のうちどれ？','湯沢カレー','金沢カレー','所沢カレー',2,'銀色のステンレス皿と黒いルー、ソースがかかったカツ、千切りきゃべつが大きな特徴です。'],
  ['全国で最も人口が多いのは東京ですが、二番目は？','北海道','愛知県','神奈川県',3,'2位に神奈川県、3位に大阪府、4位愛知県5位埼玉県となっています。'],
  ['次のうち長崎県に最も関わりが深い人物は？','ジョン万次郎','ジョセフ・彦','トーマス・グラバー',3,'長崎県に国指定重要文化財のグラバー邸があります。'],
  ['時代劇にもなった「水戸黄門」の本名はどれ？','徳川家康','徳川光圀','徳川慶喜',2,'歴史って覚えるの難しいですよね。'],
  ['次のうち福井県の海岸はどれ？','越前海岸','イギリス海岸','横浜海岸',1,'正解以外の海岸も一応存在します。'],
  ['ソーキそばやサーターアンダギー、チャンプルーと言えばどこの名物？','宮崎県','鹿児島県','沖縄県',3,'国際通りで食べたサーターアンダギー、とてもシンプルなのにおいしかったです。'],
  ['京都府にある、10円玉のデザインにもなっている寺院はどれ？','不動院','平等院鳳凰堂','中善寺',2,'10円玉に酸っぱい系の調味料を塗ってきれいにすると、ゴージャスな気分になります。'],
  ['2021年現在、都道府県について正しいものは？','1都1道2府43県','1都1道8府34県','1都2道3府42県',1,'東京都、北海道、大阪府、京都府、他43県です。'],
);
//初期設定
let count = 0;
let choices = 3;
let choice = new Array();

//最初の問題
quiz();

//クイズ・選択肢の表示、次へ進むボタンの非活性化
function quiz() {
  //問題
  document.getElementById('question').innerHTML = '問' + (count + 1) + '：' + quizs[count][0];
  //選択肢
  let s = '';
  for (let n = 1; n <= choices; n++) {
    s += "【<a href='javascript:anser(" + n + ")'>" + n + "：" + quizs[count][n] + "</a>】" + '<br>';
  }
  document.getElementById('choices3').innerHTML = s;
  //ボタン
  document.getElementById('nextButton').disabled = true;
};

//選択肢を選ぶと答え・解説を表示し、次へ進むボタンを活性化する
function anser(n) {
  //問〇〇　：　正誤　　正解なら正解の答えと解説を表示
  let answerComment = "問" + (count + 1) + "：";
  if (n == quizs[count][4]) {
    answerComment += '〇' + quizs[count][n] + '<br>' + quizs[count][5];
    //ボタン
    document.getElementById('nextButton').disabled = false;

  } else {
    answerComment += '×';
  }
  //答え・解説を表示
  document.getElementById('comments').innerHTML = answerComment;

  //最後の問題を解くとメッセージを表示
  if (count == 49 && n == quizs[count][4]) {
    document.getElementById('finished').innerText = 
    '最後まで見てもらってありがとうございました。\n少しでも地理に興味を持ってもらえたら幸いです。\nおつかれさまでした！';
    document.getElementById('nextButton').disabled = true;
  }
}

//次の問題に進むボタン
function nextQuestion() {
  count += 1;
  quiz();
  //次の問題に進んだとき答え・解説を空にする
  document.getElementById('comments').innerHTML = '<br><br>';
}


//テスト用
//console.log(quizs[0]);
//console.log(count);
//console.log(n);
