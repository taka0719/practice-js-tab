(() => {

  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
	const $content = $tab.querySelectorAll("[data-content]");
	const ACTIVE_CLASS = 'is-active';
	const navLen = $nav.length;

	//初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

	//クリックしたら起こるイベント
  const handleClick = (e) => {
		e.preventDefault();

		//対象外のnav,contentを全てリセットする
		let index = 0;
		while (index < navLen){
			$content[index].style.display = 'none';
			$nav[index].classList.remove(ACTIVE_CLASS);
			index++;
		}

		//どの要素をクリックしたかをピンポイントでとってくる
		const $this = e.target;
		//data属性をピンポイントでとってくる
		const targetVal = $this.dataset.nav;
		//対応したコンテンツをアクティブ化する
		$tab.querySelectorAll('[data-content = "' + targetVal + '"]')[0].style.display = 'block';
		$nav[targetVal].classList.add(ACTIVE_CLASS);
	};
	
	//全navに対して関数を適用・発火
	let index = 0;
	while (index < navLen){
		$nav[index].addEventListener('click', (e) => handleClick(e));
		index++;
	}

})();
