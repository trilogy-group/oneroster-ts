/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The order to sort the response by
 */
export const GetStudentsForClassInSchoolOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetStudentsForClassInSchoolOrderBy = ClosedEnum<
  typeof GetStudentsForClassInSchoolOrderBy
>;

export type GetStudentsForClassInSchoolRequest = {
  /**
   * School sourced ID
   */
  schoolSourcedId: string;
  /**
   * Class sourced ID
   */
  classSourcedId: string;
  /**
   * Comma-separated list of fields to include in the response
   */
  fields?: string | undefined;
  /**
   * The maximum number of items to return in the paginated response
   */
  limit?: number | undefined;
  /**
   * The number of items to skip in the paginated response
   */
  offset?: number | undefined;
  /**
   * The field to sort the response by
   */
  sort?: string | undefined;
  /**
   * The order to sort the response by
   */
  orderBy?: GetStudentsForClassInSchoolOrderBy | undefined;
  /**
   * The filter to apply to the response
   */
  filter?: string | undefined;
  /**
   * The search query to apply to the response
   */
  search?: string | undefined;
};

export const GetStudentsForClassInSchoolStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type GetStudentsForClassInSchoolStatus = ClosedEnum<
  typeof GetStudentsForClassInSchoolStatus
>;

export type GetStudentsForClassInSchoolUserId = {
  type: string;
  identifier: string;
};

export const GetStudentsForClassInSchoolRoleType = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type GetStudentsForClassInSchoolRoleType = ClosedEnum<
  typeof GetStudentsForClassInSchoolRoleType
>;

export const GetStudentsForClassInSchoolRoleEnum = {
  Administrator: "administrator",
  Aide: "aide",
  Guardian: "guardian",
  Parent: "parent",
  Proctor: "proctor",
  Relative: "relative",
  Student: "student",
  Teacher: "teacher",
} as const;
export type GetStudentsForClassInSchoolRoleEnum = ClosedEnum<
  typeof GetStudentsForClassInSchoolRoleEnum
>;

export type GetStudentsForClassInSchoolOrg = {
  href: string;
  sourcedId: string;
  type: string;
};

export type GetStudentsForClassInSchoolRole = {
  roleType: GetStudentsForClassInSchoolRoleType;
  role: GetStudentsForClassInSchoolRoleEnum;
  org: GetStudentsForClassInSchoolOrg;
  userProfile?: string | undefined;
  beginDate: string | null;
  endDate: string | null;
};

export const GetStudentsForClassInSchoolType = {
  AcademicSession: "academicSession",
  AssessmentLineItem: "assessmentLineItem",
  Category: "category",
  Class: "class",
  Course: "course",
  Demographics: "demographics",
  Enrollment: "enrollment",
  GradingPeriod: "gradingPeriod",
  LineItem: "lineItem",
  Org: "org",
  Resource: "resource",
  Result: "result",
  ScoreScale: "scoreScale",
  Student: "student",
  Teacher: "teacher",
  Term: "term",
  User: "user",
  ComponentResource: "componentResource",
  CourseComponent: "courseComponent",
} as const;
export type GetStudentsForClassInSchoolType = ClosedEnum<
  typeof GetStudentsForClassInSchoolType
>;

export type GetStudentsForClassInSchoolAgent = {
  href: string;
  sourcedId: string;
  type: GetStudentsForClassInSchoolType;
};

export type GetStudentsForClassInSchoolPrimaryOrg = {
  href: string;
  sourcedId: string;
  type: string;
};

export type GetStudentsForClassInSchoolUser = {
  sourcedId: string;
  status: GetStudentsForClassInSchoolStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  userMasterIdentifier?: string | null | undefined;
  username?: string | null | undefined;
  userIds?: Array<GetStudentsForClassInSchoolUserId> | undefined;
  enabledUser: boolean;
  givenName: string;
  familyName: string;
  middleName?: string | null | undefined;
  roles: Array<GetStudentsForClassInSchoolRole>;
  agents: Array<GetStudentsForClassInSchoolAgent>;
  primaryOrg?: GetStudentsForClassInSchoolPrimaryOrg | undefined;
  email?: string | null | undefined;
  preferredFirstName?: string | null | undefined;
  preferredMiddleName?: string | null | undefined;
  preferredLastName?: string | null | undefined;
  pronouns?: string | null | undefined;
  grades?: Array<string> | undefined;
  password?: string | null | undefined;
  sms?: string | null | undefined;
  phone?: string | null | undefined;
};

