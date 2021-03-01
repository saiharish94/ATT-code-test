export const getCall = (path) => {
  if (path === "/customer/1234/order") {
    return [
      {
        id: 10,
        orderId: 198772,
        items: [
          {
            id: 100000,
            name: "Apple Iphone XR",
            plan: "AT&T Unlimited Extra",
            skuId: "sku1234",
            skuAttributes: {
              model: "Iphone XR",
              manufacturer: "Apple",
              color: "Yellow",
              size: "64 GB",
            },
            quantity: 1,
            telephoneNumber: "123.456.7890",
            status: "ordered",
            complete: true,
            estimatedShipDateRange: {
              fromDate: "2021-04-09T13:39:52.774",
              toDate: "2021-04-14T13:39:52.774",
            },
            newEstimatedShipDateRange: {
              fromDate: "2021-05-04T13:39:52.774",
              toDate: "2021-05-08T13:39:52.774",
            },
            userAcceptedDelay: true,
          },
        ],
        status: "ordered",
        complete: true,
        shipingAddress: {
          street: "1234 Peachtree",
          city: "Peachtree",
          state: "GA",
          zip: "67890",
        },
        shipments: [
          {
            id: 1,
            items: [100000],
            carrier: "USPS",
            trackingNumber: "9400100000000000000000",
            trackingUrl:
              "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
            estimatedDeliveryDate: "2021-05-06T13:39:52.774",
            shipDate: "2021-05-02T13:39:52.774",
          },
        ],
      },
    ];
  }
  if (path === "/order/10") {
    return [
      {
        id: 10,
        orderId: 198772,
        items: [
          {
            id: 100000,
            name: "Apple Iphone XR",
            plan: "AT&T Unlimited Extra",
            skuId: "sku1234",
            skuAttributes: {
              model: "Iphone XR",
              manufacturer: "Apple",
              color: "Yellow",
              size: "64 GB",
            },
            quantity: 1,
            telephoneNumber: "409.406.3322",
            status: "ordered",
            complete: true,
            estimatedShipDateRange: {
              fromDate: "2021-04-09T13:39:52.774",
              toDate: "2021-04-14T13:39:52.774",
            },
            newEstimatedShipDateRange: {
              fromDate: "2021-05-04T13:39:52.774",
              toDate: "2021-05-08T13:39:52.774",
            },
            userAcceptedDelay: true,
          },
        ],
        status: "ordered",
        complete: true,
        shipingAddress: {
          street: "1234 Peachtree",
          city: "Peachtree",
          state: "GA",
          zip: "67890",
        },
        shipments: [
          {
            id: 1,
            items: [100000],
            carrier: "USPS",
            trackingNumber: "9400100000000000000000",
            trackingUrl:
              "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
            estimatedDeliveryDate: "2020-10-06T13:39:52.774",
            shipDate: "2020-10-02T13:39:52.774",
          },
        ],
      },
    ];
  }
};
