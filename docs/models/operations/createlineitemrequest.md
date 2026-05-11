# CreateLineItemRequest

## Example Usage

```typescript
import { CreateLineItemRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateLineItemRequest = {
  lineItem: {
    title: "<value>",
    assignDate: new Date("2025-03-20T23:18:56.025Z"),
    dueDate: new Date("2024-07-27T04:26:11.874Z"),
    class: {
      sourcedId: "<id>",
    },
    school: {
      sourcedId: "<id>",
    },
    category: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `lineItem`                                                 | [components.LineItem](../../models/components/lineitem.md) | :heavy_check_mark:                                         | Represents a line item.                                    |