module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "max-len": ["error", 200],
        "react/forbid-prop-types": ["error", { "forbid": [] }],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/label-has-for": "off",
        "import/prefer-default-export": "off"
    }
};