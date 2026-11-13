function toggle_fn( aa_fn ) {

    var fn = "#" + aa_fn;
    var fn_a = aa_fn + "-toggle";

    var aa_fn_a = document.getElementById( fn_a ),
        aa_fn_i = document.getElementById( aa_fn );

    aa_fn_a.style.display = "none";
    aa_fn_i.style.display = "block";

    document.querySelector( fn ).scrollIntoView({ behavior: 'smooth' });

    };

function toggle_reset( aa_id ) {

  var id_a = aa_id + "-toggle";

  var aa_id_a = document.getElementById( id_a ),
      aa_id_i = document.getElementById( aa_id );

      aa_id_i.style.display = "none";
      aa_id_a.style.display = "block";

    };
