import { Handler, ServiceProviderImpl } from "@zuplo/runtime";
import routeLoader from "../config/routes.json";
import * as schemaValidations from "./ajv-schema.json";
import { runtimeInit } from "../modules/zuplo.runtime.ts";
import developerPortal from "../config/dev-portal.json";
import buildEnvironment from "./build.json";

// Instantiate services
const serviceProvider = new ServiceProviderImpl();

// This is needed because we are using worker script (instead of module)
// And we need to make this available outside of this file.
globalThis["__ZUPLO_SERVICE_PROVIDER"] = serviceProvider;

const runtimeSettings = { developerPortal };

const handler = new Handler(
  routeLoader,
  buildEnvironment,
  runtimeSettings,
  serviceProvider,
  schemaValidations,
  runtimeInit
);

addEventListener("fetch", (event) => {
  event.respondWith(handler.requestHandler(event.request, globalThis, event));
});
