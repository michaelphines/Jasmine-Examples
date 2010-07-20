require 'rubygems'
require 'jazz_money'

javascript_files = [
  'spec/javascript/exampleSpec.js'
]

jasmine_spec_files = [
  'example.js'
]

JazzMoney::Runner.new(javascript_files, jasmine_spec_files).call
