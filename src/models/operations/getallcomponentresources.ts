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
export const GetAllComponentResourcesOrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order to sort the response by
 */
export type GetAllComponentResourcesOrderBy = ClosedEnum<
  typeof GetAllComponentResourcesOrderBy
>;

export type GetAllComponentResourcesRequest = {
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
  orderBy?: GetAllComponentResourcesOrderBy | undefined;
  /**
   * The filter to apply to the response
   */
  filter?: string | undefined;
  /**
   * The search query to apply to the response
   */
  search?: string | undefined;
};

export const GetAllComponentResourcesStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type GetAllComponentResourcesStatus = ClosedEnum<
  typeof GetAllComponentResourcesStatus
>;

export type GetAllComponentResourcesCourseComponent = {
  sourcedId: string;
};

export type GetAllComponentResourcesResource = {
  sourcedId: string;
};

/**
 * Represents a resource associated with a course component.
 */
export type GetAllComponentResourcesComponentResource = {
  sourcedId: string;
  status: GetAllComponentResourcesStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  courseComponent: GetAllComponentResourcesCourseComponent;
  resource: GetAllComponentResourcesResource;
  title: string;
  sortOrder?: number | undefined;
};

/**
 * Collection of Component Resources
 */
export type GetAllComponentResourcesResponseBody = {
  componentResources: Array<GetAllComponentResourcesComponentResource>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export type GetAllComponentResourcesResponse = {
  result: GetAllComponentResourcesResponseBody;
};

/** @internal */
export const GetAllComponentResourcesOrderBy$inboundSchema: z.ZodNativeEnum<
  typeof GetAllComponentResourcesOrderBy
> = z.nativeEnum(GetAllComponentResourcesOrderBy);

/** @internal */
export const GetAllComponentResourcesOrderBy$outboundSchema: z.ZodNativeEnum<
  typeof GetAllComponentResourcesOrderBy
> = GetAllComponentResourcesOrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesOrderBy$ {
  /** @deprecated use `GetAllComponentResourcesOrderBy$inboundSchema` instead. */
  export const inboundSchema = GetAllComponentResourcesOrderBy$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesOrderBy$outboundSchema` instead. */
  export const outboundSchema = GetAllComponentResourcesOrderBy$outboundSchema;
}

/** @internal */
export const GetAllComponentResourcesRequest$inboundSchema: z.ZodType<
  GetAllComponentResourcesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllComponentResourcesOrderBy$inboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/** @internal */
export type GetAllComponentResourcesRequest$Outbound = {
  fields?: string | undefined;
  limit: number;
  offset: number;
  sort?: string | undefined;
  orderBy?: string | undefined;
  filter?: string | undefined;
  search?: string | undefined;
};

/** @internal */
export const GetAllComponentResourcesRequest$outboundSchema: z.ZodType<
  GetAllComponentResourcesRequest$Outbound,
  z.ZodTypeDef,
  GetAllComponentResourcesRequest
> = z.object({
  fields: z.string().optional(),
  limit: z.number().int().default(100),
  offset: z.number().int().default(0),
  sort: z.string().optional(),
  orderBy: GetAllComponentResourcesOrderBy$outboundSchema.optional(),
  filter: z.string().optional(),
  search: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesRequest$ {
  /** @deprecated use `GetAllComponentResourcesRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllComponentResourcesRequest$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllComponentResourcesRequest$outboundSchema;
  /** @deprecated use `GetAllComponentResourcesRequest$Outbound` instead. */
  export type Outbound = GetAllComponentResourcesRequest$Outbound;
}

export function getAllComponentResourcesRequestToJSON(
  getAllComponentResourcesRequest: GetAllComponentResourcesRequest,
): string {
  return JSON.stringify(
    GetAllComponentResourcesRequest$outboundSchema.parse(
      getAllComponentResourcesRequest,
    ),
  );
}

export function getAllComponentResourcesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllComponentResourcesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllComponentResourcesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllComponentResourcesRequest' from JSON`,
  );
}

/** @internal */
export const GetAllComponentResourcesStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetAllComponentResourcesStatus
> = z.nativeEnum(GetAllComponentResourcesStatus);

