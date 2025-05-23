/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PutAcademicSessionStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type PutAcademicSessionStatus = ClosedEnum<
  typeof PutAcademicSessionStatus
>;

export const PutAcademicSessionType = {
  GradingPeriod: "gradingPeriod",
  Semester: "semester",
  SchoolYear: "schoolYear",
  Term: "term",
} as const;
export type PutAcademicSessionType = ClosedEnum<typeof PutAcademicSessionType>;

export type PutAcademicSessionParent = {
  sourcedId: string;
};

export type PutAcademicSessionOrg = {
  sourcedId: string;
};

export type PutAcademicSessionAcademicSession = {
  sourcedId?: string | undefined;
  status?: PutAcademicSessionStatus | undefined;
  metadata?: { [k: string]: any } | undefined;
  title: string;
  startDate: string;
  endDate: string;
  type: PutAcademicSessionType;
  parent?: PutAcademicSessionParent | null | undefined;
  schoolYear: string;
  org: PutAcademicSessionOrg;
};

export type PutAcademicSessionRequestBody = {
  academicSession: PutAcademicSessionAcademicSession;
};

export type PutAcademicSessionRequest = {
  /**
   * The sourcedId of the academic session to update
   */
  sourcedId: string;
  requestBody?: PutAcademicSessionRequestBody | undefined;
};

/** @internal */
export const PutAcademicSessionStatus$inboundSchema: z.ZodNativeEnum<
  typeof PutAcademicSessionStatus
> = z.nativeEnum(PutAcademicSessionStatus);

/** @internal */
export const PutAcademicSessionStatus$outboundSchema: z.ZodNativeEnum<
  typeof PutAcademicSessionStatus
> = PutAcademicSessionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionStatus$ {
  /** @deprecated use `PutAcademicSessionStatus$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionStatus$inboundSchema;
  /** @deprecated use `PutAcademicSessionStatus$outboundSchema` instead. */
  export const outboundSchema = PutAcademicSessionStatus$outboundSchema;
}

/** @internal */
export const PutAcademicSessionType$inboundSchema: z.ZodNativeEnum<
  typeof PutAcademicSessionType
> = z.nativeEnum(PutAcademicSessionType);

/** @internal */
export const PutAcademicSessionType$outboundSchema: z.ZodNativeEnum<
  typeof PutAcademicSessionType
> = PutAcademicSessionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionType$ {
  /** @deprecated use `PutAcademicSessionType$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionType$inboundSchema;
  /** @deprecated use `PutAcademicSessionType$outboundSchema` instead. */
  export const outboundSchema = PutAcademicSessionType$outboundSchema;
}

/** @internal */
export const PutAcademicSessionParent$inboundSchema: z.ZodType<
  PutAcademicSessionParent,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type PutAcademicSessionParent$Outbound = {
  sourcedId: string;
};

/** @internal */
export const PutAcademicSessionParent$outboundSchema: z.ZodType<
  PutAcademicSessionParent$Outbound,
  z.ZodTypeDef,
  PutAcademicSessionParent
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionParent$ {
  /** @deprecated use `PutAcademicSessionParent$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionParent$inboundSchema;
  /** @deprecated use `PutAcademicSessionParent$outboundSchema` instead. */
  export const outboundSchema = PutAcademicSessionParent$outboundSchema;
  /** @deprecated use `PutAcademicSessionParent$Outbound` instead. */
  export type Outbound = PutAcademicSessionParent$Outbound;
}

export function putAcademicSessionParentToJSON(
  putAcademicSessionParent: PutAcademicSessionParent,
): string {
  return JSON.stringify(
    PutAcademicSessionParent$outboundSchema.parse(putAcademicSessionParent),
  );
}

export function putAcademicSessionParentFromJSON(
  jsonString: string,
): SafeParseResult<PutAcademicSessionParent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutAcademicSessionParent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutAcademicSessionParent' from JSON`,
  );
}

/** @internal */
export const PutAcademicSessionOrg$inboundSchema: z.ZodType<
  PutAcademicSessionOrg,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type PutAcademicSessionOrg$Outbound = {
  sourcedId: string;
};

/** @internal */
export const PutAcademicSessionOrg$outboundSchema: z.ZodType<
  PutAcademicSessionOrg$Outbound,
  z.ZodTypeDef,
  PutAcademicSessionOrg
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionOrg$ {
  /** @deprecated use `PutAcademicSessionOrg$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionOrg$inboundSchema;
  /** @deprecated use `PutAcademicSessionOrg$outboundSchema` instead. */
  export const outboundSchema = PutAcademicSessionOrg$outboundSchema;
  /** @deprecated use `PutAcademicSessionOrg$Outbound` instead. */
  export type Outbound = PutAcademicSessionOrg$Outbound;
}

export function putAcademicSessionOrgToJSON(
  putAcademicSessionOrg: PutAcademicSessionOrg,
): string {
  return JSON.stringify(
    PutAcademicSessionOrg$outboundSchema.parse(putAcademicSessionOrg),
  );
}

export function putAcademicSessionOrgFromJSON(
  jsonString: string,
): SafeParseResult<PutAcademicSessionOrg, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutAcademicSessionOrg$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutAcademicSessionOrg' from JSON`,
  );
}

/** @internal */
export const PutAcademicSessionAcademicSession$inboundSchema: z.ZodType<
  PutAcademicSessionAcademicSession,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string().optional(),
  status: PutAcademicSessionStatus$inboundSchema.default("active"),
  metadata: z.record(z.any()).optional(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  type: PutAcademicSessionType$inboundSchema,
  parent: z.nullable(z.lazy(() => PutAcademicSessionParent$inboundSchema))
    .optional(),
  schoolYear: z.string(),
  org: z.lazy(() => PutAcademicSessionOrg$inboundSchema),
});

