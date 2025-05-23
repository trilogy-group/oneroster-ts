/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LearningObjectiveSet,
  LearningObjectiveSet$inboundSchema,
  LearningObjectiveSet$Outbound,
  LearningObjectiveSet$outboundSchema,
} from "./learningobjectiveset.js";

export const AssessmentLineItemStatus = {
  Active: "active",
  Tobedeleted: "tobedeleted",
} as const;
export type AssessmentLineItemStatus = ClosedEnum<
  typeof AssessmentLineItemStatus
>;

export type AssessmentLineItemClass = {
  sourcedId: string;
};

/**
 * Represents a parent assessment line item.
 */
export type AssessmentLineItemParent = {
  sourcedId: string;
};

/**
 * Represents a score scale.
 */
export type AssessmentLineItemScoreScale = {
  sourcedId: string;
};

/**
 * Reference to the Component that this assessment line item is associated with.
 */
export type Component = {
  sourcedId: string;
};

/**
 * Reference to the Component Resource that this assessment line item is associated with.
 */
export type ComponentResource = {
  sourcedId: string;
};

/**
 * Represents an assessment line item.
 */
export type AssessmentLineItem = {
  sourcedId?: string | undefined;
  status: AssessmentLineItemStatus;
  dateLastModified?: Date | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  description?: string | null | undefined;
  class?: AssessmentLineItemClass | null | undefined;
  /**
   * Represents a parent assessment line item.
   */
  parent?: AssessmentLineItemParent | null | undefined;
  /**
   * Represents a score scale.
   */
  scoreScale?: AssessmentLineItemScoreScale | null | undefined;
  resultValueMin?: number | null | undefined;
  resultValueMax?: number | null | undefined;
  /**
   * Reference to the Component that this assessment line item is associated with.
   */
  component?: Component | null | undefined;
  /**
   * Reference to the Component Resource that this assessment line item is associated with.
   */
  componentResource?: ComponentResource | null | undefined;
  /**
   * Represents a learning objective set.
   */
  learningObjectiveSet?: Array<LearningObjectiveSet> | null | undefined;
};

/** @internal */
export const AssessmentLineItemStatus$inboundSchema: z.ZodNativeEnum<
  typeof AssessmentLineItemStatus
> = z.nativeEnum(AssessmentLineItemStatus);

/** @internal */
export const AssessmentLineItemStatus$outboundSchema: z.ZodNativeEnum<
  typeof AssessmentLineItemStatus
> = AssessmentLineItemStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentLineItemStatus$ {
  /** @deprecated use `AssessmentLineItemStatus$inboundSchema` instead. */
  export const inboundSchema = AssessmentLineItemStatus$inboundSchema;
  /** @deprecated use `AssessmentLineItemStatus$outboundSchema` instead. */
  export const outboundSchema = AssessmentLineItemStatus$outboundSchema;
}

/** @internal */
export const AssessmentLineItemClass$inboundSchema: z.ZodType<
  AssessmentLineItemClass,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type AssessmentLineItemClass$Outbound = {
  sourcedId: string;
};

/** @internal */
export const AssessmentLineItemClass$outboundSchema: z.ZodType<
  AssessmentLineItemClass$Outbound,
  z.ZodTypeDef,
  AssessmentLineItemClass
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentLineItemClass$ {
  /** @deprecated use `AssessmentLineItemClass$inboundSchema` instead. */
  export const inboundSchema = AssessmentLineItemClass$inboundSchema;
  /** @deprecated use `AssessmentLineItemClass$outboundSchema` instead. */
  export const outboundSchema = AssessmentLineItemClass$outboundSchema;
  /** @deprecated use `AssessmentLineItemClass$Outbound` instead. */
  export type Outbound = AssessmentLineItemClass$Outbound;
}

export function assessmentLineItemClassToJSON(
  assessmentLineItemClass: AssessmentLineItemClass,
): string {
  return JSON.stringify(
    AssessmentLineItemClass$outboundSchema.parse(assessmentLineItemClass),
  );
}

export function assessmentLineItemClassFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentLineItemClass, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentLineItemClass$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentLineItemClass' from JSON`,
  );
}

