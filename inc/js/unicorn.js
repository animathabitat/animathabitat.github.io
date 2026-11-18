// Scroll Into View //

function scroll_view( aa_h ) {

    var aa_ex_h = "#" + aa_h;

    document.querySelector( aa_ex_h ).scrollIntoView({ behavior: 'smooth' });

    };

function toggle_view( aa_ex ) {

    var ex_h = aa_ex + "-header";

        scroll_view( ex_h );

    };

// Toggle Display: Block / None //

function toggle_off_on( aa_ex ) {

    var aa_ex_i = document.getElementById( aa_ex );

    if ( aa_ex_i.style.display == "none" ) {

        aa_ex_i.style.display = "block";

        } else {

        aa_ex_i.style.display = "none";

        }

    };

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

function toggle_ex( aa_ex ) {

    toggle( aa_ex );
    toggle_view( aa_ex );

    };

function toggle_fn( aa_fn ) {

    var fn_a = aa_fn + "-toggle";

    var aa_fn_a = document.getElementById( fn_a ),
        aa_fn_i = document.getElementById( aa_fn );

        aa_fn_a.style.display = "none";
        aa_fn_i.style.display = "block";

        scroll_view( aa_fn );

    };

// Toggle Language: English, French //

var toggle_fr = 0;

function toggle_lang_eng() {

    r.style.setProperty( "--fr", "none" );
    r.style.setProperty( "--en", "inline" );
    toggle_fr = 0;

    };

function toggle_lang_fra() {

    r.style.setProperty( "--fr", "inline" );
    r.style.setProperty( "--en", "none" );
    toggle_fr = 1;

    };

function toggle_language() {

    if ( toggle_fr == 0 ) {

        toggle_lang_fra();

        } else {

        toggle_lang_eng();

        }

    };

// Toggle Currency: Canadian Dollars, American Dollars //

var toggle_cc = 0;

function toggle_curr_cad() {

    r.style.setProperty( "--us", "none" );
    r.style.setProperty( "--ca", "inline" );
    toggle_cc = 0;

    };

function toggle_curr_usd() {

    r.style.setProperty( "--us", "inline" );
    r.style.setProperty( "--ca", "none" );
    toggle_cc = 1;

    };

function toggle_currency() {

    if ( toggle_cc == 0 ) {

        toggle_curr_usd();
        toggle_lang_eng();

        } else {

        toggle_curr_cad();

        }

    };

function toggle_region() {

    if ( toggle_fr == 0 ) {

        toggle_curr_cad();
        toggle_lang_fra();

        } else {

        toggle_lang_eng();

        }

    };

// Toggle: Scene Boutique, Scene Preview //

function toggle_scene( aa_sc ) {

    var sc_a = aa_sc + "-toggle",
        aa_bq = document.getElementById( aa_sc_bq );

    aa_cc.style.display = "block";
    aa_bq.style.display = "block";

    scroll_view( sc_a );

    };

function toggle_scene_preview( aa_pv ) {

    var pv_a = aa_pv + "-toggle";

    var aa_pv_a = document.getElementById( pv_a ),
        aa_pv_i = document.getElementById( aa_pv );

    if ( aa_pv_i.style.display == "none" ) {

        aa_pv_i.style.display = "block";
        aa_pv_a.style.display = "none";

        } else {

        aa_pv_i.style.display = "none";
        aa_pv_a.style.display = "block";

        toggle_scene( aa_pv );

        }

    };

// Toggle: Reset //

function toggle_off( aa_id ) {

    var aa_id_i = document.getElementById( aa_id );

        aa_id_i.style.display = "none";

    };

function toggle_reset( aa_id ) {

    var id_a = aa_id + "-toggle";

    var aa_id_a = document.getElementById( id_a );

        aa_id_a.style.display = "block";

        toggle_off( aa_id );

    };
