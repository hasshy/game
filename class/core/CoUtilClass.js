/**************************************************************************
 * author   : hasshy
 * Create   : 2013/06/10
 * Update   : 2013/06/10
 * Description : 共通　汎用関数作成
 **************************************************************************/
function coUtil() {

    //数字を負の数にしないで0にする
    //引数：数値
    //
    //戻り値
    //0以上:引数をそのまま返す
    //0未満(-1以下):0を返す
    //数値型でない：falseを返す
    this.getZero = function(target){

        if(typeof(target) != "number"){
            cosole.error(target + ":setZeroで入れた引数が数値型じゃないッス");
            return false;
        };

        if(target <= 0){
            return 0;
        }else{
            return target;
        };

    };

    //連想配列を指定したkeyで並び替える
    // hash  : 対象の連想配列
    // key 　: 並び替えのキー
    // order : 並び替えの昇順(1)、降順(-1)
    this.turnSort = function(hash, key, order){
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

    //配列の結合(未完成)
    //arr1      マージの基準
    //arr2      マージする配列
    this._array_merge = function(arr1, arr2){
        for(key in arr2){
            arr1[key] = arr2[key];
        };
        return arr1[key];
    };


};
