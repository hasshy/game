/**************************************************************************
 * author   : hasshy
 * Create   : 2013/05/21
 * Update   : 2013/06/09
 * Description : 戦闘シーン表示制御クラス
 **************************************************************************/
//=============================
//　●enchantクラス読み込み
//=============================
enchant();

var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
var scene = game.rootScene;
var sprites = new Array();

function batleview(){

	//背景を設置する
	//引数: backcoler sceneカラー、配列で表示
	//		y 表示位置、縦
	//		image キャラクタイメージ
	this.viewFiled = function(grund){

        var bggrnd = new Sprite(SCREEN_WIDTH, BATLE_GRAND_HEIGHT);
        bggrnd.image = game.assets[BATLE_GRND01_PATH];
        bggrnd.y = grund["y"];
        scene.addChild(bggrnd);

	};

	//フィールド上にキャラクタを表示させる
	//引数: membar
	this.viewChar = function(membar){
		for(key in membar) {
            //暫定版　改良の余地が大いにあり
		    sprite[key] = new Sprite(CHARA_WIDTH, CHARA_HEIGHT);
		    sprite[key].image = game.assets[CHARA04A_PATH];
		    sprite[key].x = membar[key][x];
		    sprite[key].y = membar[key][y];
		    sprite[key].frame = membar["frame"]["default"];
			scene.addChild(sprite[key]);
        };
	};


	//◆陣形選択メニューウィンドウ表示
	//引数： x 表示位置
	//		 y 表示位置
	//		image ウィンドウイメージ
	//		message デフォルトで表示する
	this.viewMsgWindow = function(x, y, image, message){

	};

	//◆メッセージ送り
	//引数： message メッセージ
	//		 curent 表示する箇所
	this.viewMsgWindow = function(message, curent){

	};

}