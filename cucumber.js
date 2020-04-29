const options = [
  'features/*', // feature filter
  '--require features/steps/*.ts',
  '--require-module ts-node/register',
  '--format node_modules/cucumber-pretty:res.txt',
  '-t "not @wip"',
]

exports.profile = options.join(' ')
