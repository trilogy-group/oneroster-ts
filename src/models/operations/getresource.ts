/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetResourceRequest = {
  /**
   * The sourcedId of the resource
   */
  sourcedId: string;
};

/**
 * Successful response with the resource
 */
export type GetResourceResponse = {
  /**
   * Represents a digital resource of some kind.
   */
  resource: components.Resource;
};

/** @internal */
export const GetResourceRequest$inboundSchema: z.ZodType<
  GetResourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetResourceRequest$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetResourceRequest$outboundSchema: z.ZodType<
  GetResourceRequest$Outbound,
  z.ZodTypeDef,
  GetResourceRequest
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResourceRequest$ {
  /** @deprecated use `GetResourceRequest$inboundSchema` instead. */
  export const inboundSchema = GetResourceRequest$inboundSchema;
  /** @deprecated use `GetResourceRequest$outboundSchema` instead. */
  export const outboundSchema = GetResourceRequest$outboundSchema;
  /** @deprecated use `GetResourceRequest$Outbound` instead. */
  export type Outbound = GetResourceRequest$Outbound;
}

export function getResourceRequestToJSON(
  getResourceRequest: GetResourceRequest,
): string {
  return JSON.stringify(
    GetResourceRequest$outboundSchema.parse(getResourceRequest),
  );
}

export function getResourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResourceRequest' from JSON`,
  );
}

/** @internal */
export const GetResourceResponse$inboundSchema: z.ZodType<
  GetResourceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: components.Resource$inboundSchema,
});

/** @internal */
export type GetResourceResponse$Outbound = {
  resource: components.Resource$Outbound;
};

/** @internal */
export const GetResourceResponse$outboundSchema: z.ZodType<
  GetResourceResponse$Outbound,
  z.ZodTypeDef,
  GetResourceResponse
> = z.object({
  resource: components.Resource$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResourceResponse$ {
  /** @deprecated use `GetResourceResponse$inboundSchema` instead. */
  export const inboundSchema = GetResourceResponse$inboundSchema;
  /** @deprecated use `GetResourceResponse$outboundSchema` instead. */
  export const outboundSchema = GetResourceResponse$outboundSchema;
  /** @deprecated use `GetResourceResponse$Outbound` instead. */
  export type Outbound = GetResourceResponse$Outbound;
}

export function getResourceResponseToJSON(
  getResourceResponse: GetResourceResponse,
): string {
  return JSON.stringify(
    GetResourceResponse$outboundSchema.parse(getResourceResponse),
  );
}

export function getResourceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetResourceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResourceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResourceResponse' from JSON`,
  );
}
