/**************************************************************************
 * author   : hasshy
 * Create   : 2013/06/10
 * Update   : 2013/06/10
 * Description : ゲームの汎用関数
 **************************************************************************/
var util_game = new coUtil();

function game() {

    //ターゲットを元に配列作成
    // targets : 配列に入れるストラクチャ(連想配列)
    // key  :    キーにする文字(デフォルトはid)
    // options : 特殊ルール
    //           probability    1:targetsのパラメータ内にprobabilityが有り、且つ数値が入っている場合はその数だけ配列に詰める, 値が無ければ0とみなす
    //                          それ以外:ルール不適用
    //           death          1:targetsのパラメータ内にdeathが有り、且つ1なら配列に詰めない
    //                          それ以外:ルール不適用
    this.getTargetArray = function(targets, key, options){

        // keyの初期化
        if(key == ""){
            key = "id";
        }

        // optionの初期化
        defoptions = new Array();
        defoptions["probability"] = "";
        defoptions["death"] = "";
        //　optionの結合
        options = util._array_merge(defoptions, options);

        //配列作成
        var result = new Array();
        for(key in targets){

            //デスフラグ
            if(options["death"] == "1" && members[key]["death"] == "1") continue;

            //確率付与
            if(options["probability"]){
                for(i=0; i<members[key]["probability"]; i++){
                    result.push = (members[key]["id"]);
                }
            }else{
                result.push = (members[key]["id"]);
            };
        };

        return result;

    };

}
