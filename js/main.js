var today = new Date();
var yyyy = today.getFullYear();

var user = {
  firstname: "John",
  lastname: "Wick",
  country: "SPAIN",
  age: 25,
  payment: [
    "VISA",
    "MASTERCARD"
  ],

  getFirstname: function(){
    alert(this.firstname);
  },
  getLastname: function(){
    alert(this.lastname);
  },
  getYear: function(){
    var year = yyyy - this.age;
    alert(year);
  }
};

user.getFirstname();
user.getLastname();
user.getYear();

var permission = {
  country: ["FRANCE", "ENGLAND", "BELGIUM", "SPAIN"],
  payment: ["VISA", "MASTERCARD"],
  age: 18,

  verifAge: function(){
    if (this.age >= user.age) {
      return "Acces Forbidden";
    }
    else {
      return "Access Granted";
    }
  },
  verifCountry: function(){

    var countryAllowed = false;

    for (var i = 0; i < this.country.length; i++) {

      if (this.country[i]==user.country) {
        countryAllowed = true;
      }
    }

    if (countryAllowed) {
      return "Country Allowed";
    }
    else {
      return "Country not allowed";
    }

  },
  verifPayment: function(){

    var allowedPayment = "";
    for (var i = 0; i < this.payment.length; i++) {
      for (var j = 0; j < user.payment.length; j++) {
        if (this.payment[i]==user.payment[j]) {
          allowedPayment += user.payment[j]+ " ";
        }
      }
    }
    if (allowedPayment=="") {
      return "Aucun paiement autorisés. Veuillez utiliser VISA ou MASTERCARD..";
    }
    else {
      return allowedPayment;
    }
  },
  verifAll: function(){

    alert(permission.verifAge());
    alert(permission.verifCountry());
    alert(permission.verifPayment());
  }
}

permission.verifAll();
