import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("./layout/mainLayout.tsx", [
    route("/", "./routes/home.tsx"),
    route("/penjumlahan", "./routes/penjumlahan.tsx"),
    route("/pengurangan", "./routes/pengurangan.tsx"),
    route("/perkalian", "./routes/perkalian.tsx"),
  ])
] satisfies RouteConfig;
