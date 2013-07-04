/**************************************************************************
 * author   : hasshy
 * Create   : 2013/05/21
 * Update   : 2013/06/09
 * Description : 共通ファイル
 *		 管理用のウィンドウが欲しい
 *		 戦闘がセミリアルタイムなのでいずれタイマー式にしたい。
 		■prototypeに追加したい関数
		 ・array_marge
		 ・sprintf
		 ・printf
 **************************************************************************/
//おまじない
enchant();

//デバッグモード
// 1　ON
// 2　OFF
var DEBUG_MODE = 1;

/* 定数(後でファイル分割)  */
const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 640;

//パス関係
const STRING_SLASH = "/";
const ROOT_PATH = "";
const COMMON_PATH = ROOT_PATH + "common" + STRING_SLASH;
const IMAGE_PATH = COMMON_PATH + "images" + STRING_SLASH;

// ツクールスプライトシート用 ファイルパス
const CHARE_ROOT_PATH = IMAGE_PATH + "chara" + STRING_SLASH;
const CHARA01A_PATH = CHARE_ROOT_PATH + "vx_chara01_a.png";
const CHARA01B_PATH = CHARE_ROOT_PATH + "vx_chara01_b.png";
const CHARA02A_PATH = CHARE_ROOT_PATH + "vx_chara02_a.png";
const CHARA02B_PATH = CHARE_ROOT_PATH + "vx_chara02_b.png";
const CHARA02C_PATH = CHARE_ROOT_PATH + "vx_chara02_c.png";
const CHARA02D_PATH = CHARE_ROOT_PATH + "vx_chara02_d.png";
const CHARA03A_PATH = CHARE_ROOT_PATH + "vx_chara03_a.png";
const CHARA03B_PATH = CHARE_ROOT_PATH + "vx_chara03_b.png";
const CHARA03C_PATH = CHARE_ROOT_PATH + "vx_chara03_c.png";
const CHARA03D_PATH = CHARE_ROOT_PATH + "vx_chara03_d.png";
const CHARA03E_PATH = CHARE_ROOT_PATH + "vx_chara03_e.png";
const CHARA03F_PATH = CHARE_ROOT_PATH + "vx_chara03_f.png";
const CHARA04A_PATH = CHARE_ROOT_PATH + "vx_chara04_a.png";
const CHARA04B_PATH = CHARE_ROOT_PATH + "vx_chara04_b.png";
const CHARA06A_PATH = CHARE_ROOT_PATH + "vx_chara06_a.png";
const CHARA07A_PATH = CHARE_ROOT_PATH + "vx_chara07_a.png";
const CHARA07B_PATH = CHARE_ROOT_PATH + "vx_chara07_b.png";
const CHARA07C_PATH = CHARE_ROOT_PATH + "vx_chara07_c.png";
const CHARA08A_PATH = CHARE_ROOT_PATH + "vx_chara08_a.png";
const CHARA09A_PATH = CHARE_ROOT_PATH + "vx_chara09_a.png";
const CHARA09B_PATH = CHARE_ROOT_PATH + "vx_chara09_b.png";
const CHARA09C_PATH = CHARE_ROOT_PATH + "vx_chara09_c.png";
const CHARA09D_PATH = CHARE_ROOT_PATH + "vx_chara09_d.png";
const CHARA09E_PATH = CHARE_ROOT_PATH + "vx_chara09_e.png";
const CHARA09F_PATH = CHARE_ROOT_PATH + "vx_chara09_f.png";


// ツクールスプライトシート用 フレーム一覧
const CHARA_WIDTH = 32;
const CHARA_HEIGHT = 48;

const CHARA01_FRAME_FRONT_01 = 0;
const CHARA01_FRAME_FRONT_02 = 1;
const CHARA01_FRAME_FRONT_03 = 2;
const CHARA01_FRAME_LEFT_01 = 12;
const CHARA01_FRAME_LEFT_02 = 13;
const CHARA01_FRAME_LEFT_03 = 14;
const CHARA01_FRAME_RIGHT_01 = 24;
const CHARA01_FRAME_RIGHT_02 = 25;
const CHARA01_FRAME_RIGHT_03 = 26;
const CHARA01_FRAME_BACK_01 = 36;
const CHARA01_FRAME_BACK_02 = 37;
const CHARA01_FRAME_BACK_03 = 38;

const CHARA02_FRAME_FRONT_01 = 3;
const CHARA02_FRAME_FRONT_02 = 4;
const CHARA02_FRAME_FRONT_03 = 5;
const CHARA02_FRAME_LEFT_01 = 15;
const CHARA02_FRAME_LEFT_02 = 16;
const CHARA02_FRAME_LEFT_03 = 17;
const CHARA02_FRAME_RIGHT_01 = 27;
const CHARA02_FRAME_RIGHT_02 = 28;
const CHARA02_FRAME_RIGHT_03 = 29;
const CHARA02_FRAME_BACK_01 = 39;
const CHARA02_FRAME_BACK_02 = 40;
const CHARA02_FRAME_BACK_03 = 41;