/** @internal */
export const AssessmentLineItemParent$inboundSchema: z.ZodType<
  AssessmentLineItemParent,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type AssessmentLineItemParent$Outbound = {
  sourcedId: string;
};

/** @internal */
export const AssessmentLineItemParent$outboundSchema: z.ZodType<
  AssessmentLineItemParent$Outbound,
  z.ZodTypeDef,
  AssessmentLineItemParent
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentLineItemParent$ {
  /** @deprecated use `AssessmentLineItemParent$inboundSchema` instead. */
  export const inboundSchema = AssessmentLineItemParent$inboundSchema;
  /** @deprecated use `AssessmentLineItemParent$outboundSchema` instead. */
  export const outboundSchema = AssessmentLineItemParent$outboundSchema;
  /** @deprecated use `AssessmentLineItemParent$Outbound` instead. */
  export type Outbound = AssessmentLineItemParent$Outbound;
}

export function assessmentLineItemParentToJSON(
  assessmentLineItemParent: AssessmentLineItemParent,
): string {
  return JSON.stringify(
    AssessmentLineItemParent$outboundSchema.parse(assessmentLineItemParent),
  );
}

export function assessmentLineItemParentFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentLineItemParent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentLineItemParent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentLineItemParent' from JSON`,
  );
}

/** @internal */
export const AssessmentLineItemScoreScale$inboundSchema: z.ZodType<
  AssessmentLineItemScoreScale,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type AssessmentLineItemScoreScale$Outbound = {
  sourcedId: string;
};

/** @internal */
export const AssessmentLineItemScoreScale$outboundSchema: z.ZodType<
  AssessmentLineItemScoreScale$Outbound,
  z.ZodTypeDef,
  AssessmentLineItemScoreScale
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentLineItemScoreScale$ {
  /** @deprecated use `AssessmentLineItemScoreScale$inboundSchema` instead. */
  export const inboundSchema = AssessmentLineItemScoreScale$inboundSchema;
  /** @deprecated use `AssessmentLineItemScoreScale$outboundSchema` instead. */
  export const outboundSchema = AssessmentLineItemScoreScale$outboundSchema;
  /** @deprecated use `AssessmentLineItemScoreScale$Outbound` instead. */
  export type Outbound = AssessmentLineItemScoreScale$Outbound;
}

export function assessmentLineItemScoreScaleToJSON(
  assessmentLineItemScoreScale: AssessmentLineItemScoreScale,
): string {
  return JSON.stringify(
    AssessmentLineItemScoreScale$outboundSchema.parse(
      assessmentLineItemScoreScale,
    ),
  );
}

export function assessmentLineItemScoreScaleFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentLineItemScoreScale, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentLineItemScoreScale$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentLineItemScoreScale' from JSON`,
  );
}

/** @internal */
export const Component$inboundSchema: z.ZodType<
  Component,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type Component$Outbound = {
  sourcedId: string;
};

/** @internal */
export const Component$outboundSchema: z.ZodType<
  Component$Outbound,
  z.ZodTypeDef,
  Component
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Component$ {
  /** @deprecated use `Component$inboundSchema` instead. */
  export const inboundSchema = Component$inboundSchema;
  /** @deprecated use `Component$outboundSchema` instead. */
  export const outboundSchema = Component$outboundSchema;
  /** @deprecated use `Component$Outbound` instead. */
  export type Outbound = Component$Outbound;
}

export function componentToJSON(component: Component): string {
  return JSON.stringify(Component$outboundSchema.parse(component));
}

export function componentFromJSON(
  jsonString: string,
): SafeParseResult<Component, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Component$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Component' from JSON`,
  );
}

/** @internal */
export const ComponentResource$inboundSchema: z.ZodType<
  ComponentResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string(),
});

/** @internal */
export type ComponentResource$Outbound = {
  sourcedId: string;
};

/** @internal */
export const ComponentResource$outboundSchema: z.ZodType<
  ComponentResource$Outbound,
  z.ZodTypeDef,
  ComponentResource
