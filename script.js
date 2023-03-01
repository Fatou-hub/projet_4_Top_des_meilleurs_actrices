$(function(){
	
	var $mainMenuItems = $("#main-menu ul").children("li"), //on va d'abord déclarer nos variables pôur ensuite capturer nos éléments.
		totalMainMenuItems = $mainMenuItems.length,		// pour que cela me retourne le nombre d"éléments qu'il y a dans mon "main-menu"
		openedIndex = 2,//autre variable qui va nous aider à savoir l'index de l"élément qui est ouvert, les indexs commencent à "zéro". 
	
	init = function(){// on va déclarer aussi une fonction
		bindEvents();
		if(validIndex(openedIndex))
		{
		animateItem($mainMenuItems.eq(openedIndex), true, 700);
		}
	},

	bindEvents = function(){    // pour structurer notre code
		$mainMenuItems.children(".images").click(function(){
		var newIndex = $(this).parent().index();// l'élément sur lequel je suis, l"élément "image" sur lequel je viens de clicquer
		$item = $mainMenuItems.eq(newIndex);
			checkAndAnimateItem(newIndex);
	});
	
	$(".button").hover(
	function(){
		$(this).addClass("hovered");
	},
	function(){
		$(this).removeClass("hovered");	
	}
	);
	
	$(".button").click(function(){
		var newIndex = $(this).index(); // trouver l'index de nos éléments 
		checkAndAnimateItem(newIndex);
		
		    
	
	});
	


}, 

	validIndex = function(indexToCheck){
		
		return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);//est-ce que l'index est valide ? 
	},
	animateItem = function($item, toOpen, speed/*vitesse de mon animation*/){ /*argument donné à ma fonction, s'agit-il d'une animation d'ouverture ou de fermeture toOpen paramètre de type Boolean*/
		var $colorImage = $item.find(".color"),
		itemParam = toOpen ? {width:"420px"}: {width:"140px"},/*variable paramètres de notre item*/
		colorImageParam = toOpen ? {left:"0px"}: {left:"140px"};
		$colorImage.animate(colorImageParam,speed);
		$item.animate(itemParam,speed);
	},
	
	checkAndAnimateItem =  function (indexToCheckAndAnimate){
		if(openedIndex === indexToCheckAndAnimate)
		{
			animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
			openedIndex = -1;
		}
		else
		{
			if(validIndex(indexToCheckAndAnimate))
			{
				animateItem($mainMenuItems.eq(openedIndex), false, 250);//refermer l'index qui était ouvert en mm tps que l'autre s'ouvre
				openedIndex = indexToCheckAndAnimate;
				animateItem($mainMenuItems.eq(openedIndex), true, 250);
			}
		}
	};
	
	init();







});