package(default_visibility = ['//visibility:public'])

load('//node:defs.bzl', 'webpack_build', 'mocha_test')

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

mocha_test(
    name = 'mocha_test',
    srcs = glob([
        'test/*.spec.js'
    ]),
    deps = [
        '//node/dbx-bazel-utils',
        '//examples/webpack_build'
    ],
)
