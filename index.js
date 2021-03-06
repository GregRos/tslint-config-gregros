/** @type {import("tslint").Configuration} */
module.exports = {
    "extends": [
        "tslint-consistent-codestyle",
        "tslint-eslint-rules"
    ],
    "rules": {
        "indent": [
            true,
            "spaces",
            4
        ],
        "comment-format": [true, "check-space" ,{ "ignore-words": ["TODO", "HACK"]}],
        "adjacent-overload-signatures": true,
        "curly": [
            true,
            "ignore-same-line"
        ],
        "no-unnecessary-type-assertion": true,
        "label-position": [true],
        "no-duplicate-variable": [true, "check-parameters"],
        "arrow-parens": [true, "ban-single-arg-parens"],
        "space-within-parens": [
            true,
            0
        ],
        "array-type": [
            true,
            "array"
        ],
        "ban-comma-operator": true,
        "forin": true,
        "triple-equals": [
            true,
            "allow-null-check"
        ],
        "no-string-throw": true,
        "no-sparse-arrays": true,
        "no-invalid-template-strings": true,
        "no-implicit-dependencies": [
            true,
            "dev",
            "optional"
        ],
        "no-for-in-array": true,
        "no-floating-promises": [
            true
        ],
        "no-duplicate-super": true,
        "no-construct": true,
        "no-arg": true,
        "use-isnan": true,
        "no-duplicate-imports": true,
        "class-name": true,
        "new-parens": true,
        "no-inferrable-types": true,
        "arrow-return-shorthand": true,
        "encoding": true,
        "file-name-casing": {
            "options": "kebab-case"
        },
        "interface-over-type-literal": true,
        "no-angle-bracket-type-assertion": true,
        "no-consecutive-blank-lines": [
            true,
            2
        ],
        "object-literal-key-quotes": [
            true,
            "as-needed"
        ],
        "no-internal-module": true,
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            },
            {
                "call-signature": "onespace",
                "index-signature": "onespace",
                "parameter": "onespace",
                "property-declaration": "onespace",
                "variable-declaration": "onespace"
            }
        ],
        "no-boolean-literal-compare": true,
        "no-reference-import": true,

        "object-literal-shorthand": [
            true,
            "always"
        ],
        "semicolon": [
            true,
            "always"
        ],
        "space-before-function-paren": [
            true,
            {
                "asyncArrow": "always",
                "method": "never",
                "named": "never",
                "constructor": "never",
                "anonymous": "never"
            }
        ],
        "quotemark": [
            true,
            "double",
            "avoid-escape"
        ],
        "prefer-template": true,
        "prefer-method-signature": true,
        "no-constant-condition": [true, {
            checkLoops: false
        }],
	    "linebreak-style": [true, "LF"],
        "no-duplicate-switch-case": true,
        "no-empty-character-class": true,
        "no-ex-assign": true,
        "no-extra-semi": true,
        "no-invalid-regexp": true,
        "no-irregular-whitespace": true,
        "no-multi-spaces": true,
        "ter-no-proto": true,
        "array-bracket-spacing": [true, "never"],
        "block-spacing": true,
        "ter-func-call-spacing": true,
        "ter-no-mixed-spaces-and-tabs": true,
        "ter-computed-property-spacing": true,
        "ter-prefer-arrow-callback": true,

        "naming-convention": [
            true,
            {
                "type": "variable",
                "format": [
                    "StrictPascalCase",
                    "strictCamelCase"
                ],
                "leadingUnderscore": "allow"
            },
            {
                "type": "function",
                "format": [
                    "StrictPascalCase",
                    "strictCamelCase"
                ]
            },
            {
                "type": "member",
                "modifiers": "private",
                "leadingUnderscore": "require"
            },
            {
                "type": "parameterProperty",
                "modifiers": "private",
                "leadingUnderscore": "require"
            },
            {
                "type": "member",
                "format": "camelCase",
                "modifiers": "private"
            },
            {
                "type": "enumMember",
                "format": "PascalCase"
            },
            {
                "type": "type",
                "format": "PascalCase"
            }
        ]
    }
};

