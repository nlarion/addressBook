describe('Contact',function(){
  it("Create a new Contact with the given properties", function(){
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });
});
