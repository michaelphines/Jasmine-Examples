describe('copyToDiv()', function() {
  it('copies input data to content', function() {
    JazzMoney.loadFixture("fixture");
    copyToDiv();
    var content = document.getElementById('content').innerHTML
    expect(content).toEqual('source data');
  });  
});
