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
    maindate = mainmodel.setActerStructure();

    //model←ユーザーの基本情報分解、チームメンバー情報取得
    members = mainmodel.setActerStructure(maindate["membars"]);

    //model←戦闘するフィールド設定
    field = batlemodel.setingField(maindate["filed"]);

    //model←陣形毎にキャラクターのパラメータを変更させる
    members = batlemodel.setingFormation(1, members);

    //model←敵パターン取得
    enemies = batlemodel.setingFormation(1, members);


    //viwe←背景を描画する
    viewFiled(field);

    //viwe←取得したキャラクタを指定した位置に取得
    viewChar(members);

};

