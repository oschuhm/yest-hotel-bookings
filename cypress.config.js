const { defineConfig } = require("cypress");

const webpack = require("@cypress/webpack-preprocessor");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

// load the environment variables from the local .env file
require('dotenv').config();

async function setupNodeEvents(on, config) {

    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    config.env.LOGIN_USER = config.env.LOGIN_USER || process.env.LOGIN_USER;
    config.env.LOGIN_PASSWORD = config.env.LOGIN_PASSWORD || process.env.LOGIN_PASSWORD;


    on(

        "file:preprocessor",

        webpack({

            webpackOptions: {

                resolve: {

                    extensions: [".ts", ".js"],

                },

                module: {

                    rules: [

                        {

                            test: /\.feature$/,

                            use: [

                                {

                                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",

                                    options: config,

                                },

                            ],

                        },

                    ],

                },

            },

        })

    );

    return config;

}



module.exports = defineConfig({
    e2e: {

        specPattern: "**/*.feature",

        supportFile: false,
        video: true,
        defaultCommandTimeout: 10000,
        requestTimeout: 10000,
        retries: {
            runMode: 2, // 3 runs in total 
        },
        reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter"),
        setupNodeEvents,
    },
}); 