/**
 * Collection of students successfully retrieved
 */
export type GetStudentsForClassInSchoolResponseBody = {
  users: Array<GetStudentsForClassInSchoolUser>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetStudentsForClassInSchoolResponse = {
  result: GetStudentsForClassInSchoolResponseBody;
};

/** @internal */
export const GetStudentsForClassInSchoolOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolOrderBy
> = z.nativeEnum(GetStudentsForClassInSchoolOrderBy);

/** @internal */
export const GetStudentsForClassInSchoolOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolOrderBy
> = GetStudentsForClassInSchoolOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolOrderBy$ {
  /** @deprecated use `GetStudentsForClassInSchoolOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolOrderBy$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolOrderBy$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolOrderBy$outboundSchema;
}

/** @internal */
export const GetStudentsForClassInSchoolRequest$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  schoolSourcedId: z.string(),
  classSourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetStudentsForClassInSchoolOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetStudentsForClassInSchoolRequest$Outbound = {
  schoolSourcedId: string;
  classSourcedId: string;
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetStudentsForClassInSchoolRequest$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolRequest$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolRequest
> = z.object({
  schoolSourcedId: z.string(),
  classSourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetStudentsForClassInSchoolOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolRequest$ {
  /** @deprecated use `GetStudentsForClassInSchoolRequest$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolRequest$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolRequest$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolRequest$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolRequest$Outbound;
}

export function getStudentsForClassInSchoolRequestToJSON(
  getStudentsForClassInSchoolRequest: GetStudentsForClassInSchoolRequest,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolRequest$outboundSchema.parse(
      getStudentsForClassInSchoolRequest,
    ),
  );
}

export function getStudentsForClassInSchoolRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetStudentsForClassInSchoolRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolRequest' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolStatus
> = z.nativeEnum(GetStudentsForClassInSchoolStatus);

/** @internal */
export const GetStudentsForClassInSchoolStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolStatus
> = GetStudentsForClassInSchoolStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolStatus$ {
  /** @deprecated use `GetStudentsForClassInSchoolStatus$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolStatus$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolStatus$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolStatus$outboundSchema;
}

/** @internal */
export const GetStudentsForClassInSchoolUserId$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolUserId,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  identifier: z.string(),
});

/** @internal */
export type GetStudentsForClassInSchoolUserId$Outbound = {
  type: string;
  identifier: string;
};

/** @internal */
export const GetStudentsForClassInSchoolUserId$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolUserId$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolUserId
> = z.object({
  type: z.string(),
  identifier: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolUserId$ {
  /** @deprecated use `GetStudentsForClassInSchoolUserId$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolUserId$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolUserId$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolUserId$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolUserId$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolUserId$Outbound;
}

export function getStudentsForClassInSchoolUserIdToJSON(
  getStudentsForClassInSchoolUserId: GetStudentsForClassInSchoolUserId,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolUserId$outboundSchema.parse(
      getStudentsForClassInSchoolUserId,
    ),
  );
}

export function getStudentsForClassInSchoolUserIdFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolUserId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStudentsForClassInSchoolUserId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolUserId' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolRoleType$inboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolRoleType
> = z.nativeEnum(GetStudentsForClassInSchoolRoleType);

/** @internal */
export const GetStudentsForClassInSchoolRoleType$outboundSchema:
  z.ZodNativeEnum<typeof GetStudentsForClassInSchoolRoleType> =
    GetStudentsForClassInSchoolRoleType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolRoleType$ {
  /** @deprecated use `GetStudentsForClassInSchoolRoleType$inboundSchema` instead. */
  export const inboundSchema =
    GetStudentsForClassInSchoolRoleType$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolRoleType$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolRoleType$outboundSchema;
}

/** @internal */
export const GetStudentsForClassInSchoolRoleEnum$inboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolRoleEnum
> = z.nativeEnum(GetStudentsForClassInSchoolRoleEnum);

/** @internal */
export const GetStudentsForClassInSchoolRoleEnum$outboundSchema:
  z.ZodNativeEnum<typeof GetStudentsForClassInSchoolRoleEnum> =
    GetStudentsForClassInSchoolRoleEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolRoleEnum$ {
  /** @deprecated use `GetStudentsForClassInSchoolRoleEnum$inboundSchema` instead. */
  export const inboundSchema =
    GetStudentsForClassInSchoolRoleEnum$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolRoleEnum$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolRoleEnum$outboundSchema;
}

/** @internal */
export const GetStudentsForClassInSchoolOrg$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolOrg,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/** @internal */
export type GetStudentsForClassInSchoolOrg$Outbound = {
  href: string;
  sourcedId: string;
  type: string;
};

/** @internal */
export const GetStudentsForClassInSchoolOrg$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolOrg$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolOrg
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolOrg$ {
  /** @deprecated use `GetStudentsForClassInSchoolOrg$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolOrg$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolOrg$outboundSchema` instead. */
  export const outboundSchema = GetStudentsForClassInSchoolOrg$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolOrg$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolOrg$Outbound;
}

export function getStudentsForClassInSchoolOrgToJSON(
  getStudentsForClassInSchoolOrg: GetStudentsForClassInSchoolOrg,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolOrg$outboundSchema.parse(
      getStudentsForClassInSchoolOrg,
    ),
  );
}

export function getStudentsForClassInSchoolOrgFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolOrg, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStudentsForClassInSchoolOrg$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolOrg' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolRole$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolRole,
  z.ZodTypeDef,
  unknown
> = z.object({
  roleType: GetStudentsForClassInSchoolRoleType$inboundSchema,
  role: GetStudentsForClassInSchoolRoleEnum$inboundSchema,
  org: z.lazy(() => GetStudentsForClassInSchoolOrg$inboundSchema),
  userProfile: z.string().optional(),
  beginDate: z.nullable(z.string()),
  endDate: z.nullable(z.string()),
});

/** @internal */
export type GetStudentsForClassInSchoolRole$Outbound = {
  roleType: string;
  role: string;
  org: GetStudentsForClassInSchoolOrg$Outbound;
  userProfile?: string | undefined;
  beginDate: string | null;
  endDate: string | null;
};

/** @internal */
export const GetStudentsForClassInSchoolRole$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolRole$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolRole
> = z.object({
  roleType: GetStudentsForClassInSchoolRoleType$outboundSchema,
  role: GetStudentsForClassInSchoolRoleEnum$outboundSchema,
  org: z.lazy(() => GetStudentsForClassInSchoolOrg$outboundSchema),
  userProfile: z.string().optional(),
  beginDate: z.nullable(z.string()),
  endDate: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolRole$ {
  /** @deprecated use `GetStudentsForClassInSchoolRole$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolRole$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolRole$outboundSchema` instead. */
  export const outboundSchema = GetStudentsForClassInSchoolRole$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolRole$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolRole$Outbound;
}

export function getStudentsForClassInSchoolRoleToJSON(
  getStudentsForClassInSchoolRole: GetStudentsForClassInSchoolRole,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolRole$outboundSchema.parse(
      getStudentsForClassInSchoolRole,
    ),
  );
}

export function getStudentsForClassInSchoolRoleFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolRole, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStudentsForClassInSchoolRole$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolRole' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolType$inboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolType
> = z.nativeEnum(GetStudentsForClassInSchoolType);

/** @internal */
export const GetStudentsForClassInSchoolType$outboundSchema: z.ZodNativeEnum<
  typeof GetStudentsForClassInSchoolType
> = GetStudentsForClassInSchoolType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolType$ {
  /** @deprecated use `GetStudentsForClassInSchoolType$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolType$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolType$outboundSchema` instead. */
  export const outboundSchema = GetStudentsForClassInSchoolType$outboundSchema;
}

/** @internal */
export const GetStudentsForClassInSchoolAgent$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolAgent,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: GetStudentsForClassInSchoolType$inboundSchema,
});

/** @internal */
export type GetStudentsForClassInSchoolAgent$Outbound = {
  href: string;
  sourcedId: string;
  type: string;
};

/** @internal */
export const GetStudentsForClassInSchoolAgent$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolAgent$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolAgent
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: GetStudentsForClassInSchoolType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolAgent$ {
  /** @deprecated use `GetStudentsForClassInSchoolAgent$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolAgent$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolAgent$outboundSchema` instead. */
  export const outboundSchema = GetStudentsForClassInSchoolAgent$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolAgent$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolAgent$Outbound;
}

export function getStudentsForClassInSchoolAgentToJSON(
  getStudentsForClassInSchoolAgent: GetStudentsForClassInSchoolAgent,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolAgent$outboundSchema.parse(
      getStudentsForClassInSchoolAgent,
    ),
  );
}

export function getStudentsForClassInSchoolAgentFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolAgent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStudentsForClassInSchoolAgent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolAgent' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolPrimaryOrg$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolPrimaryOrg,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/** @internal */
export type GetStudentsForClassInSchoolPrimaryOrg$Outbound = {
  href: string;
  sourcedId: string;
  type: string;
};

/** @internal */
export const GetStudentsForClassInSchoolPrimaryOrg$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolPrimaryOrg$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolPrimaryOrg
> = z.object({
  href: z.string(),
  sourcedId: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolPrimaryOrg$ {
  /** @deprecated use `GetStudentsForClassInSchoolPrimaryOrg$inboundSchema` instead. */
  export const inboundSchema =
    GetStudentsForClassInSchoolPrimaryOrg$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolPrimaryOrg$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolPrimaryOrg$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolPrimaryOrg$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolPrimaryOrg$Outbound;
}

export function getStudentsForClassInSchoolPrimaryOrgToJSON(
  getStudentsForClassInSchoolPrimaryOrg: GetStudentsForClassInSchoolPrimaryOrg,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolPrimaryOrg$outboundSchema.parse(
      getStudentsForClassInSchoolPrimaryOrg,
    ),
  );
}

export function getStudentsForClassInSchoolPrimaryOrgFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolPrimaryOrg, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetStudentsForClassInSchoolPrimaryOrg$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolPrimaryOrg' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolUser$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  status: GetStudentsForClassInSchoolStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  userMasterIdentifier: z.nullable(z.string()).optional(),
  username: z.nullable(z.string()).optional(),
  userIds: z.array(
    z.lazy(() => GetStudentsForClassInSchoolUserId$inboundSchema),
  ).optional(),
  enabledUser: z.boolean(),
  givenName: z.string(),
  familyName: z.string(),
  middleName: z.nullable(z.string()).optional(),
  roles: z.array(z.lazy(() => GetStudentsForClassInSchoolRole$inboundSchema)),
  agents: z.array(z.lazy(() => GetStudentsForClassInSchoolAgent$inboundSchema)),
  primaryOrg: z.lazy(() => GetStudentsForClassInSchoolPrimaryOrg$inboundSchema)
    .optional(),
  email: z.nullable(z.string()).optional(),
  preferredFirstName: z.nullable(z.string()).optional(),
  preferredMiddleName: z.nullable(z.string()).optional(),
  preferredLastName: z.nullable(z.string()).optional(),
  pronouns: z.nullable(z.string()).optional(),
  grades: z.array(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  sms: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
});

/** @internal */
export type GetStudentsForClassInSchoolUser$Outbound = {
  sourcedId: string;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  userMasterIdentifier?: string | null | undefined;
  username?: string | null | undefined;
  userIds?: Array<GetStudentsForClassInSchoolUserId$Outbound> | undefined;
  enabledUser: boolean;
  givenName: string;
  familyName: string;
  middleName?: string | null | undefined;
  roles: Array<GetStudentsForClassInSchoolRole$Outbound>;
  agents: Array<GetStudentsForClassInSchoolAgent$Outbound>;
  primaryOrg?: GetStudentsForClassInSchoolPrimaryOrg$Outbound | undefined;
  email?: string | null | undefined;
  preferredFirstName?: string | null | undefined;
  preferredMiddleName?: string | null | undefined;
  preferredLastName?: string | null | undefined;
  pronouns?: string | null | undefined;
  grades?: Array<string> | undefined;
  password?: string | null | undefined;
  sms?: string | null | undefined;
  phone?: string | null | undefined;
};

/** @internal */
export const GetStudentsForClassInSchoolUser$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolUser$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolUser
> = z.object({
  sourcedId: z.string(),
  status: GetStudentsForClassInSchoolStatus$outboundSchema,
  dateLastModified: z.date().transform(v => v.toISOString()).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  userMasterIdentifier: z.nullable(z.string()).optional(),
  username: z.nullable(z.string()).optional(),
  userIds: z.array(
    z.lazy(() => GetStudentsForClassInSchoolUserId$outboundSchema),
  ).optional(),
  enabledUser: z.boolean(),
  givenName: z.string(),
  familyName: z.string(),
  middleName: z.nullable(z.string()).optional(),
  roles: z.array(z.lazy(() => GetStudentsForClassInSchoolRole$outboundSchema)),
  agents: z.array(
    z.lazy(() => GetStudentsForClassInSchoolAgent$outboundSchema),
  ),
  primaryOrg: z.lazy(() => GetStudentsForClassInSchoolPrimaryOrg$outboundSchema)
    .optional(),
  email: z.nullable(z.string()).optional(),
  preferredFirstName: z.nullable(z.string()).optional(),
  preferredMiddleName: z.nullable(z.string()).optional(),
  preferredLastName: z.nullable(z.string()).optional(),
  pronouns: z.nullable(z.string()).optional(),
  grades: z.array(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  sms: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolUser$ {
  /** @deprecated use `GetStudentsForClassInSchoolUser$inboundSchema` instead. */
  export const inboundSchema = GetStudentsForClassInSchoolUser$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolUser$outboundSchema` instead. */
  export const outboundSchema = GetStudentsForClassInSchoolUser$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolUser$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolUser$Outbound;
}

export function getStudentsForClassInSchoolUserToJSON(
  getStudentsForClassInSchoolUser: GetStudentsForClassInSchoolUser,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolUser$outboundSchema.parse(
      getStudentsForClassInSchoolUser,
    ),
  );
}

export function getStudentsForClassInSchoolUserFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStudentsForClassInSchoolUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolUser' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolResponseBody$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  users: z.array(z.lazy(() => GetStudentsForClassInSchoolUser$inboundSchema)),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetStudentsForClassInSchoolResponseBody$Outbound = {
  users: Array<GetStudentsForClassInSchoolUser$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetStudentsForClassInSchoolResponseBody$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolResponseBody$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolResponseBody
> = z.object({
  users: z.array(z.lazy(() => GetStudentsForClassInSchoolUser$outboundSchema)),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolResponseBody$ {
  /** @deprecated use `GetStudentsForClassInSchoolResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetStudentsForClassInSchoolResponseBody$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolResponseBody$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolResponseBody$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolResponseBody$Outbound;
}

export function getStudentsForClassInSchoolResponseBodyToJSON(
  getStudentsForClassInSchoolResponseBody:
    GetStudentsForClassInSchoolResponseBody,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolResponseBody$outboundSchema.parse(
      getStudentsForClassInSchoolResponseBody,
    ),
  );
}

export function getStudentsForClassInSchoolResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetStudentsForClassInSchoolResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetStudentsForClassInSchoolResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetStudentsForClassInSchoolResponseBody' from JSON`,
  );
}

/** @internal */
export const GetStudentsForClassInSchoolResponse$inboundSchema: z.ZodType<
  GetStudentsForClassInSchoolResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetStudentsForClassInSchoolResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetStudentsForClassInSchoolResponse$Outbound = {
  Result: GetStudentsForClassInSchoolResponseBody$Outbound;
};

/** @internal */
export const GetStudentsForClassInSchoolResponse$outboundSchema: z.ZodType<
  GetStudentsForClassInSchoolResponse$Outbound,
  z.ZodTypeDef,
  GetStudentsForClassInSchoolResponse
> = z.object({
  result: z.lazy(() => GetStudentsForClassInSchoolResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStudentsForClassInSchoolResponse$ {
  /** @deprecated use `GetStudentsForClassInSchoolResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetStudentsForClassInSchoolResponse$inboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetStudentsForClassInSchoolResponse$outboundSchema;
  /** @deprecated use `GetStudentsForClassInSchoolResponse$Outbound` instead. */
  export type Outbound = GetStudentsForClassInSchoolResponse$Outbound;
}

export function getStudentsForClassInSchoolResponseToJSON(
  getStudentsForClassInSchoolResponse: GetStudentsForClassInSchoolResponse,
): string {
  return JSON.stringify(
    GetStudentsForClassInSchoolResponse$outboundSchema.parse(
      getStudentsForClassInSchoolResponse,
    ),
  );
}

export function getStudentsForClassInSchoolResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetStudentsForClassInSchoolResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetStudentsForClassInSchoolResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStudentsForClassInSchoolResponse' from JSON`,
  );
}
