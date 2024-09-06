const config = require("./modules/config");
const structured_table_ml = require("./modules/structured_table_ml");
const object_table_ml = require("./modules/object_table_ml");

module.exports = {...config, ...structured_table_ml, ...object_table_ml};