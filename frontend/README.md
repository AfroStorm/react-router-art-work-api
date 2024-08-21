# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### api url's

Documentation - https://api.artic.edu/docs/#introduction

```js
const baseUrl = "https://api.artic.edu/api/v1/artworks/";
const paginatedBaseUrl =
  "https://api.artic.edu/api/v1/artworks?page=2&limit=10";
const searchUrl = "https://api.artic.edu/api/v1/artworks/search";

const imageBaseUrl = "https://www.artic.edu/iiif/2";
```

https://api.artic.edu/api/v1/artworks/search?q=yourSearchTerm&fields=id,title,artist_display,date_display,main_reference_number,medium_display,dimensions_detail,credit_line,is_public_domain

#### artwork data

```js
const artworkData = {
  // JSON data here
};

// card excerpt
const title = item.title;
const imageUrl = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
const date = item.date_display;
const artistOrigin = item.artist_display || item.place_of_origin;
const medium = item.medium_display.split(",")[0]; // Simplified medium
const dimensions = `${item.dimensions_detail[0].height} × ${item.dimensions_detail[0].width} cm`;
// card detail
const title = item.title;
const imageUrl = item.image_id
  ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
  : "";
const date = item.date_display;
const artistOrigin = item.artist_display || item.place_of_origin;
const medium = item.medium_display; // Simplified medium
const dimensions = `a: ${item.dimensions_detail[0]?.height} x ${item.dimensions_detail[0]?.width} cm
               b: ${item.dimensions_detail[1]?.height} x ${item.dimensions_detail[1]?.width} cm`;
const creditLine = item.credit_line;
const publicDomain = item.is_public_domain ? "Yes" : "No";
const description = `This textile artwork, originating from ${item.place_of_origin}, around ${item.date_display}
               showcases the intricate technique of silk plain weaving, characterized by ${item.medium_display}.`;
```