/** @internal */
export type PutAcademicSessionAcademicSession$Outbound = {
  sourcedId?: string | undefined;
  status: string;
  metadata?: { [k: string]: any } | undefined;
  title: string;
  startDate: string;
  endDate: string;
  type: string;
  parent?: PutAcademicSessionParent$Outbound | null | undefined;
  schoolYear: string;
  org: PutAcademicSessionOrg$Outbound;
};

/** @internal */
export const PutAcademicSessionAcademicSession$outboundSchema: z.ZodType<
  PutAcademicSessionAcademicSession$Outbound,
  z.ZodTypeDef,
  PutAcademicSessionAcademicSession
> = z.object({
  sourcedId: z.string().optional(),
  status: PutAcademicSessionStatus$outboundSchema.default("active"),
  metadata: z.record(z.any()).optional(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  type: PutAcademicSessionType$outboundSchema,
  parent: z.nullable(z.lazy(() => PutAcademicSessionParent$outboundSchema))
    .optional(),
  schoolYear: z.string(),
  org: z.lazy(() => PutAcademicSessionOrg$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionAcademicSession$ {
  /** @deprecated use `PutAcademicSessionAcademicSession$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionAcademicSession$inboundSchema;
  /** @deprecated use `PutAcademicSessionAcademicSession$outboundSchema` instead. */
  export const outboundSchema =
    PutAcademicSessionAcademicSession$outboundSchema;
  /** @deprecated use `PutAcademicSessionAcademicSession$Outbound` instead. */
  export type Outbound = PutAcademicSessionAcademicSession$Outbound;
}

export function putAcademicSessionAcademicSessionToJSON(
  putAcademicSessionAcademicSession: PutAcademicSessionAcademicSession,
): string {
  return JSON.stringify(
    PutAcademicSessionAcademicSession$outboundSchema.parse(
      putAcademicSessionAcademicSession,
    ),
  );
}

export function putAcademicSessionAcademicSessionFromJSON(
  jsonString: string,
): SafeParseResult<PutAcademicSessionAcademicSession, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutAcademicSessionAcademicSession$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutAcademicSessionAcademicSession' from JSON`,
  );
}

/** @internal */
export const PutAcademicSessionRequestBody$inboundSchema: z.ZodType<
  PutAcademicSessionRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  academicSession: z.lazy(() =>
    PutAcademicSessionAcademicSession$inboundSchema
  ),
});

/** @internal */
export type PutAcademicSessionRequestBody$Outbound = {
  academicSession: PutAcademicSessionAcademicSession$Outbound;
};

/** @internal */
export const PutAcademicSessionRequestBody$outboundSchema: z.ZodType<
  PutAcademicSessionRequestBody$Outbound,
  z.ZodTypeDef,
  PutAcademicSessionRequestBody
> = z.object({
  academicSession: z.lazy(() =>
    PutAcademicSessionAcademicSession$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionRequestBody$ {
  /** @deprecated use `PutAcademicSessionRequestBody$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionRequestBody$inboundSchema;
  /** @deprecated use `PutAcademicSessionRequestBody$outboundSchema` instead. */
  export const outboundSchema = PutAcademicSessionRequestBody$outboundSchema;
  /** @deprecated use `PutAcademicSessionRequestBody$Outbound` instead. */
  export type Outbound = PutAcademicSessionRequestBody$Outbound;
}

export function putAcademicSessionRequestBodyToJSON(
  putAcademicSessionRequestBody: PutAcademicSessionRequestBody,
): string {
  return JSON.stringify(
    PutAcademicSessionRequestBody$outboundSchema.parse(
      putAcademicSessionRequestBody,
    ),
  );
}

export function putAcademicSessionRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PutAcademicSessionRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutAcademicSessionRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutAcademicSessionRequestBody' from JSON`,
  );
}

/** @internal */
export const PutAcademicSessionRequest$inboundSchema: z.ZodType<
  PutAcademicSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  RequestBody: z.lazy(() => PutAcademicSessionRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PutAcademicSessionRequest$Outbound = {
  sourcedId: string;
  RequestBody?: PutAcademicSessionRequestBody$Outbound | undefined;
};

/** @internal */
export const PutAcademicSessionRequest$outboundSchema: z.ZodType<
  PutAcademicSessionRequest$Outbound,
  z.ZodTypeDef,
  PutAcademicSessionRequest
> = z.object({
  sourcedId: z.string(),
  requestBody: z.lazy(() => PutAcademicSessionRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutAcademicSessionRequest$ {
  /** @deprecated use `PutAcademicSessionRequest$inboundSchema` instead. */
  export const inboundSchema = PutAcademicSessionRequest$inboundSchema;
  /** @deprecated use `PutAcademicSessionRequest$outboundSchema` instead. */
  export const outboundSchema = PutAcademicSessionRequest$outboundSchema;
  /** @deprecated use `PutAcademicSessionRequest$Outbound` instead. */
  export type Outbound = PutAcademicSessionRequest$Outbound;
}

export function putAcademicSessionRequestToJSON(
  putAcademicSessionRequest: PutAcademicSessionRequest,
): string {
  return JSON.stringify(
    PutAcademicSessionRequest$outboundSchema.parse(putAcademicSessionRequest),
  );
}

export function putAcademicSessionRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutAcademicSessionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutAcademicSessionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutAcademicSessionRequest' from JSON`,
  );
}
