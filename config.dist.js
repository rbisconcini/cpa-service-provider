"use strict";

exports.db = {
  host: '',
  port: 3306,
  user: '',
  password: '',
  type: '',
  database: '',

  // Database filename for SQLite
  filename: '',

  // For debugging, log SQL statements to the console
  debug: true
};

exports.uris = {
  authorization_uri: "http://example.com/authorized"
};

exports.service_provider_id = process.env.SP_ID || '1';
exports.service_provider_name = process.env.SP_NAME || 'STATION_NAME';
