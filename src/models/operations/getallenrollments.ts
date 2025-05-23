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
export const GetAllEnrollmentsOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetAllEnrollmentsOrderBy = ClosedEnum<
  typeof GetAllEnrollmentsOrderBy
>;

export type GetAllEnrollmentsRequest = {
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
  orderBy?: GetAllEnrollmentsOrderBy | undefined;
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
 * Successful response
 */
export type GetAllEnrollmentsResponseBody = {
  enrollments: Array<components.Enrollment>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetAllEnrollmentsResponse = {
  result: GetAllEnrollmentsResponseBody;
};

/** @internal */
export const GetAllEnrollmentsOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetAllEnrollmentsOrderBy
> = z.nativeEnum(GetAllEnrollmentsOrderBy);

/** @internal */
export const GetAllEnrollmentsOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetAllEnrollmentsOrderBy
> = GetAllEnrollmentsOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllEnrollmentsOrderBy$ {
  /** @deprecated use `GetAllEnrollmentsOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetAllEnrollmentsOrderBy$inboundSchema;
  /** @deprecated use `GetAllEnrollmentsOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetAllEnrollmentsOrderBy$outboundSchema;
}

/** @internal */
export const GetAllEnrollmentsRequest$inboundSchema: z.ZodType<
  GetAllEnrollmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllEnrollmentsOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetAllEnrollmentsRequest$Outbound = {
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetAllEnrollmentsRequest$outboundSchema: z.ZodType<
  GetAllEnrollmentsRequest$Outbound,
  z.ZodTypeDef,
  GetAllEnrollmentsRequest
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllEnrollmentsOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllEnrollmentsRequest$ {
  /** @deprecated use `GetAllEnrollmentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllEnrollmentsRequest$inboundSchema;
  /** @deprecated use `GetAllEnrollmentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllEnrollmentsRequest$outboundSchema;
  /** @deprecated use `GetAllEnrollmentsRequest$Outbound` instead. */
  export type Outbound = GetAllEnrollmentsRequest$Outbound;
}

export function getAllEnrollmentsRequestToJSON(
  getAllEnrollmentsRequest: GetAllEnrollmentsRequest,
): string {
  return JSON.stringify(
    GetAllEnrollmentsRequest$outboundSchema.parse(getAllEnrollmentsRequest),
  );
}

export function getAllEnrollmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllEnrollmentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllEnrollmentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllEnrollmentsRequest' from JSON`,
  );
}

/** @internal */
export const GetAllEnrollmentsResponseBody$inboundSchema: z.ZodType<
  GetAllEnrollmentsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  enrollments: z.array(components.Enrollment$inboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetAllEnrollmentsResponseBody$Outbound = {
  enrollments: Array<components.Enrollment$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetAllEnrollmentsResponseBody$outboundSchema: z.ZodType<
  GetAllEnrollmentsResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllEnrollmentsResponseBody
> = z.object({
  enrollments: z.array(components.Enrollment$outboundSchema),
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
export namespace GetAllEnrollmentsResponseBody$ {
  /** @deprecated use `GetAllEnrollmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllEnrollmentsResponseBody$inboundSchema;
  /** @deprecated use `GetAllEnrollmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllEnrollmentsResponseBody$outboundSchema;
  /** @deprecated use `GetAllEnrollmentsResponseBody$Outbound` instead. */
  export type Outbound = GetAllEnrollmentsResponseBody$Outbound;
}

export function getAllEnrollmentsResponseBodyToJSON(
  getAllEnrollmentsResponseBody: GetAllEnrollmentsResponseBody,
): string {
  return JSON.stringify(
    GetAllEnrollmentsResponseBody$outboundSchema.parse(
      getAllEnrollmentsResponseBody,
    ),
  );
}

export function getAllEnrollmentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllEnrollmentsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllEnrollmentsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllEnrollmentsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAllEnrollmentsResponse$inboundSchema: z.ZodType<
  GetAllEnrollmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetAllEnrollmentsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetAllEnrollmentsResponse$Outbound = {
  Result: GetAllEnrollmentsResponseBody$Outbound;
};

/** @internal */
export const GetAllEnrollmentsResponse$outboundSchema: z.ZodType<
  GetAllEnrollmentsResponse$Outbound,
  z.ZodTypeDef,
  GetAllEnrollmentsResponse
> = z.object({
  result: z.lazy(() => GetAllEnrollmentsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllEnrollmentsResponse$ {
  /** @deprecated use `GetAllEnrollmentsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllEnrollmentsResponse$inboundSchema;
  /** @deprecated use `GetAllEnrollmentsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllEnrollmentsResponse$outboundSchema;
  /** @deprecated use `GetAllEnrollmentsResponse$Outbound` instead. */
  export type Outbound = GetAllEnrollmentsResponse$Outbound;
}

export function getAllEnrollmentsResponseToJSON(
  getAllEnrollmentsResponse: GetAllEnrollmentsResponse,
): string {
  return JSON.stringify(
    GetAllEnrollmentsResponse$outboundSchema.parse(getAllEnrollmentsResponse),
  );
}

export function getAllEnrollmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllEnrollmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllEnrollmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllEnrollmentsResponse' from JSON`,
  );
}
