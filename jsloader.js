/**************************************************************************
 * author   : hasshy
 * Create   : 2013/06/09
 * Update   : 2013/06/09
 * Description : ファイル読み込み
 **************************************************************************/

var metaLoader = {

	conf : {
		loader : "jsloader.js",
        loadJS : ["enchant.js"],
		configJS : ["init.js", "main_config.js", "fream.js", "batle_config.js",],
        modelJS : ["default_model.js","main_model.js"],
        controllerJS : ["default_controller.js","main_controller.js"],
        viewJS : ["default_view.js","main_view.js"],
        classJS : ["PrametaClass.js", "GameClass.js"],
        coclassJS : ["CoFileClass.js", "CoGameClass.js", "CoMathClass.js", "CoUtilClass.js", "CoValidateClass.js"]
	},

	main : function(){

        //scriptタグを取得
        var script = document.getElementsByTagName("script");

        //ページ内のスクリプトタグを繰り返す
		for(var i=0;i<script.length;i++){
            //scriptのタグに記入があり、尚且つ、上記で指定したconf→loaderが一致する
			if(script[i].getAttribute("src") && script[i].getAttribute("src").match(metaLoader.conf.loader)){

                //ディレクトリを取得
				var prefix = metaLoader.dirname(script[i].src);

                //カレントディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.loadJS.length; i++) {
					document.write('<script type="text/javascript" src="' + prefix + '/' + metaLoader.conf.loadJS[i] + '"></script>');
				}


                //Modelディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.modelJS.length; i++) {
					document.write('<script type="text/javascript" src="' + prefix + '/model/' + metaLoader.conf.modelJS[i] + '"></script>');
				}

                //viewディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.viewJS.length; i++) {
					document.write('<script type="text/javascript" src="' + prefix + '/view/' + metaLoader.conf.viewJS[i] + '"></script>');
				}

                //coclassディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.coclassJS.length; i++) {
                    document.write('<script type="text/javascript" src="' + prefix + '/class/core/' + metaLoader.conf.coclassJS[i] + '"></script>');
				}


                //configディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.configJS.length; i++) {
					document.write('<script type="text/javascript" src="' + prefix + '/config/' + metaLoader.conf.configJS[i] + '"></script>');
				}


                //controllerディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.controllerJS.length; i++) {
					document.write('<script type="text/javascript" src="' + prefix + '/controller/' + metaLoader.conf.controllerJS[i] + '"></script>');
				}

                //classディレクトリごとにデータ取得
				for(var i = 0; i < metaLoader.conf.classJS.length; i++) {
					document.write('<script type="text/javascript" src="' + prefix + '/class/' + metaLoader.conf.classJS[i] + '"></script>');
				}

			break;
			}
		}
	},

	dirname : function(path) {
		return path.substring(0, path.lastIndexOf('/'));
	}

};

metaLoader.main();