// Scroll Into View //

function scroll( aa_ex ) {

    var ex_h = "#" + aa_ex + "-header";

    document.querySelector( ex_h ).scrollIntoView({ behavior: 'smooth' });

    };

// Toggle Display: Block / None //

function toggle( aa_ex ) {

    var ex_a = aa_ex + "-toggle";

    var aa_ex_a = document.getElementById( ex_a ),
        aa_ex_i = document.getElementById( aa_ex );

    if ( aa_ex_i.style.display == "none" ) {

        aa_ex_i.style.display = "block";
        aa_ex_a.style.display = "none";

        } else {

        aa_ex_i.style.display = "none";
        aa_ex_a.style.display = "block";

        }

    };

function toggle_and_scroll( aa_ex ) {

    toggle( aa_ex );
    scroll( aa_ex );

    };

// Toggle Display: Footnotes //

function toggle_fn( aa_fn ) {

    var fn_a = aa_fn + "-toggle";

    var aa_fn_a = document.getElementById( fn_a ),
        aa_fn_i = document.getElementById( aa_fn );

    aa_fn_a.style.display = "none";
    aa_fn_i.style.display = "block";

    scroll( aa_fn );

    };

// Toggle Language: English / French //

var r = document.querySelector( ":root" ),
    toggle_fr = 0;

    r.style.setProperty( "--fr", "none" );

function toggle_language() {

    if ( toggle_fr == 0 ) {

        r.style.setProperty( "--fr", "inline" );
        r.style.setProperty( "--en", "none" );
        toggle_fr = 1;

        } else {

        r.style.setProperty( "--fr", "none" );
        r.style.setProperty( "--en", "inline" );
        toggle_fr = 0;

        }

    };

// Toggle: Reset //

function toggle_reset( aa_id ) {

  var id_a = aa_id + "-toggle";

  var aa_id_a = document.getElementById( id_a ),
      aa_id_i = document.getElementById( aa_id );

      aa_id_i.style.display = "none";
      aa_id_a.style.display = "block";

    };
