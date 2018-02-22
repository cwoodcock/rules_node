package(default_visibility = ['//visibility:public'])

load('//node:defs.bzl', 'webpack_build', 'mocha_test', 'node_library')

webpack_build(
    name = 'webpack_build',
    srcs = glob([
        'src/*.ts',
        'tsconfig.json',
    ]),
    outs = ['bundle.js'],
    config = 'webpack.config.js',
    deps = [
        '//node/dbx-bazel-utils',
        '//examples/npm/ts-loader',
        '//examples/npm/typescript',
        '//examples/npm/react',
        '//examples/npm/react-dom',
        '//examples/internal_module',
    ],
)

node_library(
    name = 'app',
    srcs = ['src/components/App/index.ts'],
)

mocha_test(
    name = 'mocha_test',
    srcs = glob([
        'src/**/*.spec.ts',
        'test/*.spec.ts',
    ]),
    extra_args = ['--require=ts-node/register'],
    deps = [
        '//examples/npm/typescript',
        '//examples/npm/ts-node',
        '//examples/npm/react',
        '//examples/npm/react-dom',
        '//examples/npm/jsdom',
        '//examples/npm/jsdom-global',
        '//examples/npm/enzyme',
        '//examples/npm/react-test-renderer',
        '//examples/npm/enzyme-adapter-react-15',
        '//examples/internal_module',
        ':app',
    ],
)
