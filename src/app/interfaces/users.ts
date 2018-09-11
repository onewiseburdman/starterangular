export interface Roles {
    subscriber?: boolean;
    registered?: boolean;
    editor?: boolean;
    admin?: boolean;
    cityadmin?: boolean;
    superuser?: boolean;
  }
  
  export interface User{
   uid: string;
   email: string;
   roles: Roles;
   useraddress: UserAddress;
   userdetails: UserDetails;
   usergenerals: UserGeneral;
  }
  export interface UserDetails{
    firstName?: string;
    middleName?: string;
    lastName?: string;
    mobileNumber?: string;
    suffix?: string;
  }
  export interface UserGeneral{
    photoURL?: string;
    motto?: string;
    favoriteBook?: string;
    graduatedFrom?: string;
    graduatedYear?: string;
    worksAt?: string;
  }
  export interface UserAddress{
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    latitude?: string;
    longitude?: string;
  }
  