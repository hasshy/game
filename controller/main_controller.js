/**************************************************************************
 * author   : hasshy
 * Create   : 2013/05/21
 * Update   : 2013/06/09
 * Description : 共通ファイル
 **************************************************************************/
//クラスセット
var mainmodel = new mainmodel();
var util = new coUtil();

//テスト用データ
var userdate = mainmodel.classUserDate;
var party = mainmodel.classParty;

userdate["id"] = "0000000000000001";
userdate["username"] = "テストユーザー";
userdate["thamename"] = "チーム名";

party["leader"] = "0001";
party["member1"] = "0002";
party["member2"] = "0003";
party["member3"] = "0004";
party["member4"] = "0005";
party["formation"] = "0001";

//ゲーム進行
window.onload = function(){



    //ストラクチャをセット
    var actoer = mainmodel.setActerStructure;
    var formation = mainmodel.setFormationStructure;
    var skil = mainmodel.setSkilStructure;

    //model←ユーザーの基本情報取得
    date_def = mainmodel.setActerStructure();

    //model←ユーザーの基本情報分解、チームメンバー情報取得
    party = mainmodel.setActerStructure();

    //model←陣形毎にキャラクターのパラメータを変更させる

    //viwe←取得したキャラクタを指定した位置に取得
    startSeting();

    //contolrer



};

function damageMath(to, from){

}


//プレイヤーのセット
function setPlayer(players){

}


//アタックフェーズ
// attacker : 攻撃する人
// attackskil : 攻撃する人の技
// defenders : 守備をする人(複数人)
function attackphase(attacker, attackskil, defenders){

    //ターゲットの配列取得
    var array = setTargetarray(defenders);
    var target = setTarget(defenders, "")
    var defender = "";

    //攻撃のスキル選択
    //※ただし今回は決め打ちなので無視
    //var attack();

}

//攻撃のためパラメータを変動
//attackerからdefenderに攻撃を加える
function attack(attacker, defender){

    var damage = 0;

	//target設定
	damage = attacker["atk"] - defender["def"];

	//パラメータ計算
    setParameta

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

//地形データ

