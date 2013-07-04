/**************************************************************************
 * author   : hasshy
 * Create   : 2013/05/21
 * Update   : 2013/06/09
 * Description : 共通ファイル
 **************************************************************************/

function mainmodel(){

    //ゲームユーザーストラクチャ
    // id           ユーザーid
	// ※今後ログイン情報を付与する際に使用する予定。
	//

    this.setUserDate = function(){
        var lists = new Array();
        lists["id"] = "0000000000000001";
    }

    //パーティクラス　
    // leader       リーダーのid
    // member1      メンバー1のid
    // member2      メンバー2のid
    // member3      メンバー3のid
    // member4      メンバー4のid
    // formation    陣形のid
    this.setParty = function(){

        var lists = new Array()
        var lists = {
            leader:"",
            member1:"",
            member2:"",
            member3:"",
            member4:"",
            formation:""
        };
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

    this.setActerStructure = function() {
        var lists = new Array();
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


        return lists;
    };

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
    // luck : 幸運 -255～255
    // batle_type : バトルフェーズ、技の属性 0:攻撃,　1:守備
    // batle_attack : バトルフェーズ、攻撃イベントに進む 0:攻撃する　1:攻撃しない
    // batle_timing : 0:実行前, 1：実行中(デフォルト), 2:実行後,
    // batle_turn : 有効ターン 0:そのターンのみ(攻撃系は恐らくこれ), 1～255 指定ターン継続

    this.setActerSkil = function() {

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


    //陣形　構造
    //id 		管理番号
    //0000 ～ 0999　プレイヤーの陣形
    //1000 ～ 1999　敵陣形
    //
    //name 		陣形名
    //number 	必要人数
    //lock		使用可能フラグ
    //position	アクターの配置と付与効果

    this.setFormation = function() {

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
        lists['0001']['position']["02"]["X"] = "60";
        lists['0001']['position']["02"]["Y"] = "50";
        lists['0001']['position']["02"]["atk"] = 0;
        lists['0001']['position']["02"]["agl"] = 20;
        lists['0001']['position']["02"]["def"] = 0;

        lists['0001']['position']["03"] = new Array();
        lists['0001']['position']["03"]["display_flg"] = "1";
        lists['0001']['position']["03"]["X"] = "60";
        lists['0001']['position']["03"]["Y"] = "100";
        lists['0001']['position']["03"]["atk"] = 0;
        lists['0001']['position']["03"]["agl"] = 20;
        lists['0001']['position']["03"]["def"] = 0;

        lists['0001']['position']["04"] = new Array();
        lists['0001']['position']["04"]["display_flg"] = "1";
        lists['0001']['position']["04"]["X"] = "60";
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

        return lists;

    }

    //スプライト　構造
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

    //スプライト管理は後回し

}


