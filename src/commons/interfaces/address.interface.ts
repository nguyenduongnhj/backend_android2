export interface Ward {
    code?: String;
    name?: String;
}

export interface Province {
    code?: String;
    name?: String;
}

export interface District {
    code?: String;
    name?: String;
}

export default interface Address { 
    address_detail?: String;
    ward?: Ward;
    province?: Province;
    district?: District;
    full_address?: String;
    ward_code?: String;
}