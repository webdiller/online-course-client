export const mapToArray = (routes) => {
  let parseRoutes = [];
  for (let route in routes) {
    parseRoutes.push(routes[route])
  }
  return parseRoutes
}