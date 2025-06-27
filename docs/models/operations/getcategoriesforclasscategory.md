# GetCategoriesForClassCategory

Represents a category.

## Example Usage

```typescript
import { GetCategoriesForClassCategory } from "@superbuilders/oneroster/models/operations";

let value: GetCategoriesForClassCategory = {
  status: "active",
  title: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [operations.GetCategoriesForClassStatus](../../models/operations/getcategoriesforclassstatus.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `dateLastModified`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `title`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `weight`                                                                                         | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |