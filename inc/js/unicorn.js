// Scroll Into View //

function scroll_view( aa_ex ) {

    var aa_ex_h = "#" + aa_ex;

    document.querySelector( aa_ex_h ).scrollIntoView({ behavior: 'smooth' });

    };

function toggle_view( aa_ex ) {

    var ex_h = aa_ex + "-header";

        scroll_view( ex_h );

    };

// Toggle Display //

function toggle_app( aa_ex ) {

    var ex_a = aa_ex + "-toggle";
    var aa_id_a = document.getElementById( ex_a );

    return aa_id_a;

    };

function toggle_block( aa_id ) {

    aa_id.style.display = "block";

    };

function toggle_none( aa_id ) {

    aa_id.style.display = "none";

    };

function toggle_display( aa_ex_no, aa_ex_bk ) {

    toggle_none( aa_ex_no );
    toggle_block( aa_ex_bk );

    };

function toggle_style( aa_ex_no, aa_ex_in ) {

    r.style.setProperty( aa_ex_no, "none" );
    r.style.setProperty( aa_ex_in, "inline" );

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

function toggle( aa_ex, aa_ex_case ) {

    var aa_id_a = toggle_app( aa_ex );
    var aa_id_i = document.getElementById( aa_ex );

    switch ( aa_ex_case ) {

        case "preview" :

            if ( aa_id_i.style.display == "none" ) {

                toggle_display( aa_id_a, aa_id_i );

                } else {

                toggle_display( aa_id_i, aa_id_a );
                toggle( aa_ex, 'scene' );

                };

            break;

        case "scene" :

            var aa_id_b = document.getElementById( aa_ex ),
                aa_id_c = document.getElementById( "scene-currency" );

                toggle_block( aa_id_b );
                toggle_block( aa_id_c );
                scroll_view( aa_ex );

            break;

        case "scroll" :

            toggle_display( aa_id_a, aa_id_i );
            scroll_view( aa_ex );

            break;

        default :

            if ( aa_id_i.style.display == "none" ) {

                toggle_display( aa_id_a, aa_id_i );

                } else {

                toggle_display( aa_id_i, aa_id_a );

                };

        };

    };

function toggle_more( aa_ex ) {

    toggle( aa_ex );
    toggle_view( aa_ex );

    };

// Toggle Language: English, French //

var toggle_fr = 0;

function toggle_lang_eng() {

    toggle_style( "--fr", "--en" );
    toggle_fr = 0;

    };

function toggle_lang_fra() {

    toggle_style( "--en", "--fr" );
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

    toggle_style( "--us", "--ca" );
    toggle_cc = 0;

    };

function toggle_curr_usd() {

    toggle_style( "--ca", "--us" );
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
