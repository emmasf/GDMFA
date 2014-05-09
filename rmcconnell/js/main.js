$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.item',
	filter: '.final'
  });

// layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});

  // store filter for each group
  var filters = {};

  $container.isotope({ sortBy : 'random' });
  
  $('#filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
/*Writing block show/hide*/

var extend = document.getElementsByClassName('more');
var para = document.getElementsByClassName('long');

function show(x) {
    para[x].style.display = 'block';
    extend[x].onclick = function() {
        hide(x);
    }
	$container.isotope('layout');
}

function hide(x) {
    para[x].style.display = 'none';
    extend[x].onclick = function() {
        show(x);
    }
	$container.isotope('layout');
}

extend[0].onclick = function() {
    show(0);
}
$container.isotope('layout');

extend[1].onclick = function() {
    show(1);
}
$container.isotope('layout');

extend[2].onclick = function() {
    show(2);
}
$container.isotope('layout');

extend[3].onclick = function() {
    show(3);
}
$container.isotope('layout');


// Menu Expander    
  $('#filters > ul > li:has(ul)').addClass("has-sub");

  $('#filters > ul > li > button').click(function() {
    var checkElement = $(this).next();
    
    $('#filters li').removeClass('active');
    $(this).closest('li').addClass('active');	
    
    
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#menu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;	
    }		
  });
  });