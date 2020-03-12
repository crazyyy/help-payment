$ ( document ).ready ( function () {
  console.log ( "start okok" );
  const $mainForm = $ ( "#main-form" );
  const $btnSbmt = $ ( "#button" );

  $mainForm.on ( "submit", ( event ) => {
    event.preventDefault ();
    console.log ( "lolos" );

    const $currSteap = $ ( ".form--steap--active" );
    const currId = $currSteap.attr ( "data-id" );
    let $nextElm;
    if ( currId === 1 ) {
      $nextElm = $ ( ".form--steap-2" );

    } else if ( currId === 2 ) {
      $nextElm = $ ( ".form--steap-3" );

    } else if ( currId === 3 ) {
      $nextElm = $ ( ".form--steap-3" );
    }

    $currSteap.removeClass ( "form--steap--active" );

    $nextElm.addClass ( "form--steap--active" );


    console.log ( currId );

  } );

//  $btnSbmt.on('click', (event)=>{
//    console.log(event)
//
//    const $currSteap = $('.form--steap--active');
//    const currId = $currSteap.attr('data-id')
//
//    console.log(currId)
//
//
//  })


  $ ( ".nav__tab-link" ).click ( function () {
    const tabId = $ ( this ).attr ( "data-tab" );

    $ ( ".nav__tab-link" ).removeClass ( "current" );
    $ ( ".form" ).removeClass ( "form--active" );

    $ ( this ).addClass ( "current" );
    $ ( "#" + tabId ).addClass ( "form--active" );
  } );

} );
