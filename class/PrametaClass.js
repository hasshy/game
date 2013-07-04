/**************************************************************************
 * author   : hasshy
 * Create   : 2013/06/10
 * Update   : 2013/06/10
 * Description : パラメータ系で特殊な事をやるときに使用するクラス
 **************************************************************************/
function parameta() {

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
    // 課題：パラメータの規制(上限、下限、データ型等の禁止事項を省くため)
    //	 パラメータのリスト用意(jobやら何やら決められた値が入ってしまった場合等の処理)、
    //	 ただしストラクチャにリスト入れても良い
    // 	 一時的なものだけであれば問題ないが、今後、DB機能(xml等のファイルベースでもOK)を考えると、
    //	 targetの変数を元にSQL文(xml文)の発行が欲しい。
    //	 (…いや、流し込み別関数でも良い。)

    this.setParameta = function(target, paramets) {

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
    };

}
