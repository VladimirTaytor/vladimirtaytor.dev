module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jasmine": true,
    "jest/globals": true
  },
  "plugins": ["jasmine", "jest", "import"],
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jasmine/recommended",
    "plugin:jest/recommended",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "globals": {
    "expectAsync": true,
    "sourcePath": true,
    "waitForRequest": true,
    "readFixture": true,
    "vcr": true
  },
  "rules": {
    "import/no-unresolved": [
      "error",
      { "commonjs": true }
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      { "avoidEscape": true }
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", "ignoreRestSiblings": true }
    ],
    "jasmine/no-spec-dupes": [
      0
    ],
    "no-console": "off"
  },
  "overrides": [
    {
      "files": [
        "Usage: list below all directories that do NOT use jasmine and need its rules disabled",
        "**/anything_importer_validations/**",
        "**/pipedrive_deals/**",
        "**/csv_importer/**",
      ],
      "rules": {
        "jasmine/new-line-before-expect": "off",
        "jasmine/no-suite-dupes": "off",
        "jasmine/prefer-toHaveBeenCalledWith": "off"
      }
    },
    {
      "files": [
        "Usage: list below all directories that do NOT use jest and need its rules disabled",
        "**/airtable/**",
        "**/anything_importer_base/**",
        "**/gsheet_importer/**",
        "**/gsheet_native/**",
        "**/importers_index/**",
        "**/jira/**",
        "**/jira_api/**",
        "**/json_client/**",
        "**/map_reduce/**",
        "**/migrator/**",
        "**/xero/**",
        "**/xero-reports/**"
      ],
      "rules": {
        "jest/no-alias-methods": "off",
        "jest/no-jasmine-globals": "off",
        "jest/valid-expect-in-promise": "off"
      }
    }
  ]
};