> = z.object({
  sourcedId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComponentResource$ {
  /** @deprecated use `ComponentResource$inboundSchema` instead. */
  export const inboundSchema = ComponentResource$inboundSchema;
  /** @deprecated use `ComponentResource$outboundSchema` instead. */
  export const outboundSchema = ComponentResource$outboundSchema;
  /** @deprecated use `ComponentResource$Outbound` instead. */
  export type Outbound = ComponentResource$Outbound;
}

export function componentResourceToJSON(
  componentResource: ComponentResource,
): string {
  return JSON.stringify(
    ComponentResource$outboundSchema.parse(componentResource),
  );
}

export function componentResourceFromJSON(
  jsonString: string,
): SafeParseResult<ComponentResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComponentResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComponentResource' from JSON`,
  );
}

/** @internal */
export const AssessmentLineItem$inboundSchema: z.ZodType<
  AssessmentLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourcedId: z.string().optional(),
  status: AssessmentLineItemStatus$inboundSchema,
  dateLastModified: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  description: z.nullable(z.string()).optional(),
  class: z.nullable(z.lazy(() => AssessmentLineItemClass$inboundSchema))
    .optional(),
  parent: z.nullable(z.lazy(() => AssessmentLineItemParent$inboundSchema))
    .optional(),
  scoreScale: z.nullable(
    z.lazy(() => AssessmentLineItemScoreScale$inboundSchema),
  ).optional(),
  resultValueMin: z.nullable(z.number()).optional(),
  resultValueMax: z.nullable(z.number()).optional(),
  component: z.nullable(z.lazy(() => Component$inboundSchema)).optional(),
  componentResource: z.nullable(z.lazy(() => ComponentResource$inboundSchema))
    .optional(),
  learningObjectiveSet: z.nullable(z.array(LearningObjectiveSet$inboundSchema))
    .optional(),
});

/** @internal */
export type AssessmentLineItem$Outbound = {
  sourcedId?: string | undefined;
  status: string;
  dateLastModified?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  title: string;
  description?: string | null | undefined;
  class?: AssessmentLineItemClass$Outbound | null | undefined;
  parent?: AssessmentLineItemParent$Outbound | null | undefined;
  scoreScale?: AssessmentLineItemScoreScale$Outbound | null | undefined;
  resultValueMin?: number | null | undefined;
  resultValueMax?: number | null | undefined;
  component?: Component$Outbound | null | undefined;
  componentResource?: ComponentResource$Outbound | null | undefined;
  learningObjectiveSet?:
    | Array<LearningObjectiveSet$Outbound>
    | null
    | undefined;
};

/** @internal */
export const AssessmentLineItem$outboundSchema: z.ZodType<
  AssessmentLineItem$Outbound,
  z.ZodTypeDef,
  AssessmentLineItem
> = z.object({
  sourcedId: z.string().optional(),
  status: AssessmentLineItemStatus$outboundSchema,
  dateLastModified: z.date().transform(v => v.toISOString()).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  title: z.string(),
  description: z.nullable(z.string()).optional(),
  class: z.nullable(z.lazy(() => AssessmentLineItemClass$outboundSchema))
    .optional(),
  parent: z.nullable(z.lazy(() => AssessmentLineItemParent$outboundSchema))
    .optional(),
  scoreScale: z.nullable(
    z.lazy(() => AssessmentLineItemScoreScale$outboundSchema),
  ).optional(),
  resultValueMin: z.nullable(z.number()).optional(),
  resultValueMax: z.nullable(z.number()).optional(),
  component: z.nullable(z.lazy(() => Component$outboundSchema)).optional(),
  componentResource: z.nullable(z.lazy(() => ComponentResource$outboundSchema))
    .optional(),
  learningObjectiveSet: z.nullable(z.array(LearningObjectiveSet$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentLineItem$ {
  /** @deprecated use `AssessmentLineItem$inboundSchema` instead. */
  export const inboundSchema = AssessmentLineItem$inboundSchema;
  /** @deprecated use `AssessmentLineItem$outboundSchema` instead. */
  export const outboundSchema = AssessmentLineItem$outboundSchema;
  /** @deprecated use `AssessmentLineItem$Outbound` instead. */
  export type Outbound = AssessmentLineItem$Outbound;
}

export function assessmentLineItemToJSON(
  assessmentLineItem: AssessmentLineItem,
): string {
  return JSON.stringify(
    AssessmentLineItem$outboundSchema.parse(assessmentLineItem),
  );
}

export function assessmentLineItemFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentLineItem' from JSON`,
  );
}
