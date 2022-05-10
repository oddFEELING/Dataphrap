/** 🌹oddFEELING */

import papa from 'papaparse';

/**
 * Handles all data parsing methods
 */

class Parser {
  /**
   * parses CSV selected csv files
   *
   * @param {CSV} data - CSV file to be parsed
   * @returns {Object} Parsed JavaScript Object
   */
  PARSE_CSV(data) {
    return papa.parse(data, {
      header: true,
      dynamicTyping: true,
    });
  }

  /**
   *
   * @param {String} data - String data to be parsed, This string should be in form of Delimited data (CSV and the likes)
   * @returns {Object} Parsed Javascript object
   */
  PARSE_STRING(data) {}

  /**
   * Parse Data from a third party site or external url
   *
   * @param {String} link - url link to resource to be parse
   * @returns {Object} Parsed Javascript object
   */
  PARSE_LINK(link) {}

  /**
   *parse data from JSON file
  
   * @param {JSON} data - Json data to be parsed
   * @returns {Object} Parsed Javascript object
   */
  PARSE_JSON(data) {}
}

export default new Parser();