/** @internal */
export const GetAllComponentResourcesStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetAllComponentResourcesStatus
> = GetAllComponentResourcesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesStatus$ {
  /** @deprecated use `GetAllComponentResourcesStatus$inboundSchema` instead. */
  export const inboundSchema = GetAllComponentResourcesStatus$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesStatus$outboundSchema` instead. */
  export const outboundSchema = GetAllComponentResourcesStatus$outboundSchema;
}

/** @internal */
export const GetAllComponentResourcesCourseComponent$inboundSchema: z.ZodType<
  GetAllComponentResourcesCourseComponent,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetAllComponentResourcesCourseComponent$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetAllComponentResourcesCourseComponent$outboundSchema: z.ZodType<
  GetAllComponentResourcesCourseComponent$Outbound,
  z.ZodTypeDef,
  GetAllComponentResourcesCourseComponent
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesCourseComponent$ {
  /** @deprecated use `GetAllComponentResourcesCourseComponent$inboundSchema` instead. */
  export const inboundSchema =
    GetAllComponentResourcesCourseComponent$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesCourseComponent$outboundSchema` instead. */
  export const outboundSchema =
    GetAllComponentResourcesCourseComponent$outboundSchema;
  /** @deprecated use `GetAllComponentResourcesCourseComponent$Outbound` instead. */
  export type Outbound = GetAllComponentResourcesCourseComponent$Outbound;
}

export function getAllComponentResourcesCourseComponentToJSON(
  getAllComponentResourcesCourseComponent:
    GetAllComponentResourcesCourseComponent,
): string {
  return JSON.stringify(
    GetAllComponentResourcesCourseComponent$outboundSchema.parse(
      getAllComponentResourcesCourseComponent,
    ),
  );
}

export function getAllComponentResourcesCourseComponentFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAllComponentResourcesCourseComponent,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAllComponentResourcesCourseComponent$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetAllComponentResourcesCourseComponent' from JSON`,
  );
}

/** @internal */
export const GetAllComponentResourcesResource$inboundSchema: z.ZodType<
  GetAllComponentResourcesResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetAllComponentResourcesResource$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetAllComponentResourcesResource$outboundSchema: z.ZodType<
  GetAllComponentResourcesResource$Outbound,
  z.ZodTypeDef,
  GetAllComponentResourcesResource
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesResource$ {
  /** @deprecated use `GetAllComponentResourcesResource$inboundSchema` instead. */
  export const inboundSchema = GetAllComponentResourcesResource$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesResource$outboundSchema` instead. */
  export const outboundSchema = GetAllComponentResourcesResource$outboundSchema;
  /** @deprecated use `GetAllComponentResourcesResource$Outbound` instead. */
  export type Outbound = GetAllComponentResourcesResource$Outbound;
}

export function getAllComponentResourcesResourceToJSON(
  getAllComponentResourcesResource: GetAllComponentResourcesResource,
): string {
  return JSON.stringify(
    GetAllComponentResourcesResource$outboundSchema.parse(
      getAllComponentResourcesResource,
    ),
  );
}

export function getAllComponentResourcesResourceFromJSON(
  jsonString: string,
): SafeParseResult<GetAllComponentResourcesResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllComponentResourcesResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllComponentResourcesResource' from JSON`,
  );
}

/** @internal */
export const GetAllComponentResourcesComponentResource$inboundSchema: z.ZodType<
  GetAllComponentResourcesComponentResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  status: GetAllComponentResourcesStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  courseComponent: z.lazy(() =>
    GetAllComponentResourcesCourseComponent$inboundSchema
  ),
  resource: z.lazy(() => GetAllComponentResourcesResource$inboundSchema),
  title: z.string(),
  sortOrder: z.number().default(0),
});

/** @internal */
export type GetAllComponentResourcesComponentResource$Outbound = {
  sourcedId: string;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  courseComponent: GetAllComponentResourcesCourseComponent$Outbound;
  resource: GetAllComponentResourcesResource$Outbound;
  title: string;
  sortOrder: number;
};

