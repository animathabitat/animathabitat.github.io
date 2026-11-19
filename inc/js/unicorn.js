// Scroll Into View //

function scroll_view( aa_ex ) {

    var aa_ex_a = "#" + aa_ex;

    document.querySelector( aa_ex_a ).scrollIntoView({ behavior: 'smooth' });

    };

// Toggle Display //

function toggle_app( aa_ex ) {

    var ex_a = aa_ex + "-toggle";
    var aa_id = document.getElementById( ex_a );

    return aa_id;

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

    var aa_id = document.getElementById( aa_ex );

    if ( aa_id.style.display == "none" ) {

        toggle_block( aa_id );

        } else {

        toggle_none( aa_id );

        }

    };

function toggle( aa_ex, aa_ex_case ) {

    var aa_id_a = toggle_app( aa_ex );
    var aa_id = document.getElementById( aa_ex );

    switch ( aa_ex_case ) {

        case "scroll" :

            toggle_display( aa_id_a, aa_id );
            scroll_view( aa_ex );

            break;

        case "scene" :

            var aa_id_c = document.getElementById( "scene-currency" );

                toggle_block( aa_id );
                toggle_block( aa_id_c );
                scroll_view( aa_ex );

            break;

        case "preview" :

            if ( aa_id.style.display == "none" ) {

                toggle_display( aa_id_a, aa_id );

                } else {

                toggle_display( aa_id, aa_id_a );
                toggle( aa_ex, 'scene' );

                };

            break;

        case "header" :

            var aa_ex_a = aa_ex + "-" + aa_ex_case;

            scroll_view( aa_ex_a );

            // break;

        default :

            if ( aa_id.style.display == "none" ) {

                toggle_display( aa_id_a, aa_id );

                } else {

                toggle_display( aa_id, aa_id_a );

                };

        };

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

function toggle_off( aa_ex ) {

    var aa_id = document.getElementById( aa_ex );

        toggle_none( aa_id );

    };

function toggle_reset( aa_ex ) {

    var aa_id = toggle_app( aa_ex );

        toggle_block( aa_id );
        toggle_off( aa_ex );

    };