const CHARA03_FRAME_FRONT_01 = 6;
const CHARA03_FRAME_FRONT_02 = 7;
const CHARA03_FRAME_FRONT_03 = 8;
const CHARA03_FRAME_LEFT_01 = 18;
const CHARA03_FRAME_LEFT_02 = 19;
const CHARA03_FRAME_LEFT_03 = 20;
const CHARA03_FRAME_RIGHT_01 = 30;
const CHARA03_FRAME_RIGHT_02 = 31;
const CHARA03_FRAME_RIGHT_03 = 32;
const CHARA03_FRAME_BACK_01 = 42;
const CHARA03_FRAME_BACK_02 = 43;
const CHARA03_FRAME_BACK_03 = 44;

const CHARA04_FRAME_FRONT_01 = 9;
const CHARA04_FRAME_FRONT_02 = 10;
const CHARA04_FRAME_FRONT_03 = 11;
const CHARA04_FRAME_LEFT_01 = 21;
const CHARA04_FRAME_LEFT_02 = 22;
const CHARA04_FRAME_LEFT_03 = 23;
const CHARA04_FRAME_RIGHT_01 = 33;
const CHARA04_FRAME_RIGHT_02 = 34;
const CHARA04_FRAME_RIGHT_03 = 35;
const CHARA04_FRAME_BACK_01 = 45;
const CHARA04_FRAME_BACK_02 = 46;
const CHARA04_FRAME_BACK_03 = 47;

const CHARA05_FRAME_FRONT_01 = 48;
const CHARA05_FRAME_FRONT_02 = 49;
const CHARA05_FRAME_FRONT_03 = 50;
const CHARA05_FRAME_LEFT_01 = 60;
const CHARA05_FRAME_LEFT_02 = 61;
const CHARA05_FRAME_LEFT_03 = 62;
const CHARA05_FRAME_RIGHT_01 = 72;
const CHARA05_FRAME_RIGHT_02 = 73;
const CHARA05_FRAME_RIGHT_03 = 74;
const CHARA05_FRAME_BACK_01 = 84;
const CHARA05_FRAME_BACK_02 = 85;
const CHARA05_FRAME_BACK_03 = 86;

const CHARA06_FRAME_FRONT_01 = 51;
const CHARA06_FRAME_FRONT_02 = 52;
const CHARA06_FRAME_FRONT_03 = 53;
const CHARA06_FRAME_LEFT_01 = 63;
const CHARA06_FRAME_LEFT_02 = 64;
const CHARA06_FRAME_LEFT_03 = 65;
const CHARA06_FRAME_RIGHT_01 = 75;
const CHARA06_FRAME_RIGHT_02 = 76;
const CHARA06_FRAME_RIGHT_03 = 77;
const CHARA06_FRAME_BACK_01 = 87;
const CHARA06_FRAME_BACK_02 = 88;
const CHARA06_FRAME_BACK_03 = 89;

const CHARA07_FRAME_FRONT_01 = 54;
const CHARA07_FRAME_FRONT_02 = 55;
const CHARA07_FRAME_FRONT_03 = 56;
const CHARA07_FRAME_LEFT_01 = 66;
const CHARA07_FRAME_LEFT_02 = 67;
const CHARA07_FRAME_LEFT_03 = 68;
const CHARA07_FRAME_RIGHT_01 = 78;
const CHARA07_FRAME_RIGHT_02 = 79;
const CHARA07_FRAME_RIGHT_03 = 80;
const CHARA07_FRAME_BACK_01 = 90;
const CHARA07_FRAME_BACK_02 = 91;
const CHARA07_FRAME_BACK_03 = 92;

const CHARA08_FRAME_FRONT_01 = 57;
const CHARA08_FRAME_FRONT_02 = 58;
const CHARA08_FRAME_FRONT_03 = 59;
const CHARA08_FRAME_LEFT_01 = 69;
const CHARA08_FRAME_LEFT_02 = 70;
const CHARA08_FRAME_LEFT_03 = 71;
const CHARA08_FRAME_RIGHT_01 = 81;
const CHARA08_FRAME_RIGHT_02 = 82;
const CHARA08_FRAME_RIGHT_03 = 83;
const CHARA08_FRAME_BACK_01 = 93;
const CHARA08_FRAME_BACK_02 = 94;
const CHARA08_FRAME_BACK_03 = 95;

// enchtnt.jsのデフォルト画像用　敵画像パス一覧
const ENEMY_ROOT_PATH = IMAGE_PATH + "enemy" + STRING_SLASH;
const BIGENEMY01_PATH = ENEMY_ROOT_PATH + "bigmonster1.gif";
const BIGENEMY02_PATH = ENEMY_ROOT_PATH + "bigmonster2.gif";
const ENEMY01_PATH = ENEMY_ROOT_PATH + "monster1.gif";
const ENEMY02_PATH = ENEMY_ROOT_PATH + "monster2.gif";
const ENEMY03_PATH = ENEMY_ROOT_PATH + "monster3.gif";
const ENEMY04_PATH = ENEMY_ROOT_PATH + "monster4.gif";
const ENEMY05_PATH = ENEMY_ROOT_PATH + "monster5.gif";
const ENEMY06_PATH = ENEMY_ROOT_PATH + "monster6.gif";
const ENEMY07_PATH = ENEMY_ROOT_PATH + "monster7.gif";

