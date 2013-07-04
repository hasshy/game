/**************************************************************************
 * author   : hasshy
 * Create   : 2013/05/21
 * Update   : 2013/06/09
 * Description : 旧戦闘シーン表示制御クラス
 **************************************************************************/
//=============================
//　●enchantクラス読み込み
//=============================
enchant();


/* グローバル変数 */
var game;
var model = new mainmodel();
var actstructures = model.setActerStructure();

var turn = new Array;

var win_player = "0";
var win_enemy = "0";

var result = "0";

//アクター情報
var player_structuer = new Array();		//味方の構造データ
var enemy_batel_structuer = new Array();	//敵の構造データ

var acter = new Array();	//アクター
var pteam = new Array();	//味方チーム
var eteam = new Array();	//敵チーム

//ログ
var log = new Array();

//ターゲット選択用
var targets = new Array();

function startSeting(){

    //Gameクラスを取得、引数に値を渡すと画面サイズ変更可
    game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

    //画像読み出し
    preloadImages();

    //ゲーム開始時の処理
    game.onload = function(){

        // ゲームの環境を変更する
        var scene = game.rootScene;

        scene.backgroundColor = "rgb(0, 255, 255)";
        //scene.background.image = game.assets[BATLE_GRND01_PATH];

        // 地面描画
        var bggrnd = new Sprite(SCREEN_WIDTH, BATLE_GRAND_HEIGHT);
        bggrnd.image = game.assets[BATLE_GRND01_PATH];
        bggrnd.y = BATLE_GRAND_DEF_Y;
        scene.addChild(bggrnd);

        var party = new Array();
        party["1"] = new Array();
        party["1"] = actstructure["0001"]
        party["1"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
        party["1"]["sprite"].image = game.assets[CHARA04A_PATH];
        party["1"]["sprite"].x = PARTY_01_X;
        party["1"]["sprite"].y = PARTY_01_Y;
        party["1"]["sprite"].frame = CHARA06_FRAME_LEFT_01;
//		turn[party["1"]["id"]] = new Array();
//		turn[party["1"]["id"]]["agl"] = party["1"]["agl"];

        scene.addChild(party["1"]["sprite"]);

        party["2"] = new Array();
        party["2"] = actstructure["0002"]
        party["2"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
        party["2"]["sprite"].image = game.assets[CHARA02C_PATH];
        party["2"]["sprite"].x = PARTY_02_X;
        party["2"]["sprite"].y = PARTY_02_Y;
        party["2"]["sprite"].frame = CHARA03_FRAME_LEFT_01;
//		turn[party["2"]["id"]] = new Array();
//		turn[party["2"]["id"]]["agl"] = party["2"]["agl"];
        scene.addChild(party["2"]["sprite"]);

        party["3"] = new Array();
        party["3"] = actstructure["0003"]
        party["3"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
        party["3"]["sprite"].image = game.assets[CHARA01B_PATH];
        party["3"]["sprite"].x = PARTY_03_X;
        party["3"]["sprite"].y = PARTY_03_Y;
        party["3"]["sprite"].frame = CHARA05_FRAME_LEFT_01;
//		turn[party["3"]["id"]] = new Array();
//		turn[party["3"]["id"]]["agl"] = party["3"]["agl"];
        scene.addChild(party["3"]["sprite"]);

        party["4"] = new Array();
        party["4"] = actstructure["0004"]
        party["4"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
        party["4"]["sprite"].image = game.assets[CHARA01A_PATH];
        party["4"]["sprite"].x = PARTY_04_X;
        party["4"]["sprite"].y = PARTY_04_Y;
        party["4"]["sprite"].frame = CHARA06_FRAME_LEFT_01;
//		turn[party["4"]["id"]] = new Array();
//		turn[party["4"]["id"]]["agl"] = party["4"]["agl"];
        scene.addChild(party["4"]["sprite"]);

        party["5"] = new Array();
        party["5"] = actstructure["0005"]
        party["5"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
        party["5"]["sprite"].image = game.assets[CHARA02C_PATH];
        party["5"]["sprite"].x = PARTY_05_X;
        party["5"]["sprite"].y = PARTY_05_Y;
        party["5"]["sprite"].frame = CHARA05_FRAME_LEFT_01;
//		turn[party["5"]["id"]] = new Array();
//		turn[party["5"]["id"]]["agl"] = party["5"]["agl"];
        scene.addChild(party["5"]["sprite"]);

        //　敵
        var enemy = new Array();

        enemy["1"] = new Array();
        enemy["1"] = actstructure["1001"]
        enemy["1"]["sprite"] = new Sprite(BIGENEMY_WIDTH, BIGENEMY_HEIGHT);
        enemy["1"]["sprite"].image = game.assets[BIGENEMY02_PATH];
        enemy["1"]["sprite"].x = ENEMY_01_X;
        enemy["1"]["sprite"].y = ENEMY_01_Y;
        enemy["1"]["sprite"].scaleX *= -1
        enemy["1"]["sprite"].frame = BIGENEMY01_FRAME_DEF_02;
//		turn[enemy["1"]["id"]] = new Array();
//		turn[enemy["1"]["id"]]["agl"] = enemy["1"]["agl"];
        scene.addChild(enemy["1"]["sprite"]);


        //敵を二倍(元画像が小さいので)
        enemy["1"]["sprite"].scale(3, 3);
//		enemy_02.scale(3, 3);
//		enemy_03.scale(3, 3);
//

        //シーンに追加(後に登録した物が上に来る)
        //尚、画像表示は後ほど繰り返し表示
        game.rootScene.addChild(bggrnd);
        game.rootScene.addChild(party["1"]["sprite"]);
        game.rootScene.addChild(party["2"]["sprite"]);
        game.rootScene.addChild(party["3"]["sprite"]);
        game.rootScene.addChild(party["4"]["sprite"]);
        game.rootScene.addChild(party["5"]["sprite"]);


        game.rootScene.addChild(enemy["1"]["sprite"]);
//		game.rootScene.addChild(enemy_02);
//		game.rootScene.addChild(enemy_03);

        //行動順番決定(後でpush繰り返しにする)
        turn = [
            {id:party["1"]["id"], agl:party["1"]["agl"], },
            {id:party["2"]["id"], agl:party["2"]["agl"]},
            {id:party["3"]["id"], agl:party["3"]["agl"]},
            {id:party["4"]["id"], agl:party["4"]["agl"]},
            {id:party["5"]["id"], agl:party["5"]["agl"]},
            {id:enemy["1"]["id"], agl:enemy["1"]["agl"]},
        ];
        turn = turnSort(turn, "agl", -1);

        //勝敗のフラグが立つまで繰り返す
        if(DEBUG_MODE == "1"){
            var stop_flg = "0";
            var stop_cnt = 0;

            //アクター情報を変数に詰める(本来は、他の変数にまとめておく必要有)
            while(result != "1"){

                //デバッグ用　フラグを強制的に立てる
                if(DEBUG_MODE == "1"){
                    alert("繰り返し中");
                    if(stop_flg == "1"){
                        win_player = "1";
                        result = "1";
                    };
                };

                //繰り返しターンを繰り返す
                for(key in turn) {

                    //暫定版　改良の余地が大いにあり

                    alert(act_structures[turn[key]["id"]]["name"] + "の攻撃");
    //				alert("次は" + actoer[key]["name"] + "の行動");
                    log.push = act_structures[turn[key]["id"]]["name"] + "の攻撃";

                    //攻撃
                    attackPhase();

                    //パラメータのチェック
                    palametacheck();

                };

                if(DEBUG_MODE == "1"){
                    stop_flg = "1";
                };

                //ターン制
               turnlog++;


            };

            var lavel_enemy_name = new Label("NAME:" + enemy["1"]["name"]);
            var lavel_enemy_hp = new Label("HP:" + enemy["1"]["hp"]);

            lavel_enemy_hp.y = 20;
            scene.addChild(lavel_enemy_name);
            scene.addChild(lavel_enemy_hp);

            console.dir(party);
            console.dir(enemy);
            console.dir(turn);
            //行動順番を表示
//			for(var key in turn) {
//				console.dir(key + ":" + turn[key]["agl"]);
//			}

        };

    };

    game.start();

};


//イメージ読み込み
function preloadImages(){

	//キャラクター
	game.preload(CHARA01A_PATH);
	game.preload(CHARA01B_PATH);
	game.preload(CHARA02A_PATH);
	game.preload(CHARA02B_PATH);
	game.preload(CHARA02C_PATH);
	game.preload(CHARA02D_PATH);
	game.preload(CHARA03A_PATH);
	game.preload(CHARA03B_PATH);
	game.preload(CHARA03C_PATH);
	game.preload(CHARA03D_PATH);
	game.preload(CHARA03E_PATH);
	game.preload(CHARA03F_PATH);
	game.preload(CHARA04A_PATH);
	game.preload(CHARA04B_PATH);
	game.preload(CHARA06A_PATH);
	game.preload(CHARA07A_PATH);
	game.preload(CHARA07B_PATH);
	game.preload(CHARA07C_PATH);
	game.preload(CHARA08A_PATH);
	game.preload(CHARA09A_PATH);
	game.preload(CHARA09B_PATH);
	game.preload(CHARA09C_PATH);
	game.preload(CHARA09D_PATH);
	game.preload(CHARA09E_PATH);
	game.preload(CHARA09F_PATH);

	//モンスター
	game.preload(BIGENEMY01_PATH);
	game.preload(BIGENEMY02_PATH);
	game.preload(ENEMY01_PATH);
	game.preload(ENEMY02_PATH);
	game.preload(ENEMY03_PATH);
	game.preload(ENEMY04_PATH);
	game.preload(ENEMY05_PATH);
	game.preload(ENEMY06_PATH);
	game.preload(ENEMY07_PATH);

	//背景
	game.preload(BATLE_GRND01_PATH);

};

//画像を横反転させる
function reverseImageX(buff){
	return buff.scaleX *= -1;
}
