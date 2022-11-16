export class AddressBook {
    firstName: String= "";
    lastName: String= "";
    phoneNumber: String= "";
    email: String= "";
    address: String= "";
    city: String= "";
    state: String= "";
    zipCode: String= "";

    constructor (firstName: String, lastName: String, phoneNumber: String, email: String, address: String, city: String, state: String, zipCode: String) {
        this.firstName= firstName;
        this.lastName= lastName;
        this.phoneNumber= phoneNumber;
        this.email= email;
        this.address= address;
        this.city= city;
        this.state= state;
        this.zipCode= zipCode;
    }
}