const BIGENEMY_WIDTH = 80;
const BIGENEMY_HEIGHT = 80;
const ENEMY_WIDTH = 48;
const ENEMY_HEIGHT = 48;

const BIGENEMY01_FRAME_DETH_01 = 0;
const BIGENEMY01_FRAME_DETH_02 = 1;
const BIGENEMY01_FRAME_MOVE_01 = 2;
const BIGENEMY01_FRAME_MOVE_02 = 3;
const BIGENEMY01_FRAME_MOVE_03 = 4;
const BIGENEMY01_FRAME_ATACK_01 = 5;
const BIGENEMY01_FRAME_ATACK_02 = 6;
const BIGENEMY01_FRAME_DAMAGE_01 = 7;
const BIGENEMY01_FRAME_DAMAGE_02 = 8;
const BIGENEMY01_FRAME_DEF_01 = 9;
const BIGENEMY01_FRAME_DEF_02 = 10;
const BIGENEMY01_FRAME_BRANK = 11;

const ENEMY01_FRAME_DETH_01 = 0;
const ENEMY01_FRAME_DETH_02 = 1;
const ENEMY01_FRAME_MOVE_01 = 2;
const ENEMY01_FRAME_MOVE_02 = 3;
const ENEMY01_FRAME_MOVE_03 = 4;
const ENEMY01_FRAME_ATACK_01 = 5;
const ENEMY01_FRAME_ATACK_02 = 6;
const ENEMY01_FRAME_DAMAGE_01 = 7;


//背景画像
const BACKGROUND_ROOT_PATH = IMAGE_PATH + "background" + STRING_SLASH;
const BATLE_GRND01_PATH = BACKGROUND_ROOT_PATH + "batle_grand01.gif";
const BATLE_GRAND_HEIGHT = 600;
const BATLE_GRAND_DEF_Y = 150;

// キャラクター立ち位置
const PLAYERSIDE_X = 480;
const ENEMYSIDE_X = 10;

const PARTY_01_X = PLAYERSIDE_X + 100;
const PARTY_01_Y = BATLE_GRAND_DEF_Y + 100;

const PARTY_02_X = PLAYERSIDE_X + 120;
const PARTY_02_Y = BATLE_GRAND_DEF_Y + 150;

const PARTY_03_X = PLAYERSIDE_X + 120;
const PARTY_03_Y = BATLE_GRAND_DEF_Y + 200;

const PARTY_04_X = PLAYERSIDE_X + 120;
const PARTY_04_Y = BATLE_GRAND_DEF_Y + 250;

const PARTY_05_X = PLAYERSIDE_X + 100;
const PARTY_05_Y = BATLE_GRAND_DEF_Y + 300;

//　敵立ち位置
const ENEMY_01_X = 100;
const ENEMY_01_Y = BATLE_GRAND_DEF_Y + 100;

const ENEMY_02_X = 350;
const ENEMY_02_Y = BATLE_GRAND_DEF_Y + 100;

const ENEMY_03_X = 350;
const ENEMY_03_Y = BATLE_GRAND_DEF_Y + 200;



/* グローバル変数 */
var game;
var actstructure = new Array();
actstructure = setActerStructure();

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


