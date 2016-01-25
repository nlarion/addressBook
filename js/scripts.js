function Contact(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
}
