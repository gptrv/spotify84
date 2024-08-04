// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = tseslint.config(
    {
        files: ["**/*.ts"],
        plugins: {
            "jsdoc": jsdoc
        },
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            "padding-line-between-statements": [
                "error",
                {
                    blankLine: "always",
                    prev: "*",
                    next: "return"
                }
            ],
            "@typescript-eslint/member-ordering": [
                "error",
                {
                    default: [
                        [
                            "public-static-get",
                            "public-static-set"
                        ],
                        [
                            "protected-static-get",
                            "protected-static-set"
                        ],
                        [
                            "private-static-get",
                            "private-static-set"
                        ],
                        "public-static-field",
                        "protected-static-field",
                        "private-static-field",
                        "public-static-method",
                        "protected-static-method",
                        "private-static-method",
                        [
                            "public-abstract-get",
                            "public-abstract-set"
                        ],
                        [
                            "protected-abstract-get",
                            "protected-abstract-set"
                        ],
                        "public-abstract-field",
                        "protected-abstract-field",
                        [
                            "public-decorated-get",
                            "public-decorated-set"
                        ],
                        "public-decorated-field",
                        [
                            "protected-decorated-get",
                            "protected-decorated-set"
                        ],
                        "protected-decorated-field",
                        [
                            "private-decorated-get",
                            "private-decorated-set"
                        ],
                        "private-decorated-field",
                        [
                            "public-get",
                            "public-set"
                        ],
                        [
                            "protected-get",
                            "protected-set"
                        ],
                        [
                            "private-get",
                            "private-set"
                        ],
                        "public-field",
                        "protected-field",
                        "private-field",
                        "constructor",
                        "public-abstract-method",
                        "protected-abstract-method",
                        "public-decorated-method",
                        "protected-decorated-method",
                        "private-decorated-method",
                        "public-method",
                        "protected-method",
                        "private-method"
                    ]
                }
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "default",
                    format: [
                        "camelCase"
                    ],
                    custom: {
                        "regex": "^[^А-ЯЁа-яё]*$",
                        "match": true
                    }
                },
                {
                    selector: [
                        "classProperty",
                        "parameterProperty"
                    ],
                    format: [
                        "camelCase"
                    ],
                    modifiers: [
                        "private"
                    ],
                    prefix: [
                        "_"
                    ],
                    custom: {
                        "regex": "^[^А-ЯЁа-яё]*$",
                        "match": true
                    }
                },
                {
                    selector: [
                        "classProperty"
                    ],
                    modifiers: [
                        "public",
                        "static",
                        "readonly"
                    ],
                    format: [
                        "camelCase",
                        "UPPER_CASE"
                    ],
                    custom: {
                        "regex": "^[^А-ЯЁа-яё]*$",
                        "match": true
                    }
                },
                {
                    selector: "interface",
                    "format": [
                        "PascalCase"
                    ],
                    custom: {
                        "regex": "^I[A-Z][^А-Яа-я]*$",
                        "match": true
                    }
                },
                {
                    selector: "objectLiteralProperty",
                    format: null,
                    custom: {
                        "regex": "^[^А-ЯЁа-яё]*$",
                        "match": true
                    }
                },
                {
                    selector: "typeLike",
                    format: [
                        "PascalCase"
                    ],
                    custom: {
                        "regex": "^[^А-ЯЁа-яё]*$",
                        "match": true
                    }
                },
                {
                    selector: [
                        "variable"
                    ],
                    modifiers: [
                        "const",
                        "exported"
                    ],
                    format: [
                        "camelCase",
                        "UPPER_CASE"
                    ],
                    custom: {
                        "regex": "^[^А-ЯЁа-яё]*$",
                        "match": true
                    }
                }
            ],
            "@typescript-eslint/no-shadow": "error",
            "@typescript-eslint/explicit-member-accessibility": [
                "error",
                {
                    accessibility: "explicit",
                    overrides: {
                        "constructors": "no-public"
                    }
                }
            ],
            "@typescript-eslint/consistent-generic-constructors": "off",
            "@typescript-eslint/array-type": [
                "error",
                {
                    default: "array-simple"
                }
            ],
            "@typescript-eslint/typedef": [
                "error",
                {
                    arrowParameter: true,
                    variableDeclaration: true,
                    arrayDestructuring: true,
                    parameter: true,
                    propertyDeclaration: true,
                    memberVariableDeclaration: true,
                    objectDestructuring: true,
                    variableDeclarationIgnoreFunction: true
                }
            ],
            "@typescript-eslint/explicit-function-return-type": "error",
            "@angular-eslint/no-conflicting-lifecycle": "error",
            "@angular-eslint/no-host-metadata-property": "error",
            "@angular-eslint/no-input-rename": "error",
            "@angular-eslint/no-inputs-metadata-property": "error",
            "@angular-eslint/no-output-native": "error",
            "@angular-eslint/no-output-on-prefix": "error",
            "@angular-eslint/no-output-rename": "error",
            "@angular-eslint/no-outputs-metadata-property": "error",
            "@angular-eslint/use-lifecycle-interface": "error",
            "@angular-eslint/use-pipe-transform-interface": "error",
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase",
                },
            ],
            "max-classes-per-file": [
                "error",
                1
            ],
            "curly": "error",
            "eqeqeq": [
                "error",
                "always"
            ],
            "indent": [
                "error",
                4,
                {
                    SwitchCase: 1
                }
            ],
            "quotes": [
                "error",
                "single",
                {
                    allowTemplateLiterals: true
                }
            ],
            "object-curly-spacing": [
                "error",
                "always"
            ],
            // "unused-imports/no-unused-imports": "warn",
            "no-console": "warn",
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "sp",
                    style: "kebab-case",
                },
            ],
            "jsdoc/require-jsdoc": [
                "error",
                {
                    contexts: [
                        "MethodDefinition:not([key.name=/^ng[A-Z].+/]):not([key.name=/^ionView[A-Z].+/]):not([key.name=/^to[A-Z].+/]):not([key.name=/^go[A-Z].+/]):not([override=true]):not([key.name=forRoot]):not([key.name=prepareData]):not([key.name=fromDto]):not([key.name=setOptions]):not([key.name=transform]):not([key.name=canActivate]):not([key.name=canDeactivate])"
                    ],
                    require: {
                        "ArrowFunctionExpression": false,
                        "ClassDeclaration": false,
                        "ClassExpression": false,
                        "FunctionDeclaration": true,
                        "FunctionExpression": true
                    },
                    checkConstructors: false,
                    enableFixer: false
                }
            ],
            "jsdoc/require-description": "error",
            "jsdoc/require-returns": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@angular-eslint/component-class-suffix": "off",
            "@typescript-eslint/no-explicit-any": "warn"
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            "@angular-eslint/template/interactive-supports-focus": [
                "off"
            ],
            "@angular-eslint/template/click-events-have-key-events": [
                "off"
            ],
        },
    }
);
