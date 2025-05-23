/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The order to sort the response by
 */
export const GetClassesForTeacherOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetClassesForTeacherOrderBy = ClosedEnum<
  typeof GetClassesForTeacherOrderBy
>;

export type GetClassesForTeacherRequest = {
  /**
   * The sourcedId of the teacher
   */
  teacherSourcedId: string;
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
  orderBy?: GetClassesForTeacherOrderBy | undefined;
  /**
   * The filter to apply to the response
   */
  filter?: string | undefined;
  /**
   * The search query to apply to the response
   */
  search?: string | undefined;
};

/**
 * Successful response containing a collection of classes for the teacher
 */
export type GetClassesForTeacherResponseBody = {
  classes: Array<components.Class>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetClassesForTeacherResponse = {
  result: GetClassesForTeacherResponseBody;
};

/** @internal */
export const GetClassesForTeacherOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetClassesForTeacherOrderBy
> = z.nativeEnum(GetClassesForTeacherOrderBy);

/** @internal */
export const GetClassesForTeacherOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetClassesForTeacherOrderBy
> = GetClassesForTeacherOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClassesForTeacherOrderBy$ {
  /** @deprecated use `GetClassesForTeacherOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetClassesForTeacherOrderBy$inboundSchema;
  /** @deprecated use `GetClassesForTeacherOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetClassesForTeacherOrderBy$outboundSchema;
}

/** @internal */
export const GetClassesForTeacherRequest$inboundSchema: z.ZodType<
  GetClassesForTeacherRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teacherSourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetClassesForTeacherOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetClassesForTeacherRequest$Outbound = {
  teacherSourcedId: string;
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetClassesForTeacherRequest$outboundSchema: z.ZodType<
  GetClassesForTeacherRequest$Outbound,
  z.ZodTypeDef,
  GetClassesForTeacherRequest
> = z.object({
  teacherSourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetClassesForTeacherOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClassesForTeacherRequest$ {
  /** @deprecated use `GetClassesForTeacherRequest$inboundSchema` instead. */
  export const inboundSchema = GetClassesForTeacherRequest$inboundSchema;
  /** @deprecated use `GetClassesForTeacherRequest$outboundSchema` instead. */
  export const outboundSchema = GetClassesForTeacherRequest$outboundSchema;
  /** @deprecated use `GetClassesForTeacherRequest$Outbound` instead. */
  export type Outbound = GetClassesForTeacherRequest$Outbound;
}

export function getClassesForTeacherRequestToJSON(
  getClassesForTeacherRequest: GetClassesForTeacherRequest,
): string {
  return JSON.stringify(
    GetClassesForTeacherRequest$outboundSchema.parse(
      getClassesForTeacherRequest,
    ),
  );
}

export function getClassesForTeacherRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetClassesForTeacherRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClassesForTeacherRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClassesForTeacherRequest' from JSON`,
  );
}

/** @internal */
export const GetClassesForTeacherResponseBody$inboundSchema: z.ZodType<
  GetClassesForTeacherResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  classes: z.array(components.Class$inboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetClassesForTeacherResponseBody$Outbound = {
  classes: Array<components.Class$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetClassesForTeacherResponseBody$outboundSchema: z.ZodType<
  GetClassesForTeacherResponseBody$Outbound,
  z.ZodTypeDef,
  GetClassesForTeacherResponseBody
> = z.object({
  classes: z.array(components.Class$outboundSchema),
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
export namespace GetClassesForTeacherResponseBody$ {
  /** @deprecated use `GetClassesForTeacherResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetClassesForTeacherResponseBody$inboundSchema;
  /** @deprecated use `GetClassesForTeacherResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetClassesForTeacherResponseBody$outboundSchema;
  /** @deprecated use `GetClassesForTeacherResponseBody$Outbound` instead. */
  export type Outbound = GetClassesForTeacherResponseBody$Outbound;
}

export function getClassesForTeacherResponseBodyToJSON(
  getClassesForTeacherResponseBody: GetClassesForTeacherResponseBody,
): string {
  return JSON.stringify(
    GetClassesForTeacherResponseBody$outboundSchema.parse(
      getClassesForTeacherResponseBody,
    ),
  );
}

export function getClassesForTeacherResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetClassesForTeacherResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClassesForTeacherResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClassesForTeacherResponseBody' from JSON`,
  );
}

/** @internal */
export const GetClassesForTeacherResponse$inboundSchema: z.ZodType<
  GetClassesForTeacherResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetClassesForTeacherResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetClassesForTeacherResponse$Outbound = {
  Result: GetClassesForTeacherResponseBody$Outbound;
};

/** @internal */
export const GetClassesForTeacherResponse$outboundSchema: z.ZodType<
  GetClassesForTeacherResponse$Outbound,
  z.ZodTypeDef,
  GetClassesForTeacherResponse
> = z.object({
  result: z.lazy(() => GetClassesForTeacherResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClassesForTeacherResponse$ {
  /** @deprecated use `GetClassesForTeacherResponse$inboundSchema` instead. */
  export const inboundSchema = GetClassesForTeacherResponse$inboundSchema;
  /** @deprecated use `GetClassesForTeacherResponse$outboundSchema` instead. */
  export const outboundSchema = GetClassesForTeacherResponse$outboundSchema;
  /** @deprecated use `GetClassesForTeacherResponse$Outbound` instead. */
  export type Outbound = GetClassesForTeacherResponse$Outbound;
}

export function getClassesForTeacherResponseToJSON(
  getClassesForTeacherResponse: GetClassesForTeacherResponse,
): string {
  return JSON.stringify(
    GetClassesForTeacherResponse$outboundSchema.parse(
      getClassesForTeacherResponse,
    ),
  );
}

export function getClassesForTeacherResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetClassesForTeacherResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClassesForTeacherResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClassesForTeacherResponse' from JSON`,
  );
}
