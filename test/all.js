var log = console.log
log ('==============', 'SIMPLE', 'diff & patch must be consistent')
require('./simple')
log ('==============', 'TIGHT', 'diff & patch must be correct')
require('./tight')
log ('==============', '3-WAY', 'diff & patch must merge consistently')
require('./3-way')
log('TEST PASSED')