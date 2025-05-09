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
export const GetAllGradingPeriodsOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetAllGradingPeriodsOrderBy = ClosedEnum<
  typeof GetAllGradingPeriodsOrderBy
>;

export type GetAllGradingPeriodsRequest = {
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
  orderBy?: GetAllGradingPeriodsOrderBy | undefined;
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
 * Success
 */
export type GetAllGradingPeriodsResponseBody = {
  gradingPeriods: Array<components.AcademicSession>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetAllGradingPeriodsResponse = {
  result: GetAllGradingPeriodsResponseBody;
};

/** @internal */
export const GetAllGradingPeriodsOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetAllGradingPeriodsOrderBy
> = z.nativeEnum(GetAllGradingPeriodsOrderBy);

/** @internal */
export const GetAllGradingPeriodsOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetAllGradingPeriodsOrderBy
> = GetAllGradingPeriodsOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllGradingPeriodsOrderBy$ {
  /** @deprecated use `GetAllGradingPeriodsOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetAllGradingPeriodsOrderBy$inboundSchema;
  /** @deprecated use `GetAllGradingPeriodsOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetAllGradingPeriodsOrderBy$outboundSchema;
}

/** @internal */
export const GetAllGradingPeriodsRequest$inboundSchema: z.ZodType<
  GetAllGradingPeriodsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllGradingPeriodsOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetAllGradingPeriodsRequest$Outbound = {
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetAllGradingPeriodsRequest$outboundSchema: z.ZodType<
  GetAllGradingPeriodsRequest$Outbound,
  z.ZodTypeDef,
  GetAllGradingPeriodsRequest
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllGradingPeriodsOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllGradingPeriodsRequest$ {
  /** @deprecated use `GetAllGradingPeriodsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllGradingPeriodsRequest$inboundSchema;
  /** @deprecated use `GetAllGradingPeriodsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllGradingPeriodsRequest$outboundSchema;
  /** @deprecated use `GetAllGradingPeriodsRequest$Outbound` instead. */
  export type Outbound = GetAllGradingPeriodsRequest$Outbound;
}

export function getAllGradingPeriodsRequestToJSON(
  getAllGradingPeriodsRequest: GetAllGradingPeriodsRequest,
): string {
  return JSON.stringify(
    GetAllGradingPeriodsRequest$outboundSchema.parse(
      getAllGradingPeriodsRequest,
    ),
  );
}

export function getAllGradingPeriodsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllGradingPeriodsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllGradingPeriodsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllGradingPeriodsRequest' from JSON`,
  );
}

/** @internal */
export const GetAllGradingPeriodsResponseBody$inboundSchema: z.ZodType<
  GetAllGradingPeriodsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  gradingPeriods: z.array(components.AcademicSession$inboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetAllGradingPeriodsResponseBody$Outbound = {
  gradingPeriods: Array<components.AcademicSession$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetAllGradingPeriodsResponseBody$outboundSchema: z.ZodType<
  GetAllGradingPeriodsResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllGradingPeriodsResponseBody
> = z.object({
  gradingPeriods: z.array(components.AcademicSession$outboundSchema),
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
export namespace GetAllGradingPeriodsResponseBody$ {
  /** @deprecated use `GetAllGradingPeriodsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllGradingPeriodsResponseBody$inboundSchema;
  /** @deprecated use `GetAllGradingPeriodsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllGradingPeriodsResponseBody$outboundSchema;
  /** @deprecated use `GetAllGradingPeriodsResponseBody$Outbound` instead. */
  export type Outbound = GetAllGradingPeriodsResponseBody$Outbound;
}

export function getAllGradingPeriodsResponseBodyToJSON(
  getAllGradingPeriodsResponseBody: GetAllGradingPeriodsResponseBody,
): string {
  return JSON.stringify(
    GetAllGradingPeriodsResponseBody$outboundSchema.parse(
      getAllGradingPeriodsResponseBody,
    ),
  );
}

export function getAllGradingPeriodsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllGradingPeriodsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllGradingPeriodsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllGradingPeriodsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAllGradingPeriodsResponse$inboundSchema: z.ZodType<
  GetAllGradingPeriodsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetAllGradingPeriodsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetAllGradingPeriodsResponse$Outbound = {
  Result: GetAllGradingPeriodsResponseBody$Outbound;
};

/** @internal */
export const GetAllGradingPeriodsResponse$outboundSchema: z.ZodType<
  GetAllGradingPeriodsResponse$Outbound,
  z.ZodTypeDef,
  GetAllGradingPeriodsResponse
> = z.object({
  result: z.lazy(() => GetAllGradingPeriodsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllGradingPeriodsResponse$ {
  /** @deprecated use `GetAllGradingPeriodsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllGradingPeriodsResponse$inboundSchema;
  /** @deprecated use `GetAllGradingPeriodsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllGradingPeriodsResponse$outboundSchema;
  /** @deprecated use `GetAllGradingPeriodsResponse$Outbound` instead. */
  export type Outbound = GetAllGradingPeriodsResponse$Outbound;
}

export function getAllGradingPeriodsResponseToJSON(
  getAllGradingPeriodsResponse: GetAllGradingPeriodsResponse,
): string {
  return JSON.stringify(
    GetAllGradingPeriodsResponse$outboundSchema.parse(
      getAllGradingPeriodsResponse,
    ),
  );
}

export function getAllGradingPeriodsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllGradingPeriodsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllGradingPeriodsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllGradingPeriodsResponse' from JSON`,
  );
}
