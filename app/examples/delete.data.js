const sql = require("../models/db");
sql.query("DELETE FROM books WHERE id = '1'", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data berhasil dihapus: " + res.affectedRows);
    }
});