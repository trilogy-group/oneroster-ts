/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteScoreScaleRequest = {
  /**
   * The sourcedId of the score scale to delete
   */
  sourcedId: string;
};

/** @internal */
export const DeleteScoreScaleRequest$inboundSchema: z.ZodType<
  DeleteScoreScaleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type DeleteScoreScaleRequest$Outbound = {
  sourcedId: string;
};

/** @internal */
export const DeleteScoreScaleRequest$outboundSchema: z.ZodType<
  DeleteScoreScaleRequest$Outbound,
  z.ZodTypeDef,
  DeleteScoreScaleRequest
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteScoreScaleRequest$ {
  /** @deprecated use `DeleteScoreScaleRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteScoreScaleRequest$inboundSchema;
  /** @deprecated use `DeleteScoreScaleRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteScoreScaleRequest$outboundSchema;
  /** @deprecated use `DeleteScoreScaleRequest$Outbound` instead. */
  export type Outbound = DeleteScoreScaleRequest$Outbound;
}

export function deleteScoreScaleRequestToJSON(
  deleteScoreScaleRequest: DeleteScoreScaleRequest,
): string {
  return JSON.stringify(
    DeleteScoreScaleRequest$outboundSchema.parse(deleteScoreScaleRequest),
  );
}

export function deleteScoreScaleRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteScoreScaleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteScoreScaleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteScoreScaleRequest' from JSON`,
  );
}
