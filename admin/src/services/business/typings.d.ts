declare namespace API {
  interface PageInfo {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_BusinessInfo_ {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<BusinessInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_BusinessInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_BusinessInfo_;
  }

  interface Result_BusinessInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: BusinessInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  interface BusinessInfo {
    id: string;
    name: string;
    telephone: string;
    wechat: string;
    email: string;
    address: string;
    description: string;
    promotion: string;
    imageUrl: string;
    releaseTime: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: integer;
  }

  interface BusinessInfoVO {
    id?: string;
    name?: string;
    telephone?: string;
    wechat?: string;
    email?: string;
    address?: string;
    description?: string;
    promotion?: string;
    imageUrl?: string;
  }
}
