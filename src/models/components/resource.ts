/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ResourceStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type ResourceStatus = ClosedEnum<typeof ResourceStatus>;

export const ResourceRole = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type ResourceRole = ClosedEnum<typeof ResourceRole>;

export const Importance = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type Importance = ClosedEnum<typeof Importance>;

/**
 * Represents a digital resource of some kind.
 */
export type Resource = {
  sourcedId: string;
  status: ResourceStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  roles?: Array<ResourceRole> | undefined;
  importance?: Importance | undefined;
  vendorResourceId: string;
  vendorId?: string | null | undefined;
  applicationId?: string | null | undefined;
};

/** @internal */
export const ResourceStatus$inboundSchema: z.ZodNativeEnum<
  typeof ResourceStatus
> = z.nativeEnum(ResourceStatus);

/** @internal */
export const ResourceStatus$outboundSchema: z.ZodNativeEnum<
  typeof ResourceStatus
> = ResourceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResourceStatus$ {
  /** @deprecated use `ResourceStatus$inboundSchema` instead. */
  export const inboundSchema = ResourceStatus$inboundSchema;
  /** @deprecated use `ResourceStatus$outboundSchema` instead. */
  export const outboundSchema = ResourceStatus$outboundSchema;
}

/** @internal */
export const ResourceRole$inboundSchema: z.ZodNativeEnum<typeof ResourceRole> =
  z.nativeEnum(ResourceRole);

/** @internal */
export const ResourceRole$outboundSchema: z.ZodNativeEnum<typeof ResourceRole> =
  ResourceRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResourceRole$ {
  /** @deprecated use `ResourceRole$inboundSchema` instead. */
  export const inboundSchema = ResourceRole$inboundSchema;
  /** @deprecated use `ResourceRole$outboundSchema` instead. */
  export const outboundSchema = ResourceRole$outboundSchema;
}

/** @internal */
export const Importance$inboundSchema: z.ZodNativeEnum<typeof Importance> = z
  .nativeEnum(Importance);

/** @internal */
export const Importance$outboundSchema: z.ZodNativeEnum<typeof Importance> =
  Importance$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Importance$ {
  /** @deprecated use `Importance$inboundSchema` instead. */
  export const inboundSchema = Importance$inboundSchema;
  /** @deprecated use `Importance$outboundSchema` instead. */
  export const outboundSchema = Importance$outboundSchema;
}

/** @internal */
export const Resource$inboundSchema: z.ZodType<
  Resource,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
  status: ResourceStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  roles: z.array(ResourceRole$inboundSchema).optional(),
  importance: Importance$inboundSchema.optional(),
  vendorResourceId: z.string(),
  vendorId: z.nullable(z.string()).optional(),
  applicationId: z.nullable(z.string()).optional(),
});

/** @internal */
export type Resource$Outbound = {
  sourcedId: string;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  roles?: Array<string> | undefined;
  importance?: string | undefined;
  vendorResourceId: string;
  vendorId?: string | null | undefined;
  applicationId?: string | null | undefined;
};

/** @internal */
export const Resource$outboundSchema: z.ZodType<
  Resource$Outbound,
  z.ZodTypeDef,
  Resource
> = z.object({
  sourcedId: z.string(),
  status: ResourceStatus$outboundSchema,
  dateLastModified: z.date().transform(v => v.toISOString()).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  roles: z.array(ResourceRole$outboundSchema).optional(),
  importance: Importance$outboundSchema.optional(),
  vendorResourceId: z.string(),
  vendorId: z.nullable(z.string()).optional(),
  applicationId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Resource$ {
  /** @deprecated use `Resource$inboundSchema` instead. */
  export const inboundSchema = Resource$inboundSchema;
  /** @deprecated use `Resource$outboundSchema` instead. */
  export const outboundSchema = Resource$outboundSchema;
  /** @deprecated use `Resource$Outbound` instead. */
  export type Outbound = Resource$Outbound;
}

export function resourceToJSON(resource: Resource): string {
  return JSON.stringify(Resource$outboundSchema.parse(resource));
}

export function resourceFromJSON(
  jsonString: string,
): SafeParseResult<Resource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Resource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Resource' from JSON`,
  );
}
