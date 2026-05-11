# GetAllDemographicsResponse

## Example Usage

```typescript
import { GetAllDemographicsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllDemographicsResponse = {
  result: {
    demographics: [
      {
        sourcedId: "<id>",
        status: "active",
        birthDate: "1971-09-11",
        sex: "other",
        americanIndianOrAlaskaNative: "<value>",
        asian: "<value>",
        blackOrAfricanAmerican: "<value>",
        nativeHawaiianOrOtherPacificIslander: "<value>",
        white: "<value>",
        demographicRaceTwoOrMoreRaces: "<value>",
        hispanicOrLatinoEthnicity: "<value>",
        countryOfBirthCode: "<value>",
        stateOfBirthAbbreviation: "<value>",
        cityOfBirth: "<value>",
        publicSchoolResidenceStatus: "<value>",
      },
    ],
    totalCount: 2609.49,
    pageCount: 755.35,
    pageNumber: 6974.12,
    offset: 474.8,
    limit: 5041.48,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.GetAllDemographicsResponseBody](../../models/operations/getalldemographicsresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |