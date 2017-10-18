console.log('Hello World'); //テスト用

// jQueryの動作チェック
// $(document).ready(function () {
// 	$('body').html('<p>jQueryの動作チェック</p>');
// });

// brand logo
$(document).ready(function() {
	$('.inner').hide().fadeIn(2000);
	$('#logo').hide().fadeIn(3000);
});

// ナビゲーションボタン
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

// 上に戻るボタン
$(function () {
	// 上に戻るボタンの初期化
	var topBtn = $('#scrollTop');
	topBtn.hide();
	// ある程度スクロールしたらボタン表示
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();  //フェードアウトで非常時
		}
	});
	// クリックで上に戻るボタン
	topBtn.click(function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0
		},500);
	});
});

// スムーススクロール
$(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }

  //通常のクリック時
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
})
