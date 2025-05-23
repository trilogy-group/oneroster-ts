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
export const GetCategoriesForClassOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetCategoriesForClassOrderBy = ClosedEnum<
  typeof GetCategoriesForClassOrderBy
>;

export type GetCategoriesForClassRequest = {
  /**
   * The sourcedId of the class
   */
  sourcedId: string;
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
  orderBy?: GetCategoriesForClassOrderBy | undefined;
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
 * Successful response containing a collection of categories for the class
 */
export type GetCategoriesForClassResponseBody = {
  categories: Array<components.Category>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetCategoriesForClassResponse = {
  result: GetCategoriesForClassResponseBody;
};

/** @internal */
export const GetCategoriesForClassOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetCategoriesForClassOrderBy
> = z.nativeEnum(GetCategoriesForClassOrderBy);

/** @internal */
export const GetCategoriesForClassOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetCategoriesForClassOrderBy
> = GetCategoriesForClassOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoriesForClassOrderBy$ {
  /** @deprecated use `GetCategoriesForClassOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetCategoriesForClassOrderBy$inboundSchema;
  /** @deprecated use `GetCategoriesForClassOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetCategoriesForClassOrderBy$outboundSchema;
}

/** @internal */
export const GetCategoriesForClassRequest$inboundSchema: z.ZodType<
  GetCategoriesForClassRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetCategoriesForClassOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetCategoriesForClassRequest$Outbound = {
  sourcedId: string;
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetCategoriesForClassRequest$outboundSchema: z.ZodType<
  GetCategoriesForClassRequest$Outbound,
  z.ZodTypeDef,
  GetCategoriesForClassRequest
> = z.object({
  sourcedId: z.string(),
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetCategoriesForClassOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoriesForClassRequest$ {
  /** @deprecated use `GetCategoriesForClassRequest$inboundSchema` instead. */
  export const inboundSchema = GetCategoriesForClassRequest$inboundSchema;
  /** @deprecated use `GetCategoriesForClassRequest$outboundSchema` instead. */
  export const outboundSchema = GetCategoriesForClassRequest$outboundSchema;
  /** @deprecated use `GetCategoriesForClassRequest$Outbound` instead. */
  export type Outbound = GetCategoriesForClassRequest$Outbound;
}

export function getCategoriesForClassRequestToJSON(
  getCategoriesForClassRequest: GetCategoriesForClassRequest,
): string {
  return JSON.stringify(
    GetCategoriesForClassRequest$outboundSchema.parse(
      getCategoriesForClassRequest,
    ),
  );
}

export function getCategoriesForClassRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCategoriesForClassRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCategoriesForClassRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCategoriesForClassRequest' from JSON`,
  );
}

/** @internal */
export const GetCategoriesForClassResponseBody$inboundSchema: z.ZodType<
  GetCategoriesForClassResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  categories: z.array(components.Category$inboundSchema),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetCategoriesForClassResponseBody$Outbound = {
  categories: Array<components.Category$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetCategoriesForClassResponseBody$outboundSchema: z.ZodType<
  GetCategoriesForClassResponseBody$Outbound,
  z.ZodTypeDef,
  GetCategoriesForClassResponseBody
> = z.object({
  categories: z.array(components.Category$outboundSchema),
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
export namespace GetCategoriesForClassResponseBody$ {
  /** @deprecated use `GetCategoriesForClassResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetCategoriesForClassResponseBody$inboundSchema;
  /** @deprecated use `GetCategoriesForClassResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetCategoriesForClassResponseBody$outboundSchema;
  /** @deprecated use `GetCategoriesForClassResponseBody$Outbound` instead. */
  export type Outbound = GetCategoriesForClassResponseBody$Outbound;
}

export function getCategoriesForClassResponseBodyToJSON(
  getCategoriesForClassResponseBody: GetCategoriesForClassResponseBody,
): string {
  return JSON.stringify(
    GetCategoriesForClassResponseBody$outboundSchema.parse(
      getCategoriesForClassResponseBody,
    ),
  );
}

export function getCategoriesForClassResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetCategoriesForClassResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCategoriesForClassResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCategoriesForClassResponseBody' from JSON`,
  );
}

/** @internal */
export const GetCategoriesForClassResponse$inboundSchema: z.ZodType<
  GetCategoriesForClassResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetCategoriesForClassResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetCategoriesForClassResponse$Outbound = {
  Result: GetCategoriesForClassResponseBody$Outbound;
};

/** @internal */
export const GetCategoriesForClassResponse$outboundSchema: z.ZodType<
  GetCategoriesForClassResponse$Outbound,
  z.ZodTypeDef,
  GetCategoriesForClassResponse
> = z.object({
  result: z.lazy(() => GetCategoriesForClassResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCategoriesForClassResponse$ {
  /** @deprecated use `GetCategoriesForClassResponse$inboundSchema` instead. */
  export const inboundSchema = GetCategoriesForClassResponse$inboundSchema;
  /** @deprecated use `GetCategoriesForClassResponse$outboundSchema` instead. */
  export const outboundSchema = GetCategoriesForClassResponse$outboundSchema;
  /** @deprecated use `GetCategoriesForClassResponse$Outbound` instead. */
  export type Outbound = GetCategoriesForClassResponse$Outbound;
}

export function getCategoriesForClassResponseToJSON(
  getCategoriesForClassResponse: GetCategoriesForClassResponse,
): string {
  return JSON.stringify(
    GetCategoriesForClassResponse$outboundSchema.parse(
      getCategoriesForClassResponse,
    ),
  );
}

export function getCategoriesForClassResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCategoriesForClassResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCategoriesForClassResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCategoriesForClassResponse' from JSON`,
  );
}