//メイン処理
window.onload = function(){

	//Gameクラスを取得、引数に値を渡すと画面サイズ変更可
	game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

	//変数宣言


	//画像読み出し
	preloadImages();

	//ゲーム開始時の処理
	game.onload = function(){

        //ターン数の記録
        var turnlog = 0;

		// ゲームの環境を変更する
		var scene = game.rootScene;

		scene.backgroundColor = "rgb(0, 255, 255)";
		//scene.background.image = game.assets[BATLE_GRND01_PATH];

		// 地面描画
		var bggrnd = new Sprite(SCREEN_WIDTH, BATLE_GRAND_HEIGHT);
		bggrnd.image = game.assets[BATLE_GRND01_PATH];
		bggrnd.y = BATLE_GRAND_DEF_Y;
		scene.addChild(bggrnd);

//		if(DEBUG_MODE == "1"){
//			//味方チーム(パーティ選択方法、パーティ情報をDBっぽく格納させる方法を考える)
//			//敵チーム(敵のパターンを決める関数と情報を格納させる方法を考えるが必要)
//			acter = [
//				{id:"0001", player:"1"},
//				{id:"0002", player:"1"},
//				{id:"0003", player:"1"},
//				{id:"0004", player:"1"},
//				{id:"0005", player:"1"},
//				{id:"1001", player:"0"},
//			];
//			var stop_cnt = 0;
//		}
//
//		//アクターの配列を敵味方毎
//		var cnt_p = 0;
//		var cnt_e = 0;
//		for(key in acter){
//			if(actoer[key]["player"] == "0"){
//				party[cnt_p] = new Array();
//				party[cnt_p] = actstructure["0001"]
//				party[cnt_p]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
//				party[cnt_p]["sprite"].image = game.assets[CHARA04A_PATH];
//				party[cnt_p]["sprite"].x = PARTY_01_X;
//				party[cnt_p]["sprite"].y = PARTY_01_Y;
//				party[cnt_p]["sprite"].frame = CHARA06_FRAME_LEFT_01;
//				cnt_p++;
//			}else if(actoer[key]["player"] == "1"){
//				enemy["1"] = new Array();
//				enemy["1"] = actstructure["1001"]
//				enemy["1"]["sprite"] = new Sprite(BIGENEMY_WIDTH, BIGENEMY_HEIGHT);
//				enemy["1"]["sprite"].image = game.assets[BIGENEMY02_PATH];
//				enemy["1"]["sprite"].x = ENEMY_01_X;
//				enemy["1"]["sprite"].y = ENEMY_01_Y;
//				enemy["1"]["sprite"].scaleX *= -1
//				enemy["1"]["sprite"].frame = BIGENEMY01_FRAME_DEF_02;
//				cnt_e++;
//			}
//
//		}

		var party = new Array();
		party["1"] = new Array();
		party["1"] = actstructure["0001"];
		party["1"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
		party["1"]["sprite"].image = game.assets[CHARA04A_PATH];
		party["1"]["sprite"].x = PARTY_01_X;
		party["1"]["sprite"].y = PARTY_01_Y;
		party["1"]["sprite"].frame = CHARA06_FRAME_LEFT_01;
//		turn[party["1"]["id"]] = new Array();
//		turn[party["1"]["id"]]["agl"] = party["1"]["agl"];

		scene.addChild(party["1"]["sprite"]);

		party["2"] = new Array();
		party["2"] = actstructure["0002"];
		party["2"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
		party["2"]["sprite"].image = game.assets[CHARA02C_PATH];
		party["2"]["sprite"].x = PARTY_02_X;
		party["2"]["sprite"].y = PARTY_02_Y;
		party["2"]["sprite"].frame = CHARA03_FRAME_LEFT_01;
//		turn[party["2"]["id"]] = new Array();
//		turn[party["2"]["id"]]["agl"] = party["2"]["agl"];
		scene.addChild(party["2"]["sprite"]);

		party["3"] = new Array();
		party["3"] = actstructure["0003"];
		party["3"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
		party["3"]["sprite"].image = game.assets[CHARA01B_PATH];
		party["3"]["sprite"].x = PARTY_03_X;
		party["3"]["sprite"].y = PARTY_03_Y;
		party["3"]["sprite"].frame = CHARA05_FRAME_LEFT_01;
//		turn[party["3"]["id"]] = new Array();
//		turn[party["3"]["id"]]["agl"] = party["3"]["agl"];
		scene.addChild(party["3"]["sprite"]);

		party["4"] = new Array();
		party["4"] = actstructure["0004"];
		party["4"]["sprite"] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
		party["4"]["sprite"].image = game.assets[CHARA01A_PATH];
		party["4"]["sprite"].x = PARTY_04_X;
		party["4"]["sprite"].y = PARTY_04_Y;
		party["4"]["sprite"].frame = CHARA06_FRAME_LEFT_01;
//		turn[party["4"]["id"]] = new Array();
//		turn[party["4"]["id"]]["agl"] = party["4"]["agl"];
		scene.addChild(party["4"]["sprite"]);

		party["5"] = new Array();
		party["5"] = actstructure["0005"];
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
		enemy["1"] = actstructure["1001"];
		enemy["1"]["sprite"] = new Sprite(BIGENEMY_WIDTH, BIGENEMY_HEIGHT);
		enemy["1"]["sprite"].image = game.assets[BIGENEMY02_PATH];
		enemy["1"]["sprite"].x = ENEMY_01_X;
		enemy["1"]["sprite"].y = ENEMY_01_Y;
		enemy["1"]["sprite"].scaleX *= -1;
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
			{id:party["1"]["id"], agl:party["1"]["agl"]},
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
			var act_structures = setActerStructure();
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
					curent;
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

function damageMath(to, from){

}

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

//プレイヤーのセット
function setPlayer(players){

}

//プレイヤースプライト一覧
//▼スプライト説明(使わない場合もダミーを入れる)
//1) フィールドフェーズ
//0000 : デフォルト	汎用
//0001 : フィールド	前
//0002 : フィールド	前移動
//0003 : フィールド	左
//0004 : フィールド	左移動
//0005 : フィールド	右
//0006 : フィールド	右移動
//0007 : フィールド	後
//0008 : フィールド	後移動

//2) バトルフェーズ
//1000 : バトル		汎用
//1001 : バトル		選択前待機ポーズ(ロマサガで言うコマンド選択時)
//1002 : バトル		選択前待機切り替え時(ロマサガで言うコマンド選択前の回転)
//1003 : バトル		選択後待機ポーズ1(ロマサガで言う物理選択時)
//1004 : バトル		選択後待機ポーズ2(ロマサガで言う魔法選択時)
//1005 : バトル		選択後待機ポーズ3(ロマサガで言う防御選択時)
//1006 : バトル		待機切り替え時(ロマサガで言うコマンド選択後の回転)
//1007 : バトル		行動前(ロマサガで言う技名を言うところ)
//1008 : バトル		行動中1(ロマサガで言うの物理攻撃)
//1009 : バトル		行動中2(ロマサガで言うの魔法攻撃)
//1010 : バトル		行動中3(ロマサガで言う防御)
//1011 : バトル		行動中後
//1012 : バトル		ダメージ受けポーズ
//1013 : バトル		ダメージ受け中
//1014 : バトル		瀕死
//1015 : バトル		戦闘不能

//3) ウィンドウ(必要？)
//2000 : サムネイル()	汎用
//2001 : サムネイル()	喜
//2002 : サムネイル()	怒
//2003 : サムネイル()	哀
//2004 : サムネイル()	楽

//スプライト管理は後で


//陣形　構造
//id 		管理番号
//0000 ～ 0999　プレイヤーの陣形
//1000 ～ 1999　敵陣形
//
//name 		陣形名
//number 	必要人数
//lock		使用可能フラグ
//position	アクターの配置と付与効果

function structuerFormation(target){

	var lists = new Array();

	//フリーファイター
	lists['0001'] = new Array();
	lists['0001']['name'] = "フリーファイター";
	lists['0001']['number'] = 5;
	lists['0001']['lock'] = "0";
	lists['0001']['position'] = new Array();
	lists['0001']['position']["01"] = new Array();
	lists['0001']['position']["01"]["display_flg"] = "1";
	lists['0001']['position']["01"]["X"] = "40";
	lists['0001']['position']["01"]["Y"] = "0";
	lists['0001']['position']["01"]["atk"] = 0;
	lists['0001']['position']["01"]["agl"] = 20;
	lists['0001']['position']["01"]["def"] = 0;

	lists['0001']['position']["02"] = new Array();
	lists['0001']['position']["02"]["display_flg"] = "1";
	lists['0001']['position']["02"]["X"] = "30";
	lists['0001']['position']["02"]["Y"] = "50";
	lists['0001']['position']["02"]["atk"] = 0;
	lists['0001']['position']["02"]["agl"] = 20;
	lists['0001']['position']["02"]["def"] = 0;

	lists['0001']['position']["03"] = new Array();
	lists['0001']['position']["03"]["display_flg"] = "1";
	lists['0001']['position']["03"]["X"] = "30";
	lists['0001']['position']["03"]["Y"] = "100";
	lists['0001']['position']["03"]["atk"] = 0;
	lists['0001']['position']["03"]["agl"] = 20;
	lists['0001']['position']["03"]["def"] = 0;

	lists['0001']['position']["04"] = new Array();
	lists['0001']['position']["04"]["display_flg"] = "1";
	lists['0001']['position']["04"]["X"] = "30";
	lists['0001']['position']["04"]["Y"] = "150";
	lists['0001']['position']["04"]["atk"] = 0;
	lists['0001']['position']["04"]["agl"] = 20;
	lists['0001']['position']["04"]["def"] = 0;

	lists['0001']['position']["05"] = new Array();
	lists['0001']['position']["05"]["display_flg"] = "1";
	lists['0001']['position']["05"]["X"] = "40";
	lists['0001']['position']["05"]["Y"] = "200";
	lists['0001']['position']["05"]["atk"] = 0;
	lists['0001']['position']["05"]["agl"] = 20;
	lists['0001']['position']["05"]["def"] = 0;

	//敵　フォーメーション(並び)

	if(target){
		$lists = lists[target];
	}

}

// アクター　構造(デフォルト設定、以降)
//id 		管理番号
//0000 ～ 0999　プレイヤー
//1000 ～ 1999　敵
//2000 ～ 2999　非戦闘員(街の人)
//
//name 		名前
//level 	レベル
//sprite	スプライト
//job		職業
//sex		性別
//race		種族
//death		死亡フラグ
//atk		物理攻撃力
//def       物理防御力
//int		魔法攻撃力
//mgr	    魔法物理力
//agl		速さ
//hp		耐久力
//mp		魔法力
//luck		幸運
//technique		スキル
//arms		装備：武器
//guard		装備：防具

function setActerStructure(target) {

	var lists = new Array();

	//プレイヤー
	lists = new Array();

	lists["0001"] = new Array();
	lists["0001"]["name"] = "プレイヤー１";

	lists["0001"]["level"] = 0;
	lists["0001"]["id"] = "0001";
	lists["0001"]["sprite"] = "0001";
	lists["0001"]["job"] = "00";
	lists["0001"]["sex"] = "0";
	lists["0001"]["race"] = "0";
	lists["0001"]["death"] = "0";
	lists["0001"]["atk"] = 1;
	lists["0001"]["def"] = 0;
	lists["0001"]["int"] = 0;
	lists["0001"]["mgr"] = 0;
	lists["0001"]["agl"] = 1;
	lists["0001"]["hp"] = 100;
	lists["0001"]["mp"] = 0;
	lists["0001"]["luck"] = 0;
	lists["0001"]["technique"] = "0000";
	lists["0001"]["arms"] = "0000";
	lists["0001"]["guard"] = "0000";

	lists["0002"] = new Array();
	lists["0002"]["id"] = "0002";
	lists["0002"]["name"] = "プレイヤー２";
	lists["0002"]["level"] = 0;
	lists["0002"]["sprite"] = "0001";
	lists["0002"]["job"] = "00";
	lists["0002"]["sex"] = "0";
	lists["0002"]["race"] = "0";
	lists["0002"]["death"] = "0";
	lists["0002"]["atk"] = 1;
	lists["0002"]["def"] = 0;
	lists["0002"]["int"] = 0;
	lists["0002"]["mgr"] = 0;
	lists["0002"]["agl"] = 2;
	lists["0002"]["hp"] = 100;
	lists["0002"]["mp"] = 0;
	lists["0002"]["luck"] = 0;
	lists["0002"]["technique"] = "0000";
	lists["0002"]["arms"] = "0000";
	lists["0002"]["guard"] = "1000";

	lists["0003"] = new Array();
	lists["0003"]["id"] = "0003";
	lists["0003"]["name"] = "プレイヤー３";
	lists["0003"]["level"] = 0;
	lists["0003"]["sprite"] = "0001";
	lists["0003"]["job"] = "00";
	lists["0003"]["sex"] = "1";
	lists["0003"]["race"] = "1";
	lists["0003"]["death"] = "0";
	lists["0003"]["atk"] = 1;
	lists["0003"]["def"] = 0;
	lists["0003"]["int"] = 0;
	lists["0003"]["mgr"] = 0;
	lists["0003"]["agl"] = 0;
	lists["0003"]["hp"] = 100;
	lists["0003"]["mp"] = 0;
	lists["0003"]["luck"] = 0;
	lists["0003"]["technique"] = "0000";
	lists["0003"]["arms"] = "0000";
	lists["0003"]["guard"] = "1000";

	lists["0004"] = new Array();
	lists["0004"]["id"] = "0004";
	lists["0004"]["name"] = "プレイヤー４";
	lists["0004"]["level"] = 0;
	lists["0004"]["sprite"] = "0001";
	lists["0004"]["job"] = "00";
	lists["0004"]["sex"] = "1";
	lists["0004"]["race"] = "1";
	lists["0004"]["death"] = "0";
	lists["0004"]["atk"] = 1;
	lists["0004"]["def"] = 0;
	lists["0004"]["int"] = 0;
	lists["0004"]["mgr"] = 0;
	lists["0004"]["agl"] = 0;
	lists["0004"]["hp"] = 100;
	lists["0004"]["mp"] = 0;
	lists["0004"]["luck"] = 0;
	lists["0004"]["technique"] = "0000";
	lists["0004"]["arms"] = "0000";
	lists["0004"]["guard"] = "1000";

	lists["0005"] = new Array();
	lists["0005"]["id"] = "0005";
	lists["0005"]["name"] = "プレイヤー５";
	lists["0005"]["level"] = 0;
	lists["0005"]["sprite"] = "0001";
	lists["0005"]["job"] = "00";
	lists["0005"]["sex"] = "2";
	lists["0005"]["race"] = "1";
	lists["0005"]["death"] = "0";
	lists["0005"]["atk"] = 1;
	lists["0005"]["def"] = 0;
	lists["0005"]["int"] = 0;
	lists["0005"]["mgr"] = 0;
	lists["0005"]["agl"] = 4;
	lists["0005"]["hp"] = 100;
	lists["0005"]["mp"] = 0;
	lists["0005"]["luck"] = 0;
	lists["0005"]["technique"] = "0000";
	lists["0005"]["arms"] = "0000";
	lists["0005"]["guard"] = "1000";

	//敵
	lists["1001"] = new Array();
	lists["1001"]["id"] = "1001";
	lists["1001"]["name"] = "モンスター１";
	lists["1001"]["level"] = 1;
	lists["1001"]["sprite"] = "1001";
	lists["1001"]["job"] = "00";
	lists["1001"]["sex"] = "0";
	lists["1001"]["race"] = "0";
	lists["1001"]["death"] = "0";
	lists["1001"]["atk"] = 1;
	lists["1001"]["def"] = 0;
	lists["1001"]["int"] = 0;
	lists["1001"]["mgr"] = 0;
	lists["1001"]["agl"] = 0;
	lists["1001"]["hp"] = 50;
	lists["1001"]["mp"] = 0;
	lists["1001"]["luck"] = 0;
	lists["1001"]["technique"] = "0000";
	lists["1001"]["arms"] = "0000";
	lists["1001"]["guard"] = "0000";

	//非戦闘員は特に無し
	return lists;

}

//連想配列を指定したkeyで並び替える
// hash  : 対象の連想配列
// key 　: 並び替えのキー
// order : 並び替えの昇順(1)、降順(-1)
function turnSort(hash, key, order){
	hash.sort(function(a, b){

		var aName = a[key];
		var bName = b[key];

		if(aName < bName){
			return order * -1;
		}else if(aName > bName){
			return order * 1;
		}else{
			return 0;
		};

	});
	return hash;
}

//アタックフェーズ
// attacker : 攻撃する人
// attackskil : 攻撃する人の技
// defenders : 守備をする人(複数人)
function attackphase(attacker, attackskil, defenders){

    //ターゲットの配列取得
    var array = setTargetarray(defenders);
    var target = setTarget(defenders, "");
    var defender = "";

    //攻撃のスキル選択
    //※ただし今回は決め打ちなので無視
    //var attack();

}

//技　構造
// id : 識別用id
// name : 技名
// filed : フィールドでの仕様可否 0:不可, 1：可能
// batele : バトルでの仕様可否 0:不可, 1：可能
// target : 対象(ユーザーが選択したらそっちを優先):0:味方, 1:敵
// target_type : 0:個人, 1:全体, 2:ランダム
// count : 0～255 行動回数
// accuracy : 0～100(必中) 命中率
// atk : 攻撃力変動値 -255～255
// def : 守備力変動値 -255～255
// int : 魔法攻撃変動値 -255～255
// mgr : 魔法防御変動値 -255～255
// agl : 素早さ変動値 -255～255
// hp : 体力変動値 -9999～9999 :
// mp : 魔法力変動値 -9999～9999
// luck : 幸運 0～255
// batle_type : バトルフェーズ、技の属性 0:攻撃,　1:守備
// batle_attack : バトルフェーズ、攻撃イベントに進む 0:攻撃する　1:攻撃しない
// batle_timing : 0:実行前, 1：実行中(デフォルト), 2:実行後,
// batle_turn : 有効ターン 0:そのターンのみ(攻撃系は恐らくこれ), 1～255 指定ターン継続

function setActerSkil(target){

	var lists = new Array();

    //攻撃系
	lists = new Array();
	lists["0000"] = new Array();
	lists["0000"]["name"] = "基本攻撃";
    lists["0000"]["filed"] = 0;
    lists["0000"]["batele"] = 1;
    lists["0000"]["target"] = 1;
    lists["0000"]["target_type"] = 0;
    lists["0000"]["count"] = 1;
    lists["0000"]["accuracy"] = 80;
    lists["0000"]["atk"] = 0;
	lists["0000"]["def"] = 0;
	lists["0000"]["int"] = 0;
	lists["0000"]["mgr"] = 0;
	lists["0000"]["agl"] = 0;
	lists["0000"]["hp"] = 0;
	lists["0000"]["mp"] = 0;
	lists["0000"]["luck"] = 0;
	lists["0000"]["batle_type"] = 0;
	lists["0000"]["batle_attack"] = 0;
	lists["0000"]["batle_timing"] = 1;
	lists["0000"]["batle_turn"] = 0;

    //味方パラメータ変更系(予定)
	lists["1000"] = new Array();
	lists["1000"]["name"] = "指揮向上";
    lists["1000"]["filed"] = 0;
    lists["1000"]["batele"] = 1;
    lists["1000"]["target"] = 0;
    lists["1000"]["target_type"] = 0;
    lists["1000"]["count"] = 1;
    lists["1000"]["accuracy"] = 100;
    lists["1000"]["atk"] = 10;
	lists["1000"]["def"] = 0;
	lists["1000"]["int"] = 0;
	lists["1000"]["mgr"] = 0;
	lists["1000"]["agl"] = 0;
	lists["1000"]["hp"] = 0;
	lists["1000"]["mp"] = 0;
	lists["1000"]["luck"] = 0;
	lists["1000"]["batle_type"] = 0;
	lists["1000"]["batle_attack"] = 0;
	lists["1000"]["batle_timing"] = 1;
	lists["1000"]["batle_turn"] = 3;

    //敵パラメータ変更系(予定)
	lists["2000"] = new Array();
	lists["2000"]["name"] = "指揮低下";
    lists["2000"]["filed"] = 0;
    lists["2000"]["batele"] = 1;
    lists["2000"]["target"] = 1;
    lists["2000"]["target_type"] = 1;
    lists["2000"]["count"] = 1;
    lists["2000"]["accuracy"] = 100;
    lists["2000"]["atk"] = -10;
	lists["2000"]["def"] = -10;
	lists["2000"]["int"] = -10;
	lists["2000"]["mgr"] = -10;
	lists["2000"]["agl"] = -10;
	lists["2000"]["hp"] = 0;
	lists["2000"]["mp"] = 0;
	lists["2000"]["luck"] = 0;
	lists["2000"]["batle_type"] = 0;
	lists["2000"]["batle_attack"] = 0;
	lists["2000"]["batle_timing"] = 1;
	lists["2000"]["batle_turn"] = 3;

    //バトルフェーズ守備系
	lists["3000"] = new Array();
	lists["3000"]["name"] = "防御";
    lists["3000"]["filed"] = 0;
    lists["3000"]["batele"] = 1;
    lists["3000"]["target"] = 1;
    lists["3000"]["target_type"] = 1;
    lists["3000"]["count"] = 1;
    lists["3000"]["accuracy"] = 100;
    lists["3000"]["atk"] = 0;
	lists["3000"]["def"] = 10;
	lists["3000"]["int"] = 0;
	lists["3000"]["mgr"] = 0;
	lists["3000"]["agl"] = 0;
	lists["3000"]["hp"] = 0;
	lists["3000"]["mp"] = 0;
	lists["3000"]["luck"] = 0;
	lists["3000"]["batle_type"] = 1;
	lists["3000"]["batle_attack"] = 0;
	lists["3000"]["batle_timing"] = 1;
	lists["3000"]["batle_turn"] = 0;

    //バトルフェーズ反撃系(予定)
	lists["3001"] = new Array();
	lists["3001"]["name"] = "反撃";
    lists["3001"]["filed"] = 0;
    lists["3001"]["batele"] = 1;
    lists["3001"]["target"] = 1;
    lists["3001"]["target_type"] = 1;
    lists["3001"]["count"] = 1;
    lists["3001"]["accuracy"] = 50;
    lists["3001"]["atk"] = 0;
	lists["3001"]["def"] = -10;
	lists["3001"]["int"] = 0;
	lists["3001"]["mgr"] = 0;
	lists["3001"]["agl"] = 0;
	lists["3001"]["hp"] = 0;
	lists["3001"]["mp"] = 0;
	lists["3001"]["luck"] = 0;
	lists["3001"]["batle_type"] = 1;
	lists["3001"]["batle_attack"] = 1;
	lists["3001"]["batle_timing"] = 2;
	lists["3001"]["batle_turn"] = 0;

    return lists;

}

//ターゲット選択用の配列作成
// members : パーティのストラクチャデータ(連想配列)
function setTargetarray(members){

	//ベルト作成
	var result = new Array();
	for(key in members){
		if(members[key]["death"] == "1") continue;
		for(i=0; i<members[key]["probability"]; i++){
			result.push = (members[key]["id"]);
		};
	};

	return result;

}

//攻撃のためパラメータを変動
//attackerからdefenderに攻撃を加える
//
function attack(attacker, defender){

    var damage = 0;

	//target設定
	damage = attacker["atk"] - defender["def"];

	//パラメータ計算
    setParameta;

}


//ターゲット選択
// array 	keyが連番の連想配列
// option 	ターゲットの確率を変動させる要因(未定)
//
// 130529
// 課題：一行で出来るが確率の要素を変動させられるように変更したい

function setTarget(array, option){

	var parameter;
	var target = "";
	var result;

	//母数決定
	parameter = array.length;

	//乱数
	target = Math.floor( Math.random() * parameter );

	return target;

}



//パラメータ変更
// actoer : 対象キャラクタのデータストラクチャ
// parameter : 変更するデータ。下記の情報をkeyにして変更する値を渡す。引く場合はマイナスを付ける
//  level
//  sprite
//  job
//  sex
//  race
//  death
//  atk
//  def
//  int
//  mgr
//  agl
//  hp
//  mp
//  luck
//  technique
//  arms
//  guard
//
// 13/05/29
// 課題：パラメータのストラクチャ用意(上限、下限、データ型等の禁止事項を省くため)
//	 パラメータのリスト用意(jobやら何やら決められた値が入ってしまった場合等の処理)、
//	 ただしストラクチャにリスト入れても良い
// 	 一時的なものだけであれば問題ないが、今後、DB機能(xml等のファイルベースでもOK)を考えると、
//	 targetの変数を元にSQL文(xml文)の発行が欲しい。
//	 (…いや、流し込み別関数でも良い。)


function setParameta(target, paramets){

	//初期値を設定
	var result = new Array();
	result = target;

	console.dir(paramets);


	//key毎にパラメータを変動
	for(key in paramets){

		switch (key){
		case "level":
			result["level"] = target["level"] + paramets[key];
			break;

		case "job":
			result["job"] = paramets[key];
	    		break;

		case "sex":
	    		result["sex"] = paramets[key];
			break;

		case "race":
	    		result["race"] = paramets[key];
			break;

		case "death":
	    		result["death"] = paramets[key];

			//死亡時はhpを0にする。
			if(result["death"] == "1"){
				result["hp"] = 0;
			}

			break;

		case "atk":
			result["atk"] = target["atk"] + paramets[key];
			break;

		case "def":
			result["def"] = target["def"] + paramets[key];
			break;

		case "mgr":
			result["mgr"] = target["mgr"] + paramets[key];
			break;

		case "int":
			result["int"] = target["int"] + paramets[key];
			break;


		case "agl":
			result["agl"] = target["agl"] + paramets[key];
			break;

		case "hp":
			result["hp"] = target["hp"] + paramets[key];

			//死亡判定
			if(result["hp"] >= 0){
				result["death"] = "1";
			}
			break;

		case "mp":
			result["mp"] = target["mp"] + paramets[key];
			break;

		case "luck":
			result["luck"] = target["luck"] + paramets[key];
			break;

		case "technique":
			result["technique"] = paramets[key];
			break;

		case "arms":
	    		result["arms"] = paramets[key];
			break;

		case "guard":
	    		result["guard"] = paramets[key];
			break;

		defult:
			result[key] = target[key];

		}
	};

	return result;
}

//0まるめ
function setZero(target){

	if(typeof(target) != "number"){
		cosole.error(target + ":setZeroで入れた引数が数値型じゃないッス");
		return target;
	};

	if(target <= 0){
		return 0;
	}else{
		return target;
	};

}

//地形データ

