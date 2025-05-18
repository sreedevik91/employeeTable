export interface IUser {
  address: IAddress
  company: ICompany
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface ICompany {
  name: string
  catchPhrase: string
  designation: string
  bs: string
}