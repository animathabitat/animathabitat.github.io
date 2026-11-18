// Scroll Into View //

function scroll_view( aa_h ) {

    var aa_ex_h = "#" + aa_h;

    document.querySelector( aa_ex_h ).scrollIntoView({ behavior: 'smooth' });

    };

function toggle_view( aa_ex ) {

    var ex_h = aa_ex + "-header";

        scroll_view( ex_h );

    };

// Toggle Display //

function toggle_app( aa_ex ) {

    var ex_a = aa_ex + "-toggle";

    var aa_ex_a = document.getElementById( ex_a );

    return aa_ex_a;

    };

function toggle_block( aa_ex ) {

    aa_ex.style.display = "block";

    };

function toggle_none( aa_ex ) {

    aa_ex.style.display = "none";

    };

function toggle_display( aa_ex_no, aa_ex_bk ) {

    toggle_none( aa_ex_no );
    toggle_block( aa_ex_bk );

    };

// Toggle Display: Block / None //

function toggle_off_on( aa_ex ) {

    var aa_ex_i = document.getElementById( aa_ex );

    if ( aa_ex_i.style.display == "none" ) {

        toggle_block( aa_ex_i );

        } else {

        toggle_none( aa_ex_i );

        }

    };

function toggle( aa_ex ) {

    var aa_ex_a = toggle_app( aa_ex );
    var aa_ex_i = document.getElementById( aa_ex );

    if ( aa_ex_i.style.display == "none" ) {

        toggle_display( aa_ex_a, aa_ex_i );

        } else {

        toggle_display( aa_ex_i, aa_ex_a );

        }

    };

function toggle_ex( aa_ex ) {

    toggle( aa_ex );
    toggle_view( aa_ex );

    };

function toggle_fn( aa_fn ) {

    var aa_fn_a = toggle_app( aa_fn );
    var aa_fn_i = document.getElementById( aa_fn );

        toggle_display( aa_fn_a, aa_fn_i );

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

// Toggle Preview //

function toggle_scene( aa_sc ) {

    var sc_a = aa_sc + "-toggle";

    var aa_sc_b = document.getElementById( aa_bq ),
        aa_sc_c = document.getElementById( aa_cc );

        toggle_block( aa_sc_b );
        toggle_block( aa_sc_c );

        scroll_view( sc_a );

    };

function toggle_scene_preview( aa_pv ) {

    var aa_pv_a = toggle_app( aa_pv );
    var aa_pv_i = document.getElementById( aa_pv );

    if ( aa_pv_i.style.display == "none" ) {

        toggle_display( aa_pv_a, aa_pv_i );

        } else {

        toggle_display( aa_pv_i, aa_pv_a );

        toggle_scene( aa_pv );

        }

    };

// Toggle Reset //

function toggle_off( aa_id ) {

    var aa_id_i = document.getElementById( aa_id );

        toggle_none( aa_id_i );

    };

function toggle_reset( aa_id ) {

    var aa_id_a = toggle_app( aa_id );

        toggle_block( aa_id_a );

        toggle_off( aa_id );

    };
