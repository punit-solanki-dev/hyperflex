import { type RouteConfig, index, layout } from "@react-router/dev/routes"

export default [layout("layouts/data.tsx", [index("routes/home.tsx")])] satisfies RouteConfig