/** @internal */
export const GetAllComponentResourcesComponentResource$outboundSchema:
  z.ZodType<
    GetAllComponentResourcesComponentResource$Outbound,
    z.ZodTypeDef,
    GetAllComponentResourcesComponentResource
  > = z.object({
    sourcedId: z.string(),
    status: GetAllComponentResourcesStatus$outboundSchema,
    dateLastModified: z.date().transform(v => v.toISOString()).optional(),
    metadata: z.nullable(z.record(z.any())).optional(),
    courseComponent: z.lazy(() =>
      GetAllComponentResourcesCourseComponent$outboundSchema
    ),
    resource: z.lazy(() => GetAllComponentResourcesResource$outboundSchema),
    title: z.string(),
    sortOrder: z.number().default(0),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesComponentResource$ {
  /** @deprecated use `GetAllComponentResourcesComponentResource$inboundSchema` instead. */
  export const inboundSchema =
    GetAllComponentResourcesComponentResource$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesComponentResource$outboundSchema` instead. */
  export const outboundSchema =
    GetAllComponentResourcesComponentResource$outboundSchema;
  /** @deprecated use `GetAllComponentResourcesComponentResource$Outbound` instead. */
  export type Outbound = GetAllComponentResourcesComponentResource$Outbound;
}

export function getAllComponentResourcesComponentResourceToJSON(
  getAllComponentResourcesComponentResource:
    GetAllComponentResourcesComponentResource,
): string {
  return JSON.stringify(
    GetAllComponentResourcesComponentResource$outboundSchema.parse(
      getAllComponentResourcesComponentResource,
    ),
  );
}

export function getAllComponentResourcesComponentResourceFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAllComponentResourcesComponentResource,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAllComponentResourcesComponentResource$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetAllComponentResourcesComponentResource' from JSON`,
  );
}

/** @internal */
export const GetAllComponentResourcesResponseBody$inboundSchema: z.ZodType<
  GetAllComponentResourcesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  componentResources: z.array(
    z.lazy(() => GetAllComponentResourcesComponentResource$inboundSchema),
  ),
  totalCount: z.number(),
  pageCount: z.number(),
  pageNumber: z.number(),
  offset: z.number(),
  limit: z.number(),
});

/** @internal */
export type GetAllComponentResourcesResponseBody$Outbound = {
  componentResources: Array<GetAllComponentResourcesComponentResource$Outbound>;
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

/** @internal */
export const GetAllComponentResourcesResponseBody$outboundSchema: z.ZodType<
  GetAllComponentResourcesResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllComponentResourcesResponseBody
> = z.object({
  componentResources: z.array(
    z.lazy(() => GetAllComponentResourcesComponentResource$outboundSchema),
  ),
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
export namespace GetAllComponentResourcesResponseBody$ {
  /** @deprecated use `GetAllComponentResourcesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetAllComponentResourcesResponseBody$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetAllComponentResourcesResponseBody$outboundSchema;
  /** @deprecated use `GetAllComponentResourcesResponseBody$Outbound` instead. */
  export type Outbound = GetAllComponentResourcesResponseBody$Outbound;
}

export function getAllComponentResourcesResponseBodyToJSON(
  getAllComponentResourcesResponseBody: GetAllComponentResourcesResponseBody,
): string {
  return JSON.stringify(
    GetAllComponentResourcesResponseBody$outboundSchema.parse(
      getAllComponentResourcesResponseBody,
    ),
  );
}

export function getAllComponentResourcesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllComponentResourcesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAllComponentResourcesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllComponentResourcesResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAllComponentResourcesResponse$inboundSchema: z.ZodType<
  GetAllComponentResourcesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => GetAllComponentResourcesResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetAllComponentResourcesResponse$Outbound = {
  Result: GetAllComponentResourcesResponseBody$Outbound;
};

/** @internal */
export const GetAllComponentResourcesResponse$outboundSchema: z.ZodType<
  GetAllComponentResourcesResponse$Outbound,
  z.ZodTypeDef,
  GetAllComponentResourcesResponse
> = z.object({
  result: z.lazy(() => GetAllComponentResourcesResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllComponentResourcesResponse$ {
  /** @deprecated use `GetAllComponentResourcesResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllComponentResourcesResponse$inboundSchema;
  /** @deprecated use `GetAllComponentResourcesResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllComponentResourcesResponse$outboundSchema;
  /** @deprecated use `GetAllComponentResourcesResponse$Outbound` instead. */
  export type Outbound = GetAllComponentResourcesResponse$Outbound;
}

export function getAllComponentResourcesResponseToJSON(
  getAllComponentResourcesResponse: GetAllComponentResourcesResponse,
): string {
  return JSON.stringify(
    GetAllComponentResourcesResponse$outboundSchema.parse(
      getAllComponentResourcesResponse,
    ),
  );
}

export function getAllComponentResourcesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllComponentResourcesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllComponentResourcesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllComponentResourcesResponse' from JSON`,
  );
}
