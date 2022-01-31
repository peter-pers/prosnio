import { gql } from "@apollo/client";

// TODO Improvements: fragments
export const STARTPAGE = gql`
  query startPage($limit: Int = 6, $skip: Int = 0, $where: CompanyFilter) {
    companyCollection(limit: $limit, skip: $skip, where: $where) {
      total
      items {
        sys {
          id
        }
        industry
        name
        specialities
        location
        logo
        year
      }
    }
    specialityCollection(limit: 250) {
      items {
        sys {
          id
        }
        name
      }
    }
    countryCollection {
      items {
        sys {
          id
        }
        name
      }
    }
  }
`;

export const COMPANIES = gql`
  query companies($limit: Int = 6, $skip: Int = 0, $where: CompanyFilter) {
    companyCollection(limit: $limit, skip: $skip, where: $where) {
      total
      items {
        sys {
          id
        }
        industry
        name
        specialities
        location
        logo
        year
      }
    }
  }
`;

export const YEARS = gql`
  query years {
    companyCollection {
      items {
        sys {
          id
        }
        year
      }
    }
  }
`;

export const INDUSTRY = gql`
  query industry {
    companyCollection {
      items {
        sys {
          id
        }
        industry
      }
    }
  }
`;

export const COUNTRIES = gql`
  query countries {
    countryCollection {
      items {
        sys {
          id
        }
        name
      }
    }
  }
`;

export const SPECIALITIES = gql`
  query specialities {
    specialityCollection(limit: 250) {
      items {
        sys {
          id
        }
        name
      }
    }
  }
`;

export const COMPANY = gql`
  query getCompany($id: String!) {
    company(id: $id) {
      sys {
        id
      }
      name
      website
      industry
      specialities
      location
      year
      logo
    }
  }
`;
