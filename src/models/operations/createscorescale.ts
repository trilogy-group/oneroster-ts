/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateScoreScaleRequest = {
  /**
   * Represents a score scale.
   */
  scoreScale: components.ScoreScale;
};

export type CreateScoreScaleSourcedIdPairs = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

/**
 * Score scale successfully created
 */
export type CreateScoreScaleResponse = {
  sourcedIdPairs: CreateScoreScaleSourcedIdPairs;
};

/** @internal */
export const CreateScoreScaleRequest$inboundSchema: z.ZodType<
  CreateScoreScaleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  scoreScale: components.ScoreScale$inboundSchema,
});

/** @internal */
export type CreateScoreScaleRequest$Outbound = {
  scoreScale: components.ScoreScale$Outbound;
};

/** @internal */
export const CreateScoreScaleRequest$outboundSchema: z.ZodType<
  CreateScoreScaleRequest$Outbound,
  z.ZodTypeDef,
  CreateScoreScaleRequest
> = z.object({
  scoreScale: components.ScoreScale$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScoreScaleRequest$ {
  /** @deprecated use `CreateScoreScaleRequest$inboundSchema` instead. */
  export const inboundSchema = CreateScoreScaleRequest$inboundSchema;
  /** @deprecated use `CreateScoreScaleRequest$outboundSchema` instead. */
  export const outboundSchema = CreateScoreScaleRequest$outboundSchema;
  /** @deprecated use `CreateScoreScaleRequest$Outbound` instead. */
  export type Outbound = CreateScoreScaleRequest$Outbound;
}

export function createScoreScaleRequestToJSON(
  createScoreScaleRequest: CreateScoreScaleRequest,
): string {
  return JSON.stringify(
    CreateScoreScaleRequest$outboundSchema.parse(createScoreScaleRequest),
  );
}

export function createScoreScaleRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateScoreScaleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScoreScaleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScoreScaleRequest' from JSON`,
  );
}

/** @internal */
export const CreateScoreScaleSourcedIdPairs$inboundSchema: z.ZodType<
  CreateScoreScaleSourcedIdPairs,
  z.ZodTypeDef,
  unknown
> = z.object({
  suppliedSourcedId: z.string(),
  allocatedSourcedId: z.string(),
});

/** @internal */
export type CreateScoreScaleSourcedIdPairs$Outbound = {
  suppliedSourcedId: string;
  allocatedSourcedId: string;
};

/** @internal */
export const CreateScoreScaleSourcedIdPairs$outboundSchema: z.ZodType<
  CreateScoreScaleSourcedIdPairs$Outbound,
  z.ZodTypeDef,
  CreateScoreScaleSourcedIdPairs
> = z.object({
  suppliedSourcedId: z.string(),
  allocatedSourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScoreScaleSourcedIdPairs$ {
  /** @deprecated use `CreateScoreScaleSourcedIdPairs$inboundSchema` instead. */
  export const inboundSchema = CreateScoreScaleSourcedIdPairs$inboundSchema;
  /** @deprecated use `CreateScoreScaleSourcedIdPairs$outboundSchema` instead. */
  export const outboundSchema = CreateScoreScaleSourcedIdPairs$outboundSchema;
  /** @deprecated use `CreateScoreScaleSourcedIdPairs$Outbound` instead. */
  export type Outbound = CreateScoreScaleSourcedIdPairs$Outbound;
}

export function createScoreScaleSourcedIdPairsToJSON(
  createScoreScaleSourcedIdPairs: CreateScoreScaleSourcedIdPairs,
): string {
  return JSON.stringify(
    CreateScoreScaleSourcedIdPairs$outboundSchema.parse(
      createScoreScaleSourcedIdPairs,
    ),
  );
}

export function createScoreScaleSourcedIdPairsFromJSON(
  jsonString: string,
): SafeParseResult<CreateScoreScaleSourcedIdPairs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScoreScaleSourcedIdPairs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScoreScaleSourcedIdPairs' from JSON`,
  );
}

/** @internal */
export const CreateScoreScaleResponse$inboundSchema: z.ZodType<
  CreateScoreScaleResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedIdPairs: z.lazy(() => CreateScoreScaleSourcedIdPairs$inboundSchema),
});

/** @internal */
export type CreateScoreScaleResponse$Outbound = {
  sourcedIdPairs: CreateScoreScaleSourcedIdPairs$Outbound;
};

/** @internal */
export const CreateScoreScaleResponse$outboundSchema: z.ZodType<
  CreateScoreScaleResponse$Outbound,
  z.ZodTypeDef,
  CreateScoreScaleResponse
> = z.object({
  sourcedIdPairs: z.lazy(() => CreateScoreScaleSourcedIdPairs$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScoreScaleResponse$ {
  /** @deprecated use `CreateScoreScaleResponse$inboundSchema` instead. */
  export const inboundSchema = CreateScoreScaleResponse$inboundSchema;
  /** @deprecated use `CreateScoreScaleResponse$outboundSchema` instead. */
  export const outboundSchema = CreateScoreScaleResponse$outboundSchema;
  /** @deprecated use `CreateScoreScaleResponse$Outbound` instead. */
  export type Outbound = CreateScoreScaleResponse$Outbound;
}

export function createScoreScaleResponseToJSON(
  createScoreScaleResponse: CreateScoreScaleResponse,
): string {
  return JSON.stringify(
    CreateScoreScaleResponse$outboundSchema.parse(createScoreScaleResponse),
  );
}

export function createScoreScaleResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateScoreScaleResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScoreScaleResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScoreScaleResponse' from JSON`,
  );
}
