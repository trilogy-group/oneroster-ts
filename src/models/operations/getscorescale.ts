/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetScoreScaleRequest = {
  /**
   * The sourcedId of the score scale
   */
  sourcedId: string;
};

/**
 * Successful response with the score scale
 */
export type GetScoreScaleResponse = {
  /**
   * Represents a score scale.
   */
  scoreScale: components.ScoreScale;
};

/** @internal */
export const GetScoreScaleRequest$inboundSchema: z.ZodType<
  GetScoreScaleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type GetScoreScaleRequest$Outbound = {
  sourcedId: string;
};

/** @internal */
export const GetScoreScaleRequest$outboundSchema: z.ZodType<
  GetScoreScaleRequest$Outbound,
  z.ZodTypeDef,
  GetScoreScaleRequest
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetScoreScaleRequest$ {
  /** @deprecated use `GetScoreScaleRequest$inboundSchema` instead. */
  export const inboundSchema = GetScoreScaleRequest$inboundSchema;
  /** @deprecated use `GetScoreScaleRequest$outboundSchema` instead. */
  export const outboundSchema = GetScoreScaleRequest$outboundSchema;
  /** @deprecated use `GetScoreScaleRequest$Outbound` instead. */
  export type Outbound = GetScoreScaleRequest$Outbound;
}

export function getScoreScaleRequestToJSON(
  getScoreScaleRequest: GetScoreScaleRequest,
): string {
  return JSON.stringify(
    GetScoreScaleRequest$outboundSchema.parse(getScoreScaleRequest),
  );
}

export function getScoreScaleRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetScoreScaleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetScoreScaleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetScoreScaleRequest' from JSON`,
  );
}

/** @internal */
export const GetScoreScaleResponse$inboundSchema: z.ZodType<
  GetScoreScaleResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  scoreScale: components.ScoreScale$inboundSchema,
});

/** @internal */
export type GetScoreScaleResponse$Outbound = {
  scoreScale: components.ScoreScale$Outbound;
};

/** @internal */
export const GetScoreScaleResponse$outboundSchema: z.ZodType<
  GetScoreScaleResponse$Outbound,
  z.ZodTypeDef,
  GetScoreScaleResponse
> = z.object({
  scoreScale: components.ScoreScale$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetScoreScaleResponse$ {
  /** @deprecated use `GetScoreScaleResponse$inboundSchema` instead. */
  export const inboundSchema = GetScoreScaleResponse$inboundSchema;
  /** @deprecated use `GetScoreScaleResponse$outboundSchema` instead. */
  export const outboundSchema = GetScoreScaleResponse$outboundSchema;
  /** @deprecated use `GetScoreScaleResponse$Outbound` instead. */
  export type Outbound = GetScoreScaleResponse$Outbound;
}

export function getScoreScaleResponseToJSON(
  getScoreScaleResponse: GetScoreScaleResponse,
): string {
  return JSON.stringify(
    GetScoreScaleResponse$outboundSchema.parse(getScoreScaleResponse),
  );
}

export function getScoreScaleResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetScoreScaleResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetScoreScaleResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetScoreScaleResponse' from JSON`,
  );
}
