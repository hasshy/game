/**************************************************************************
 * author   : hasshy
 * Create   : 2013/07/02
 * Update   : 2013/07/02
 * Description : バトル関連のモデル
 * memo		: 現在はユーザーインターフェースの表示処理も混ぜているがそのうち分けたい。
 **************************************************************************/

enchant();

function batlemodel(){

	//◆ログファイルを作成
	//引数 : default 追加される元のログ
	//		 mesages 追加するメッセージ(配列)
	//			第1引数　メッセージケース
	//		 	第2引数	 メッセージの主要人物
	//       	第3引数　メッセージ対象(allと入力された場合は全員と表示)
	//
	this.writeLog = function(){

	};

	//陣形情報位置(x、y)、付加効果の追加
	//引数 : membars　対象のチーム
	//		 formation　陣形
	//
	this.setingFormation = function(membars, formation){

	};

	//地形情報付加
	//引数：key 地形のkey
	this.setingField = fuction(key){

	};

	//陣形の情報付与
	//引数 : key　陣形
	//		 paramate　陣形
	//
	this.setingFormation = function(key, membars){

	};

	//ダメージ計算変動
	//引数 : attacker　攻撃側
	//		 defender　防御側
	//
	this.damageMath(attacker, defender){

	    var damage = 0;

		//target設定
		damage = attacker["atk"] - defender["def"];

		return damage;

	};

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

}
